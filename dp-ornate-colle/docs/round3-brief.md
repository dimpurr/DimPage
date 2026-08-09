# 第三轮需求

**动手前先 `git pull --rebase`。** 我（Claude）这边推了很多东西：

- 新增 `artists` 大 tab —— 它的小 tab 是**标签筛选、非互斥**（一个人可以同时是 PV 师和音乐家），走 `MAJOR[].tagged` + `item.tags` 数组
- `characters` 加了 `general`（一般动漫 46）/ `vsinger`（虚拟歌手 5）两个子 tab，共 82 个
- 新增 `books` / `physical` / `events` / `glam` / `campus` 五个大 tab
- 机构名改成 `{en, zh}` 双语对象，渲染层加了 `L(v)` 收口（有的字段是字符串有的是对象）
- **hash 路由**：`#places/travel?view=map&sort=time`，`applyHash()` / `writeHash()`
- `events` 改成自由比例瀑布流（`.card.free`）
- 各类封面按本征比例分开：`.card.poster.ar-book`（书 1:√2）/ `.ar-album`（画册 4:5）/ `.ar-disc`（CD 1:1）；`.card.photo`（场馆实景照，方形满幅）

---

## A. 整块 tab / 按钮区域重新规划布局

Dim 的原话：

> full list 和 by rating 这俩按钮怎么是垂直排列，根本没有动脑，在宽屏下超级浪费垂直空间。你看看大 tab / 小 tab / 功能按钮这里整块区域，也就是瀑布流开始前、header 之后这整块 tab 和按钮区域，整体规划下 layout 和样式。大 tab 样式我比较满意我觉得可以不动，下面小 tabs 样式可动可不动，右边按钮必须仔细思考清楚布局，宽屏窄屏，样式一致性，等等，反正整体打磨一遍布局和样式。

要点：
- 右侧现在有三类控件各自为政：**视图切换**（places 专属，分段控件）、**排序切换**（glam/anime/movies，单按钮两模式）、**Full list 外链**（movies/anime/games）。统一成一套控件语言，宽屏一行排开、窄屏优雅折叠。
- ⚠️ **大 tab 已经 12 个**，`artists` 的标签行有 **14 个**，窄屏下会很挤，一并考虑。

顺便把大 tab 英文名去掉冗余后缀：

| 现在 | 改成 |
|---|---|
| Things I Owned | Things |
| Characters I Like | Characters |
| Movies I Like | Movies |
| Anime I Like | Anime |
| Games I Like | Games |
| Places I've Been | Places |
| Books I Like | Books |

`Shows & Exhibitions` / `Museums & Galleries` / `Campuses & Institutes` / `Physical Collection` / `Artists` 是名词短语，**保持不动**。**中文名一律不改。**

---

## B. 瀑布流排序逻辑

Dim 的原话：

> 角色瀑布流的排序逻辑有问题，不是从左到右从上到下了。之前这么搞是不想引入依赖，现在允许引入依赖了，让 kimi 改成最佳的那种相对左上角 origin 的、瀑布流 desc 语义比较好、能真实反映分数的排布方法。

现在用的是 CSS `column-count`，**列优先填充** —— 第 1 列放前 N 个、第 2 列放接下来 N 个，所以视觉上第一行是 1、N+1、2N+1…，完全反映不出「按分数降序」。

⭐ **现在允许引入依赖了**（`vendor/` 里已经有 d3 和 topojson 的先例，vendor 进仓库即可，别挂 CDN）。换成能真实反映降序、左上角是最高分的方案 —— JS 瀑布流库，或者 CSS grid + JS 测高自己算，你选，说明理由。

适用范围：`characters` 和 `events` 两个 tab（都是 `masonry: true`）。

---

## C. 卡片灯箱

Dim 的原话：

> 所有卡片如果不是链接的话，点击都打开一个灯箱看大图（按比例垂直上下左右居中？或者拉伸？或者不拉伸保持原来最大尺寸，小了的话压缩？反正自己 debate 设计一下），左右键可以在当前页循环。

- 只对**没有外链**的卡片生效（有 `item.url` 的卡片本身就是 `<a>`，保持点击跳转）
- **← →** 方向键在当前筛选结果里循环；**Esc** 关闭
- 灯箱里图片怎么摆**你自己 debate 设计**（等比居中？超出视口才缩？小图要不要放大？背景遮罩深浅？），把结论和理由写进 `docs/redesign-plan.md`
- 暗色/亮色模式都要照顾到

---

## 交付
照旧：五断点响应式自测（`scripts/responsive-audit.mjs`）→ `git pull --rebase` → commit → push 到 `master`。
做完在终端简短报告：三件事各自怎么做的、瀑布流选了什么方案、灯箱的设计结论。
