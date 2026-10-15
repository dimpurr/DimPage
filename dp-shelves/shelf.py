#!/usr/bin/env python3
"""dimshelves：喜欢的视频收藏架（https://shelves.dimpurrc.com）。

  shelf.py add <url> [-s 分类] [-t 标签 ...] [--into <id>] [--new]   加视频（分类默认「音乐」）；同一视频的 B 站 / YouTube 源自动合并
  shelf.py book <id> <名> --sub 副标题 --cover 图片URL [-s 漫画] [-t 标签 ...]   加不链到任何地方的条目（漫画）
  shelf.py mv <id> <分类>                                   换分类
  shelf.py name <id> <显示名> [--sub 副标题]                改显示名（如番剧正式译名）；副标题顶替 UP 主那一行
  shelf.py tag <id> 标签 ...  [--rm]                        加 / 去标签
  shelf.py cover <id> [图片URL]                             换封面（不给 URL 就只去黑边重裁）；比例按架定；文件名换版本号，躲开 30 天缓存
  shelf.py rm <id>                                          删条目
  shelf.py ls                                               列出
  shelf.py check                                            自检（缺中文名、封面不对、标题残留分 P 号…）
  shelf.py deploy                                           先 check，再 rsync 到服务器

元数据靠 yt-dlp（B 站 API 直连会被风控），封面下到 site/covers/ 并用 sips 缩到 720 宽。
数据真源 = site/videos.json（git 管）。流程与规范见 README.md，刻意设计见 BY-DESIGN.md。
"""
import argparse, json, os, re, subprocess, sys, time, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SITE = ROOT / "site"
DATA = SITE / "videos.json"
COVERS = SITE / "covers"
SQUARE_SHELVES = {"听歌"}  # 和 index.html 的 SQUARE 保持一致
PORTRAIT_SHELVES = {"漫画"}  # 和 index.html 的 PORTRAIT 保持一致；书封竖版 2:3
SIZES = {"wide": (720, 405), "square": (600, 600), "portrait": (400, 600)}


def shape_of(shelf):
    return "square" if shelf in SQUARE_SHELVES else "portrait" if shelf in PORTRAIT_SHELVES else "wide"
ENV_FILES = [Path(os.environ["DIMPAGE_ENV"])] if os.environ.get("DIMPAGE_ENV") else [
    Path.home() / p / ".env.project" for p in
    ("WorkflowUser/Code/Project/dimresearchcode", "WorkflowUser/Code/Personal/dimresearchcode", "Workflow/code/project/dimresearchcode")]


def env(key):
    """主机入口不写进公开仓：先看环境变量，再看 chco .env.project（或 DIMPAGE_ENV 指的文件）。"""
    if os.environ.get(key):
        return os.environ[key]
    for f in ENV_FILES:
        if f.exists():
            m = re.search(rf"^{key}=(.*)$", f.read_text(), re.M)
            if m:
                return m.group(1).strip().strip('"')
    sys.exit(f"缺 {key}：设环境变量，或写进 chco .env.project（见 README「部署」）")


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
        cn_host = env("DIMPAGE_SHELVES_CN_HOST")  # 国内机，B 站锁区的视频从这里查 API
        out = subprocess.run(["ssh", "-o", "ConnectTimeout=10", cn_host, cmd], capture_output=True, text=True, timeout=60)
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


def tidy_cover(path, shape="wide"):
    """去掉四周纯黑的黑边（letterbox / pillarbox），再居中裁成 SIZES[shape]：16:9 / 方形专辑 / 竖版书封。"""
    from PIL import Image
    im = Image.open(path).convert("RGB")
    g = im.convert("L")
    w, h = im.size
    px = g.load()
    def dark_row(y): return sum(px[x, y] for x in range(0, w, 4)) / len(range(0, w, 4)) < 14
    def dark_col(x): return sum(px[x, y] for y in range(0, h, 4)) / len(range(0, h, 4)) < 14
    t, b, l, r = 0, h - 1, 0, w - 1
    while t < h // 3 and dark_row(t): t += 1
    while b > h * 2 // 3 and dark_row(b): b -= 1
    while l < w // 3 and dark_col(l): l += 1
    while r > w * 2 // 3 and dark_col(r): r -= 1
    im = im.crop((l, t, r + 1, b + 1))
    w, h = im.size
    W, H = SIZES[shape]
    ratio = W / H
    if w / h > ratio:
        nw = round(h * ratio); im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
    else:
        nh = round(w / ratio); im = im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))
    im.resize((W, H), Image.LANCZOS).save(path, quality=86)


