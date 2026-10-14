#!/usr/bin/env python3
"""dimshelves：喜欢的视频收藏架（https://shelves.dimpurrc.com）。

  shelf.py add <url> [-s 分类] [-t 标签 ...] [--into <id>] [--new]   加视频（分类默认「音乐」）；同一视频的 B 站 / YouTube 源自动合并
  shelf.py mv <id> <分类>                                   换分类
  shelf.py name <id> <显示名> [--sub 副标题]                改显示名（如番剧正式译名）；副标题顶替 UP 主那一行
  shelf.py tag <id> 标签 ...  [--rm]                        加 / 去标签
  shelf.py rm <id>                                          删条目
  shelf.py ls                                               列出
  shelf.py deploy                                           rsync 到服务器

元数据靠 yt-dlp（B 站 API 直连会被风控），封面下到 site/covers/ 并用 sips 缩到 720 宽。
数据真源 = site/videos.json（git 管）。
"""
import argparse, json, os, re, subprocess, sys, time, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SITE = ROOT / "site"
DATA = SITE / "videos.json"
COVERS = SITE / "covers"
REMOTE = os.environ.get("SHELF_REMOTE", "root@kafu.dimp.cloud:/var/www/shelves.dimpurrc.com/")


def load():
    return json.loads(DATA.read_text()) if DATA.exists() else []


def save(items):
    DATA.write_text(json.dumps(items, ensure_ascii=False, indent=1) + "\n")


def platform_of(url):
    if re.search(r"bilibili\.com|b23\.tv", url):
        return "bili"
    if re.search(r"youtube\.com|youtu\.be", url):
        return "yt"
    sys.exit(f"不认识的链接：{url}")


UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
KAHO = os.environ.get("SHELF_CN_HOST", "ubuntu@kaho.dimp.cloud")  # 国内机，B 站锁区的视频从这里查 API


def resolve(url):
    if "b23.tv" in url:
        req = urllib.request.Request(url, headers={"User-Agent": UA}, method="HEAD")
        try:
            url = urllib.request.urlopen(req, timeout=20).url
        except Exception as e:
            url = getattr(e, "url", url)
    return url.split("?")[0]


def bili_fallback(url):
    """yt-dlp 在英国拿不到（锁区 / 风控）时的兜底。"""
    url = resolve(url)
    bv = re.search(r"BV[0-9A-Za-z]{10}", url)
    if bv:
        cmd = f"curl -s -A 'Mozilla/5.0' 'https://api.bilibili.com/x/web-interface/view?bvid={bv.group(0)}'"
        out = subprocess.run(["ssh", "-o", "ConnectTimeout=10", KAHO, cmd], capture_output=True, text=True, timeout=60)
        v = json.loads(out.stdout)["data"]
        return {"id": v["bvid"], "webpage_url": f"https://www.bilibili.com/video/{v['bvid']}", "title": v["title"],
                "uploader": v["owner"]["name"], "duration": 0 if v.get("videos", 1) > 1 else v["duration"],
                "thumbnail": v["pic"], "tags": []}
    ep = re.search(r"(ep|ss)(\d+)", url)
    if ep:  # 番剧：页面 og 标签就够
        html = subprocess.run(["curl", "-s", "-A", UA, "-H", "Referer: https://www.bilibili.com/", url],
                              capture_output=True, text=True, timeout=30).stdout  # urllib 会被 412，curl 不会
        og = dict(re.findall(r'<meta property="og:(\w+)" content="([^"]*)"', html))
        return {"id": ep.group(0), "webpage_url": f"https://www.bilibili.com/bangumi/play/{ep.group(0)}",
                "title": og.get("title", ""), "uploader": "哔哩哔哩番剧", "duration": 0,
                "thumbnail": og.get("image", ""), "tags": []}
    return None


def probe(url):
    out = subprocess.run(["yt-dlp", "--dump-json", "--no-warnings", "--no-playlist", url],
                         capture_output=True, text=True, timeout=120)
    p = platform_of(url)
    if out.returncode:
        d = bili_fallback(url) if p == "bili" else None
        if not d:
            sys.exit("yt-dlp 失败：" + out.stderr.strip()[-300:])
        print("（yt-dlp 拿不到，走兜底）")
    else:
        d = json.loads(out.stdout)
    bv = None
    if p == "bili":
        bv = re.search(r"BV[0-9A-Za-z]{10}", d.get("webpage_url", "") + d.get("id", ""))
        clean = f"https://www.bilibili.com/video/{bv.group(0)}" if bv else d["webpage_url"].split("?")[0]
    else:
        clean = f"https://www.youtube.com/watch?v={d['id']}"
    title, dur = d.get("title", ""), round(d.get("duration") or 0)
    m = re.search(r"\s+p0*1\b.*$", title) if p == "bili" else None
    if m:  # 分 P 合集：去掉「 p01 xx」，时长只是第一 P 的，不显示
        title, dur = title[:m.start()], 0
    return {
        "platform": p, "url": clean, "vid": bv.group(0) if p == "bili" and bv else d["id"], "title": title,
        "uploader": d.get("uploader", ""), "duration": dur,
        "thumbnail": (d.get("thumbnail") or "").replace("http://", "https://"),
        "tags": d.get("tags") or [],
    }


