// 数据层：与展示完全解耦。改这里即可，不用碰 index.html。
// 用 .js 而非 .json 是因为 fetch() 在 file:// 下被 CORS 拦，而本仓库的主要用法就是从磁盘直接打开。
// 来源：DimCreateS colle/dimpage-colles/game-rank.md 里 Rank 有数字的条目，按 Rank 降序。
// N/A 与未打分的不进这里。score 只排序、永不展示。游玩时长字段已移除（时长不等于喜欢）。
window.COLLE_GAMES = [
 {
  "id": "steam-beat-saber",
  "cat": "steam",
  "name": "Beat Saber",
  "year": 2019,
  "score": 88,
  "url": "https://store.steampowered.com/app/620980",
  "img": "img/games/steam-beat-saber.webp"
 },
 {
  "id": "switch-omori",
  "cat": "switch",
  "name": "OMORI",
  "year": 2022,
  "score": 88,
  "url": null,
  "img": "img/games/switch-omori.webp"
 },
 {
  "id": "steam-frostpunk",
  "cat": "steam",
  "name": "Frostpunk",
  "year": 2018,
  "score": 85,
  "url": "https://store.steampowered.com/app/323190",
  "img": "img/games/steam-frostpunk.webp"
 },
 {
  "id": "steam-the-beginner-s-guide",
  "cat": "steam",
  "name": "The Beginner's Guide",
  "year": 2015,
  "score": 85,
  "url": "https://store.steampowered.com/app/303210",
  "img": "img/games/steam-the-beginner-s-guide.webp"
 },
 {
  "id": "steam-victoria-3",
  "cat": "steam",
  "name": "Victoria 3",
  "year": 2022,
  "score": 84,
  "url": "https://store.steampowered.com/app/529340",
  "img": "img/games/steam-victoria-3.webp"
 },
 {
  "id": "switch-1000xresist",
  "cat": "switch",
  "name": "1000xRESIST",
  "year": 2024,
  "score": 84,
  "url": null,
  "img": "img/games/switch-1000xresist.webp"
 },
 {
  "id": "steam-dyson-sphere-program",
  "cat": "steam",
  "name": "Dyson Sphere Program",
  "year": 2021,
  "score": 83,
  "url": "https://store.steampowered.com/app/1366540",
  "img": "img/games/steam-dyson-sphere-program.webp"
 },
 {
  "id": "switch-集合啦-動物森友會",
  "cat": "switch",
  "name": "集合啦！動物森友會",
  "year": 2020,
  "score": 83,
  "url": null,
  "img": "img/games/switch-集合啦-動物森友會.webp"
 },
 {
  "id": "steam-muse-dash",
  "cat": "steam",
  "name": "Muse Dash",
  "year": 2019,
  "score": 82,
  "url": "https://store.steampowered.com/app/774171",
  "img": "img/games/steam-muse-dash.webp"
 },
 {
  "id": "switch-genesis-noir",
  "cat": "switch",
  "name": "Genesis Noir",
  "year": 2021,
  "score": 82,
  "url": null,
  "img": "img/games/switch-genesis-noir.webp"
 },
 {
  "id": "steam-palworld",
  "cat": "steam",
  "name": "Palworld",
  "year": 2026,
  "score": 81,
  "url": "https://store.steampowered.com/app/1623730",
  "img": "img/games/steam-palworld.webp"
 },
 {
  "id": "steam-quantum-break",
  "cat": "steam",
  "name": "Quantum Break",
  "year": 2016,
  "score": 81,
  "url": "https://store.steampowered.com/app/474960",
  "img": "img/games/steam-quantum-break.webp"
 },
 {
  "id": "steam-doki-doki-literature-club",
  "cat": "steam",
  "name": "Doki Doki Literature Club",
  "year": 2017,
  "score": 81,
  "url": "https://store.steampowered.com/app/698780",
  "img": "img/games/steam-doki-doki-literature-club.webp"
 },
 {
  "id": "steam-euro-truck-simulator-2",
  "cat": "steam",
  "name": "Euro Truck Simulator 2",
  "year": 2012,
  "score": 81,
  "url": "https://store.steampowered.com/app/227300",
  "img": "img/games/steam-euro-truck-simulator-2.webp"
 },
 {
  "id": "switch-florence",
  "cat": "switch",
  "name": "Florence",
  "year": 2020,
  "score": 81,
  "url": null,
  "img": "img/games/switch-florence.webp"
 },
 {
  "id": "steam-cities-skylines",
  "cat": "steam",
  "name": "Cities: Skylines",
  "year": 2015,
  "score": 80,
  "url": "https://store.steampowered.com/app/255710",
  "img": "img/games/steam-cities-skylines.webp"
 },
 {
  "id": "steam-intralism",
  "cat": "steam",
  "name": "Intralism",
  "year": 2016,
  "score": 80,
  "url": "https://store.steampowered.com/app/513510",
  "img": "img/games/steam-intralism.webp"
 },
 {
  "id": "steam-rimworld",
  "cat": "steam",
  "name": "RimWorld",
  "year": 2018,
  "score": 80,
  "url": "https://store.steampowered.com/app/294100",
  "img": "img/games/steam-rimworld.webp"
 },
 {
  "id": "steam-tom-clancy-s-the-division",
  "cat": "steam",
  "name": "Tom Clancy's The Division",
  "year": 2016,
  "score": 80,
  "url": "https://store.steampowered.com/app/365590",
  "img": "img/games/steam-tom-clancy-s-the-division.webp"
 },
 {
  "id": "steam-it-takes-two",
  "cat": "steam",
  "name": "It Takes Two",
  "year": 2021,
  "score": 80,
  "url": "https://store.steampowered.com/app/1426210",
  "img": "img/games/steam-it-takes-two.webp"
 }
];