def fetch_cover(src, key, shape="wide"):
    COVERS.mkdir(parents=True, exist_ok=True)
    dst = COVERS / f"{key}.jpg"
    req = urllib.request.Request(src, headers={"User-Agent": "Mozilla/5.0", "Referer": "https://www.bilibili.com/"})
    dst.write_bytes(urllib.request.urlopen(req, timeout=30).read())
    subprocess.run(["sips", "-s", "format", "jpeg", "-s", "formatOptions", "78", "--resampleWidth", "720",
                    str(dst), "--out", str(dst)], capture_output=True)
    tidy_cover(dst, shape)
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
            "cover": fetch_cover(info["thumbnail"], vid, shape_of(a.s)) if info["thumbnail"] else "",
            "shelf": a.s, "tags": sorted(set(a.t or [])), "added": time.strftime("%Y-%m-%d"),
            "sources": {info["platform"]: src},
        })
        print(f"新增 {vid}「{info['title']}」  平台标签参考：{', '.join(info['tags'][:8])}")
        print(f"下一步：① 起名  shelf.py name {vid} \"<名>\" --sub \"<副标题>\"（番剧必填，规范见 README）"
              f"\n        ② 看封面 site/covers/{vid}.jpg，糊 / 裁坏 / 不合适就 shelf.py cover {vid} <图URL>"
              f"\n        ③ shelf.py deploy，然后在仓库根提交推送")
    save(items)


def cmd_book(a):
    """没有视频、也不链到任何地方的条目（漫画）：只有名字、副标题、封面。"""
    items = load()
    if any(i["id"] == a.id for i in items):
        sys.exit(f"已有 {a.id}")
    items.insert(0, {
        "id": a.id, "title": a.name, "name": a.name, "sub": a.sub, "uploader": "", "duration": 0,
        "cover": fetch_cover(a.cover, a.id, shape_of(a.s)), "shelf": a.s, "tags": sorted(set(a.t or [])),
        "added": time.strftime("%Y-%m-%d"), "sources": {},
    })
    save(items)
    print(f"新增 {a.id}「{a.name}」；看封面 site/covers/{a.id}.jpg，然后 shelf.py deploy 并提交推送")


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


def cmd_cover(a):
    items = load()
    it = next((i for i in items if i["id"] == a.id), None) or sys.exit(f"没有 {a.id}")
    old = SITE / it["cover"] if it.get("cover") else None
    m = re.search(r"-v(\d+)$", old.stem) if old else None
    n = int(m.group(1)) + 1 if m else 2
    new = COVERS / f"{a.id}-v{n}.jpg"
    if a.url:
        req = urllib.request.Request(a.url, headers={"User-Agent": UA, "Referer": "https://www.bilibili.com/"})
        new.write_bytes(urllib.request.urlopen(req, timeout=30).read())
    else:
        new.write_bytes(old.read_bytes())
    tidy_cover(new, shape_of(it.get("shelf")))
    if old and old.exists() and old != new:
        old.unlink()
    it["cover"] = f"covers/{new.name}"
    save(items)
    print(a.id, "→", it["cover"])


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


SHELVES = {"音乐", "番剧", "舞蹈", "听歌", "音乐剧", "漫画"}  # 加新架先改这里和 README


