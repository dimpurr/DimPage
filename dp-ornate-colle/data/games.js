// 数据层：与展示完全解耦。改这里即可，不用碰 index.html。
// 用 .js 而非 .json 是因为 fetch() 在 file:// 下被 CORS 拦，而本仓库的主要用法就是从磁盘直接打开。
// ⚠️ 当前是测试子集：Steam 取游玩时长 Top 20（共 251 款有记录 / 539 款拥有），
//    Switch 取虚拟游戏卡列表前 20（共 152 张，四账号）。筛选与排序规则待定。
window.COLLE_GAMES = [
 {
  "id": "steam-3dmark",
  "cat": "steam",
  "name": "3DMark",
  "score": 77.8,
  "sub": "78h",
  "url": "https://store.steampowered.com/app/223850",
  "img": "img/games/steam-3dmark.webp"
 },
 {
  "id": "steam-cities-skylines",
  "cat": "steam",
  "name": "Cities: Skylines",
  "score": 73.0,
  "sub": "73h",
  "url": "https://store.steampowered.com/app/255710",
  "img": "img/games/steam-cities-skylines.webp"
 },
 {
  "id": "steam-palworld",
  "cat": "steam",
  "name": "Palworld",
  "score": 62.7,
  "sub": "63h",
  "url": "https://store.steampowered.com/app/1623730",
  "img": "img/games/steam-palworld.webp"
 },
 {
  "id": "steam-frostpunk",
  "cat": "steam",
  "name": "Frostpunk",
  "score": 56.1,
  "sub": "56h",
  "url": "https://store.steampowered.com/app/323190",
  "img": "img/games/steam-frostpunk.webp"
 },
 {
  "id": "steam-symphonic-rain",
  "cat": "steam",
  "name": "Symphonic Rain",
  "score": 50.1,
  "sub": "50h",
  "url": "https://store.steampowered.com/app/629650",
  "img": "img/games/steam-symphonic-rain.webp"
 },
 {
  "id": "steam-quantum-break",
  "cat": "steam",
  "name": "Quantum Break",
  "score": 47.7,
  "sub": "48h",
  "url": "https://store.steampowered.com/app/474960",
  "img": "img/games/steam-quantum-break.webp"
 },
 {
  "id": "steam-dyson-sphere-program",
  "cat": "steam",
  "name": "Dyson Sphere Program",
  "score": 42.8,
  "sub": "43h",
  "url": "https://store.steampowered.com/app/1366540",
  "img": "img/games/steam-dyson-sphere-program.webp"
 },
 {
  "id": "steam-intralism",
  "cat": "steam",
  "name": "Intralism",
  "score": 36.4,
  "sub": "36h",
  "url": "https://store.steampowered.com/app/513510",
  "img": "img/games/steam-intralism.webp"
 },
 {
  "id": "steam-counter-strike-2",
  "cat": "steam",
  "name": "Counter-Strike 2",
  "score": 33.5,
  "sub": "34h",
  "url": "https://store.steampowered.com/app/730",
  "img": "img/games/steam-counter-strike-2.webp"
 },
 {
  "id": "steam-victoria-3",
  "cat": "steam",
  "name": "Victoria 3",
  "score": 32.5,
  "sub": "32h",
  "url": "https://store.steampowered.com/app/529340",
  "img": "img/games/steam-victoria-3.webp"
 },
 {
  "id": "steam-half-life-alyx",
  "cat": "steam",
  "name": "Half-Life: Alyx",
  "score": 23.7,
  "sub": "24h",
  "url": "https://store.steampowered.com/app/546560",
  "img": "img/games/steam-half-life-alyx.webp"
 },
 {
  "id": "steam-rimworld",
  "cat": "steam",
  "name": "RimWorld",
  "score": 22.9,
  "sub": "23h",
  "url": "https://store.steampowered.com/app/294100",
  "img": "img/games/steam-rimworld.webp"
 },
 {
  "id": "steam-doki-doki-literature-club",
  "cat": "steam",
  "name": "Doki Doki Literature Club",
  "score": 21.6,
  "sub": "22h",
  "url": "https://store.steampowered.com/app/698780",
  "img": "img/games/steam-doki-doki-literature-club.webp"
 },
 {
  "id": "steam-beat-saber",
  "cat": "steam",
  "name": "Beat Saber",
  "score": 20.8,
  "sub": "21h",
  "url": "https://store.steampowered.com/app/620980",
  "img": "img/games/steam-beat-saber.webp"
 },
 {
  "id": "steam-tom-clancy-s-the-division",
  "cat": "steam",
  "name": "Tom Clancy's The Division",
  "score": 20.4,
  "sub": "20h",
  "url": "https://store.steampowered.com/app/365590",
  "img": "img/games/steam-tom-clancy-s-the-division.webp"
 },
 {
  "id": "steam-stellaris",
  "cat": "steam",
  "name": "Stellaris",
  "score": 20.0,
  "sub": "20h",
  "url": "https://store.steampowered.com/app/281990",
  "img": "img/games/steam-stellaris.webp"
 },
 {
  "id": "steam-it-takes-two",
  "cat": "steam",
  "name": "It Takes Two",
  "score": 19.9,
  "sub": "20h",
  "url": "https://store.steampowered.com/app/1426210",
  "img": "img/games/steam-it-takes-two.webp"
 },
 {
  "id": "steam-the-beginner-s-guide",
  "cat": "steam",
  "name": "The Beginner's Guide",
  "score": 19.7,
  "sub": "20h",
  "url": "https://store.steampowered.com/app/303210",
  "img": "img/games/steam-the-beginner-s-guide.webp"
 },
 {
  "id": "steam-euro-truck-simulator-2",
  "cat": "steam",
  "name": "Euro Truck Simulator 2",
  "score": 19.7,
  "sub": "20h",
  "url": "https://store.steampowered.com/app/227300",
  "img": "img/games/steam-euro-truck-simulator-2.webp"
 },
 {
  "id": "steam-muse-dash",
  "cat": "steam",
  "name": "Muse Dash",
  "score": 19.3,
  "sub": "19h",
  "url": "https://store.steampowered.com/app/774171",
  "img": "img/games/steam-muse-dash.webp"
 },
 {
  "id": "switch-disco-elysium",
  "cat": "switch",
  "name": "Disco Elysium",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-disco-elysium.webp"
 },
 {
  "id": "switch-genesis-noir",
  "cat": "switch",
  "name": "Genesis Noir",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-genesis-noir.webp"
 },
 {
  "id": "switch-1000xresist",
  "cat": "switch",
  "name": "1000xRESIST",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-1000xresist.webp"
 },
 {
  "id": "switch-集合啦-動物森友會",
  "cat": "switch",
  "name": "集合啦！動物森友會",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-集合啦-動物森友會.webp"
 },
 {
  "id": "switch-undertale",
  "cat": "switch",
  "name": "Undertale",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-undertale.webp"
 },
 {
  "id": "switch-devil-may-cry-2",
  "cat": "switch",
  "name": "Devil May Cry 2",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-devil-may-cry-2.webp"
 },
 {
  "id": "switch-devil-may-cry",
  "cat": "switch",
  "name": "Devil May Cry",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-devil-may-cry.webp"
 },
 {
  "id": "switch-jump-rope-challenge",
  "cat": "switch",
  "name": "Jump Rope Challenge",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-jump-rope-challenge.webp"
 },
 {
  "id": "switch-furi",
  "cat": "switch",
  "name": "Furi",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-furi.webp"
 },
 {
  "id": "switch-omori",
  "cat": "switch",
  "name": "OMORI",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-omori.webp"
 },
 {
  "id": "switch-世界遊戲大全51",
  "cat": "switch",
  "name": "世界遊戲大全51",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-世界遊戲大全51.webp"
 },
 {
  "id": "switch-滅魂-誤佳期",
  "cat": "switch",
  "name": "滅魂·誤佳期",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-滅魂-誤佳期.webp"
 },
 {
  "id": "switch-blossom-tales",
  "cat": "switch",
  "name": "Blossom Tales",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-blossom-tales.webp"
 },
 {
  "id": "switch-muse-dash",
  "cat": "switch",
  "name": "Muse Dash",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-muse-dash.webp"
 },
 {
  "id": "switch-mega-man-11",
  "cat": "switch",
  "name": "Mega Man 11",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-mega-man-11.webp"
 },
 {
  "id": "switch-lovers-in-a-dangerous-spacetime",
  "cat": "switch",
  "name": "Lovers in a Dangerous Spacetime",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-lovers-in-a-dangerous-spacetime.webp"
 },
 {
  "id": "switch-sayonara-wild-hearts",
  "cat": "switch",
  "name": "Sayonara Wild Hearts",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-sayonara-wild-hearts.webp"
 },
 {
  "id": "switch-florence",
  "cat": "switch",
  "name": "Florence",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-florence.webp"
 },
 {
  "id": "switch-what-remains-of-edith-finch",
  "cat": "switch",
  "name": "What Remains of Edith Finch",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-what-remains-of-edith-finch.webp"
 },
 {
  "id": "switch-gorogoa",
  "cat": "switch",
  "name": "Gorogoa",
  "score": null,
  "sub": null,
  "url": null,
  "img": "img/games/switch-gorogoa.webp"
 }
];
