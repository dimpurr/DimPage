# dp-shelves — 喜欢的视频收藏架

<https://shelves.dimpurrc.com> · 粉色、Apple Music 式的「空气感」页面，收的是看了会觉得幸福的东西：MV、番剧、舞蹈、几乎没画面的歌、音乐剧，以及漫画。

> 改代码前先读 [BY-DESIGN.md](BY-DESIGN.md)：好几处「看起来像 bug」的地方是刻意的。

## 目录

```
dp-shelves/
├─ shelf.py            唯一的操作入口（加 / 改 / 自检 / 部署）
├─ README.md           本文件：流程与规范
├─ BY-DESIGN.md        刻意设计，别「修」
└─ site/               原样 rsync 到服务器的静态站
   ├─ index.html       单页，读 videos.json 渲染
   ├─ videos.json      数据真源（git 管）
   └─ covers/          封面（720×405；「听歌」架 600×600；「漫画」架 400×600）
```

依赖：`yt-dlp`、`ssh`、`rsync`、macOS `sips`、Python + Pillow。

## 命令速查

| 命令 | 作用 |
|---|---|
| `shelf.py book <id> "<名>" --sub "<副标题>" --cover <图URL> [-s 漫画]` | 加不链到任何地方的条目（漫画）。id 用 `book-<罗马字>` |
| `shelf.py add <链接> -s <架> [-t 标签…]` | 加一条。B 站 / YouTube 都行；同一视频的两个源会自动合并（时长差 ≤4 秒且标题里「」内文字相同），合并不了用 `--into <id>`，不想合并用 `--new` |
| `shelf.py name <id> "<名>" --sub "<副标题>"` | 显示名与副标题（副标题顶替 UP 主那一行） |
| `shelf.py cover <id> [图片URL]` | 换封面；不给 URL 就只把现有的去黑边重裁；比例按架自动定 |
| `shelf.py tag <id> 标签… [--rm]` · `mv <id> <架>` · `rm <id>` · `ls` | 标签 / 换架 / 删 / 列出 |
| `shelf.py check` | 自检：分类合法、番剧有名和副标题、标题没残留分 P 号、封面存在且尺寸对、链接不重复；另提醒疑似糊图、孤儿封面 |
| `shelf.py deploy` | 先跑 check（有错就停），再 rsync `site/` 到服务器 |

## 加一条：检查单

1. **定架**再 `add`（见下表）。不确定放哪就问收藏的主人，别自己新开架。
2. **起名**：按「命名」一节 `name`。番剧必填，`check` 会拦。
3. **看封面**：打开 `site/covers/<id>.jpg` 用眼睛看。糊、被裁坏（竖版海报切掉头）、看不出是哪部，或不合适（见「封面」），就换。
4. `shelf.py deploy`。
5. 在仓库根提交并推送：`git add dp-shelves && git commit -m "dp-shelves: + <名>" && git push`。

## 分架

| 架 | 收什么 | 备注 |
|---|---|---|
| 音乐 | 有画面的 MV / PV / 现场 | `add` 的默认架 |
| 番剧 | 动画、特摄（打 `特摄` 标签） | 必须有中文名 + 副标题 |
| 舞蹈 | 真人宅舞、MMD | 标签 `宅舞` / `MMD` |
| 听歌 | 几乎没有画面、只是听的歌 | **只放收藏主人明说的**，别凭画面自己判断；方块网格，封面用 `--square` |
| 音乐剧 | 舞台音乐剧 | |
| 漫画 | 漫画 | **不链到任何地方**（卡片点不开）；竖版 2:3 书封，优先 Bangumi 条目的 `images.large`；必须有中文名 + 副标题 |

新开一个架：改 `shelf.py` 的 `SHELVES` 和 `index.html` 的 `ORDER`（方形 / 竖版架还要改 `SQUARE_SHELVES` / `PORTRAIT_SHELVES` 和 `index.html` 的 `SQUARE` / `PORTRAIT`），再改上表。只有一条的架很尴尬，宁可先挂标签。

## 命名

- **番剧**：大字 = 中文规范名（以 Bangumi / B 站番剧页的通行译名为准）；副标题 = `原名 · 年份 · N 话`（在播的不写集数；欧美作品原名用英文，例：`Scott Pilgrim Takes Off · 2023 · 8 集`）。
- **漫画**：大字 = 中文规范名（Bangumi `name_cn`）；副标题 = `作者 · 原名 · 连载年份 · 全 N 卷`。
- **歌**：保留原文曲名（大多没有通行中文名）；副标题写 `作者 feat. 歌手`，必要时加 ` · 中文名`。
- 标题里的「全 12 话」「超清中字」「p16」之类的平台噪音不进显示名。

## 封面

- 横版 16:9，清楚，一眼认得出是哪部；人物不能被切头。
- **不选露骨的图**（接吻都算）。
- 视频自带封面不行时，横版图优先找 TMDB backdrops：`https://www.themoviedb.org/tv/<id>/images/backdrops`，取 `image.tmdb.org/t/p/w1280/…`，再 `shelf.py cover <id> <URL>`。专辑方图可用 iTunes Search API 的 `…/1000x1000bb.jpg`。
- 实在没有好图：从视频里截帧（`yt-dlp -f 'bv*'` 下载后 `ffmpeg` 截）。

## 部署

- 静态站，nginx 直出；`index.html` 与 `videos.json` 不缓存，`covers/` 缓存 30 天（所以换封面会换文件名，见 BY-DESIGN）。
- 部署目标与国内查询机**不写在仓库里**：`shelf.py` 先读环境变量，再读 `.env.project`（或 `DIMPAGE_ENV` 指向的文件）里的
  - `DIMPAGE_SHELVES_REMOTE`：rsync 目标（`user@host:/web/root/`）
  - `DIMPAGE_SHELVES_CN_HOST`：B 站锁区视频走这台国内机查 API（`user@host`）
- 元数据：`yt-dlp`；拿不到时（锁区 / 风控）B 站普通视频走国内机调 API，番剧页读 og 标签。B 站 API 在海外直连会 412。

## 提交

这是公开仓：提交信息只写改动本身，**不加任何 AI 署名行**（如 `Claude-Session:`、`Co-Authored-By:`）。