def check():
    """返回 (errors, warnings)。errors 会挡住 deploy。"""
    from PIL import Image, ImageFilter, ImageStat
    items, errs, warns = load(), [], []
    seen_ids, seen_urls = set(), set()
    for it in items:
        i = it["id"]
        if i in seen_ids: errs.append(f"{i}：id 重复")
        seen_ids.add(i)
        for s in it["sources"].values():
            if s["url"] in seen_urls: errs.append(f"{i}：链接和别的条目重复 {s['url']}")
            seen_urls.add(s["url"])
        if it.get("shelf") not in SHELVES: errs.append(f"{i}：未知分类「{it.get('shelf')}」")
        if it.get("shelf") in ("番剧", "漫画") and not (it.get("name") and it.get("sub")):
            errs.append(f"{i}：{it['shelf']}要有中文规范名 + 副标题（shelf.py name）")
        if re.search(r"\sp\d+\b", it.get("name") or it["title"]):
            errs.append(f"{i}：标题残留分 P 号「{it.get('name') or it['title']}」")
        cov = SITE / it.get("cover", "")
        if not it.get("cover") or not cov.is_file():
            errs.append(f"{i}：没有封面文件"); continue
        im = Image.open(cov)
        want = SIZES[shape_of(it.get("shelf"))]
        if im.size != want:
            errs.append(f"{i}：封面 {im.size[0]}×{im.size[1]}，应为 {want[0]}×{want[1]}（shelf.py cover {i} 重裁）")
        elif ImageStat.Stat(im.convert("L").filter(ImageFilter.FIND_EDGES)).mean[0] < 3:
            warns.append(f"{i}：封面细节很少（可能糊，也可能只是扁平画风），肉眼看一下 {it['cover']}")
    used = {Path(it.get("cover", "")).name for it in items}
    for f in COVERS.glob("*.jpg"):
        if f.name not in used: warns.append(f"孤儿封面 {f.name}（可删）")
    return errs, warns


def cmd_check(a):
    errs, warns = check()
    for w in warns: print("⚠️ ", w)
    for e in errs: print("❌", e)
    print(f"{len(load())} 条：{len(errs)} 错 · {len(warns)} 提醒")
    sys.exit(1 if errs else 0)


def cmd_deploy(a):
    errs, warns = check()
    for w in warns: print("⚠️ ", w)
    if errs:
        for e in errs: print("❌", e)
        sys.exit("有错，先修再部署（shelf.py check 看全部）")
    subprocess.run(["rsync", "-az", "--delete", f"{SITE}/", env("DIMPAGE_SHELVES_REMOTE")], check=True)
    print("已部署 → https://shelves.dimpurrc.com")


p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
sub = p.add_subparsers(dest="cmd", required=True)
s = sub.add_parser("add"); s.add_argument("url"); s.add_argument("-s", default="音乐"); s.add_argument("-t", nargs="*"); s.add_argument("--into"); s.add_argument("--new", action="store_true"); s.set_defaults(f=cmd_add)
s = sub.add_parser("book"); s.add_argument("id"); s.add_argument("name"); s.add_argument("--sub", required=True); s.add_argument("--cover", required=True); s.add_argument("-s", default="漫画"); s.add_argument("-t", nargs="*"); s.set_defaults(f=cmd_book)
s = sub.add_parser("tag"); s.add_argument("id"); s.add_argument("tags", nargs="+"); s.add_argument("--rm", action="store_true"); s.set_defaults(f=cmd_tag)
s = sub.add_parser("mv"); s.add_argument("id"); s.add_argument("shelf"); s.set_defaults(f=cmd_mv)
s = sub.add_parser("name"); s.add_argument("id"); s.add_argument("name"); s.add_argument("--sub"); s.set_defaults(f=cmd_name)
s = sub.add_parser("cover"); s.add_argument("id"); s.add_argument("url", nargs="?"); s.add_argument("--square", action="store_true", help="已无用：比例按架自动定"); s.set_defaults(f=cmd_cover)
s = sub.add_parser("rm"); s.add_argument("id"); s.set_defaults(f=cmd_rm)
s = sub.add_parser("ls"); s.set_defaults(f=cmd_ls)
s = sub.add_parser("check"); s.set_defaults(f=cmd_check)
s = sub.add_parser("deploy"); s.set_defaults(f=cmd_deploy)
a = p.parse_args(); a.f(a)