def fetch_cover(src, key):
    COVERS.mkdir(parents=True, exist_ok=True)
    dst = COVERS / f"{key}.jpg"
    req = urllib.request.Request(src, headers={"User-Agent": "Mozilla/5.0", "Referer": "https://www.bilibili.com/"})
    dst.write_bytes(urllib.request.urlopen(req, timeout=30).read())
    subprocess.run(["sips", "-s", "format", "jpeg", "-s", "formatOptions", "78", "--resampleWidth", "720",
                    str(dst), "--out", str(dst)], capture_output=True)
    return f"covers/{dst.name}"


def quoted(t):
    return set(re.findall(r"[「『\"“](.+?)[」』\"”]", t))


def find_same(items, info):
    for it in items:
        if info["platform"] in it["sources"]:
            continue
        if abs(it.get("duration", 0) - info["duration"]) <= 4 and (quoted(it["title"]) & quoted(info["title"])):
            return it
    return None


def cmd_add(a):
    items = load()
    info = probe(a.url)
    for it in items:
        if any(s["url"] == info["url"] for s in it["sources"].values()):
            sys.exit(f"已收藏：{it['id']} {it['title']}")
    target = None
    if a.into:
        target = next((i for i in items if i["id"] == a.into), None) or sys.exit(f"没有 {a.into}")
    elif not a.new:
        target = find_same(items, info)
    src = {"url": info["url"], "title": info["title"], "uploader": info["uploader"]}
    if target:
        target["sources"][info["platform"]] = src
        target["tags"] = sorted(set(target["tags"]) | set(a.t or []))
        print(f"并入 {target['id']}「{target['title']}」← {info['platform']}")
    else:
        vid = f"{info['platform']}-{info['vid']}"
        items.insert(0, {
            "id": vid, "title": info["title"], "uploader": info["uploader"], "duration": info["duration"],
            "cover": fetch_cover(info["thumbnail"], vid) if info["thumbnail"] else "",
            "shelf": a.s, "tags": sorted(set(a.t or [])), "added": time.strftime("%Y-%m-%d"),
            "sources": {info["platform"]: src},
        })
        print(f"新增 {vid}「{info['title']}」  平台标签参考：{', '.join(info['tags'][:8])}")
    save(items)


def cmd_tag(a):
    items = load()
    it = next((i for i in items if i["id"] == a.id), None) or sys.exit(f"没有 {a.id}")
    it["tags"] = sorted(set(it["tags"]) - set(a.tags)) if a.rm else sorted(set(it["tags"]) | set(a.tags))
    save(items)
    print(it["id"], it["tags"])


def cmd_mv(a):
    items = load()
    it = next((i for i in items if i["id"] == a.id), None) or sys.exit(f"没有 {a.id}")
    it["shelf"] = a.shelf
    save(items)
    print(it["id"], "→", a.shelf)


def cmd_name(a):
    items = load()
    it = next((i for i in items if i["id"] == a.id), None) or sys.exit(f"没有 {a.id}")
    it["name"] = a.name
    if a.sub is not None:
        it["sub"] = a.sub
    save(items)
    print(it["id"], "→", a.name, "|", it.get("sub", ""))


def cmd_rm(a):
    items = load()
    keep = [i for i in items if i["id"] != a.id]
    if len(keep) == len(items):
        sys.exit(f"没有 {a.id}")
    save(keep)
    print("已删", a.id)


def cmd_ls(a):
    for i in load():
        print(f"{i['id']:<22} {i.get('shelf', ''):<4} {'+'.join(i['sources']):<8} {' '.join('#'+t for t in i['tags']):<24} {i.get('name') or i['title']}")


def cmd_deploy(a):
    subprocess.run(["rsync", "-az", "--delete", f"{SITE}/", REMOTE], check=True)
    print("已部署 → https://shelves.dimpurrc.com")


p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
sub = p.add_subparsers(dest="cmd", required=True)
s = sub.add_parser("add"); s.add_argument("url"); s.add_argument("-s", default="音乐"); s.add_argument("-t", nargs="*"); s.add_argument("--into"); s.add_argument("--new", action="store_true"); s.set_defaults(f=cmd_add)
s = sub.add_parser("tag"); s.add_argument("id"); s.add_argument("tags", nargs="+"); s.add_argument("--rm", action="store_true"); s.set_defaults(f=cmd_tag)
s = sub.add_parser("mv"); s.add_argument("id"); s.add_argument("shelf"); s.set_defaults(f=cmd_mv)
s = sub.add_parser("name"); s.add_argument("id"); s.add_argument("name"); s.add_argument("--sub"); s.set_defaults(f=cmd_name)
s = sub.add_parser("rm"); s.add_argument("id"); s.set_defaults(f=cmd_rm)
s = sub.add_parser("ls"); s.set_defaults(f=cmd_ls)
s = sub.add_parser("deploy"); s.set_defaults(f=cmd_deploy)
a = p.parse_args(); a.f(a)
