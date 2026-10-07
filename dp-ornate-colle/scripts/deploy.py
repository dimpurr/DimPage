#!/usr/bin/env python3
"""Deploy dp-ornate-colle to kafu. Git is the source of truth.

  python3 scripts/deploy.py check   # compare git HEAD (tracked files) with the server
  python3 scripts/deploy.py bump    # set ?v=<hash> on data/*.js tags in index.html (commit afterwards)
  python3 scripts/deploy.py push    # upload files that differ; refuses unless the tree is clean and pushed

Rules (see DimResearchS create/media/personal-page.md §部署与维护):
- Never edit files on the server. Change git, commit, push, then `push` here.
- Only files tracked under dp-ornate-colle/ are managed. Other things in the web root
  (res/, dp-* archives, lab/, dimchen.com/, backups) are left alone; nothing is deleted.
- data/*.js are served with `Cache-Control: immutable` for a year, so index.html must
  reference them with ?v=<content hash>. `push` refuses if a tag is stale; run `bump`.
- index.html is a template: nginx fills __SEO_*__ per host (personal-page-seo-map.conf).
"""
import base64, hashlib, io, os, re, subprocess, sys, tarfile

HOST = "root@149.28.192.21"
ROOT = "/var/www/im.dimpurrc.com"
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # dp-ornate-colle/


def sh(cmd, **kw):
    return subprocess.run(cmd, cwd=HERE, check=True, capture_output=True, **kw).stdout


def tracked():
    out = sh(["git", "ls-files", "-z", "."]).decode()
    return sorted(p for p in out.split("\0") if p and not p.startswith("scripts/"))  # tooling is not served


def local_hashes(files):
    return {p: hashlib.sha256(open(os.path.join(HERE, p), "rb").read()).hexdigest() for p in files}


REMOTE = r'''
import hashlib, os, sys
root = sys.argv[1]
for p in sys.stdin.buffer.read().decode().split("\0"):
    if not p: continue
    f = os.path.join(root, p)
    h = hashlib.sha256(open(f, "rb").read()).hexdigest() if os.path.isfile(f) else "MISSING"
    sys.stdout.write(h + "\t" + p + "\n")
'''


def remote_hashes(files):
    code = base64.b64encode(REMOTE.encode()).decode()
    out = subprocess.run(["ssh", "-o", "BatchMode=yes", HOST,
                          f"python3 -c 'import base64;exec(base64.b64decode(\"{code}\"))' {ROOT}"],
                         input="\0".join(files).encode(), capture_output=True, check=True).stdout.decode()
    res = {}
    for line in out.splitlines():
        h, p = line.split("\t", 1)
        res[p] = h
    return res


def diff():
    files = tracked()
    loc, rem = local_hashes(files), remote_hashes(files)
    return [p for p in files if loc[p] != rem.get(p)], rem


def stale_version_tags():
    html = open(os.path.join(HERE, "index.html"), encoding="utf-8").read()
    bad = []
    for m in re.finditer(r'<script src="(data/[\w-]+\.js)(?:\?v=([0-9a-f]+))?"', html):
        want = hashlib.sha256(open(os.path.join(HERE, m.group(1)), "rb").read()).hexdigest()[:8]
        if m.group(2) != want:
            bad.append((m.group(1), m.group(2), want))
    return bad


def cmd_check():
    changed, rem = diff()
    for p in changed:
        print(("MISSING " if rem.get(p) == "MISSING" else "DIFFERS ") + p)
    for f, have, want in stale_version_tags():
        print(f"STALE-V {f} ?v={have} (content {want})")
    print(f"{len(changed)} file(s) differ from git HEAD" if changed else "server == git (managed files)")


def cmd_bump():
    path = os.path.join(HERE, "index.html")
    html = open(path, encoding="utf-8").read()
    for f, have, want in stale_version_tags():
        html = re.sub(r'<script src="' + re.escape(f) + r'(?:\?v=[0-9a-f]+)?"', f'<script src="{f}?v={want}"', html)
        print(f"{f}: ?v={want}")
    open(path, "w", encoding="utf-8").write(html)


def cmd_push():
    if sh(["git", "status", "--porcelain", "."]).strip():
        sys.exit("refuse: uncommitted changes under dp-ornate-colle/ — commit first (git is the source of truth)")
    sh(["git", "fetch", "-q", "origin"])
    if sh(["git", "rev-list", "--count", "@{u}..HEAD"]).strip() != b"0":
        sys.exit("refuse: local commits not pushed to origin — git push first")
    if stale_version_tags():
        sys.exit("refuse: stale ?v= tags in index.html — run `bump`, commit, push")
    changed, _ = diff()
    if not changed:
        print("nothing to deploy"); return
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz", format=tarfile.PAX_FORMAT) as t:
        for p in changed:
            ti = t.gettarinfo(os.path.join(HERE, p), arcname=p)
            ti.uid = ti.gid = 0; ti.uname = ti.gname = ""; ti.pax_headers = {}
            with open(os.path.join(HERE, p), "rb") as fh:
                t.addfile(ti, fh)
    subprocess.run(["ssh", "-o", "BatchMode=yes", HOST,
                    f"tar xzf - --no-same-owner -C {ROOT} && chown -R www-data:www-data {ROOT}/index.html {ROOT}/data {ROOT}/img"],
                   input=buf.getvalue(), check=True)
    for p in changed:
        print("deployed " + p)
    left, _ = diff()
    print("verified: server == git" if not left else f"WARNING: still differ: {left}")


if __name__ == "__main__":
    {"check": cmd_check, "bump": cmd_bump, "push": cmd_push}.get(
        (sys.argv[1:] or ["check"])[0], lambda: sys.exit(__doc__))()
