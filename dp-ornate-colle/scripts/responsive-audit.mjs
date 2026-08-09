// 响应式零横向溢出自查：CDP 驱动 headless Chrome
// 用法：先启动 chrome --headless=new --remote-debugging-port=9222，再 node dp-cdp-test.mjs <page-url>
const pageUrl = process.argv[2];
const widths = [390, 430, 768, 834, 1024, 1280, 1440, 2560, 3440];

const list = await (await fetch('http://127.0.0.1:9222/json')).json();
const page = list.find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);

let seq = 0;
const pending = new Map();
const events = [];
ws.onmessage = (m) => {
  const d = JSON.parse(m.data);
  if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
  else if (d.method) events.push(d.method);
};
function send(method, params = {}) {
  return new Promise((resolve) => {
    const id = ++seq;
    pending.set(id, resolve);
    ws.send(JSON.stringify({ id, method, params }));
  });
}
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const MEASURE = `(() => {
  const cw = document.documentElement.clientWidth;
  const sw = document.documentElement.scrollWidth;
  const bad = [];
  // 右溢出：scrollWidth 断言；左溢出：Chrome 不计入 scrollWidth，必须逐元素扫
  document.querySelectorAll('body *').forEach(e => {
    const r = e.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return;
    if (r.right > cw + 0.5 || r.left < -0.5) {
      // 跳过被 overflow 容器合法裁掉的元素（如横滑 chips 内部）。
      // SVG 子元素的 UA 默认 overflow:hidden 不代表页面级裁剪（它裁的是 svg 视口），
      // 直接跳过 SVG 祖先继续向上找真正的滚动容器
      let p = e.parentElement, clipped = false;
      while (p) {
        if (p.namespaceURI === 'http://www.w3.org/2000/svg') { p = p.parentElement; continue; }
        const o = getComputedStyle(p).overflowX;
        if (o === 'auto' || o === 'scroll' || o === 'hidden' || o === 'clip') {
          const pr = p.getBoundingClientRect();
          if (pr.left >= -0.5 && pr.right <= cw + 0.5) clipped = true;
          break;
        }
        p = p.parentElement;
      }
      if (!clipped) bad.push(e.tagName + '.' + String(e.className).split(' ')[0] +
        ' L' + Math.round(r.left) + ' R' + Math.round(r.right));
    }
  });
  // 伪元素不在 DOM 树里，.intro::before 装饰块单独断言其左边缘
  const intro = document.querySelector('.intro');
  if (intro) {
    const b = getComputedStyle(intro, '::before');
    const blobL = intro.getBoundingClientRect().left + parseFloat(b.left);
    if (blobL < -0.5) bad.push('.intro::before L' + Math.round(blobL));
  }
  return JSON.stringify({ cw, sw, bad: bad.slice(0, 6) });
})()`;

async function evalJs(expr) {
  const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true });
  return r.result && r.result.result ? r.result.result.value : undefined;
}

await send('Page.enable');
await send('Runtime.enable');

const results = [];
for (const w of widths) {
  await send('Emulation.setDeviceMetricsOverride', {
    width: w, height: 900, deviceScaleFactor: 1, mobile: w < 768
  });
  await send('Page.navigate', { url: pageUrl });
  // 等 load 事件
  for (let i = 0; i < 100; i++) {
    if (events.includes('Page.loadEventFired')) break;
    await sleep(50);
  }
  events.length = 0;
  await sleep(400);
  await evalJs('localStorage.clear()');

  // 20 组合：7 个代表性大 tab × 明暗 + places × 3 视图 × 明暗
  // （events/artists 是第三轮改动重点：JS 瀑布流与 14 个标签 chips）
  // 初始主题跟随系统（未知），显式设定后再测
  const combos = [
    ['devices', 'light'], ['devices', 'dark'],
    ['characters', 'light'], ['characters', 'dark'],
    ['movies', 'light'], ['movies', 'dark'],
    ['anime', 'light'], ['anime', 'dark'],
    ['games', 'light'], ['games', 'dark'],
    ['events', 'light'], ['events', 'dark'],
    ['artists', 'light'], ['artists', 'dark'],
    ['places/cards', 'light'], ['places/cards', 'dark'],
    ['places/map', 'light'], ['places/map', 'dark'],
    ['places/time', 'light'], ['places/time', 'dark'],
  ];
  for (const [tab, theme] of combos) {
    const [major, view] = tab.split('/');
    await evalJs(`(() => {
      const want = { tab: '${major}', theme: '${theme}', view: '${view || ''}' };
      // 主题：直接写 localStorage 再触发主脚本逻辑不可行（脚本只初始化一次），
      // 改为点到目标状态
      let guard = 0;
      while (document.documentElement.dataset.theme !== want.theme && guard++ < 3)
        document.getElementById('themeBtn').click();
      // tab：点对应大 tab
      const idx = { devices: 0, characters: 1, movies: 2, anime: 3, games: 4, places: 5,
                    books: 6, physical: 7, events: 8, glam: 9, campus: 10, artists: 11 }[want.tab];
      document.querySelectorAll('#tabsMajor button')[idx].click();
      // places 的视图切换：cards/map/time 对应分段控件三个按钮
      if (want.view) {
        const vidx = { cards: 0, map: 1, time: 2 }[want.view];
        document.querySelectorAll('#tabsView button')[vidx].click();
      }
      return true;
    })()`);
    await sleep(150);
    const m = JSON.parse(await evalJs(MEASURE));
    results.push({ w, tab, theme, ...m });
  }
}

console.log('width\ttab\t\ttheme\tclientW\tscrollW\tpass\t offenders');
for (const r of results) {
  const pass = r.sw <= r.cw && r.bad.length === 0;
  console.log(`${r.w}\t${r.tab}\t${r.theme}\t${r.cw}\t${r.sw}\t${pass ? 'PASS' : 'FAIL'}\t ${r.bad.join(' | ')}`);
}
const fails = results.filter(r => r.sw > r.cw || r.bad.length > 0);
console.log(fails.length === 0 ? '\nALL PASS' : `\n${fails.length} FAILURES`);
ws.close();
process.exit(fails.length === 0 ? 0 : 1);
