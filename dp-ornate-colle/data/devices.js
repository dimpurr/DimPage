// 数据层：与展示完全解耦。改这里即可，不用碰 index.html。
// 用 .js 而非 .json 是因为 fetch() 在 file:// 下被 CORS 拦，而本仓库的主要用法就是从磁盘直接打开。
// ⭐ 可信源在 DimLifeS：Life/Gear/dimpage-colle-life/（audio / phones-tablets / laptop-pc / game-consoles / peripherals）。
// 改设备先改那边的表，再同步到这里。
window.COLLE_DEVICES = [
 {
  "id": "macbook-secondhand",
  "cat": "computer",
  "year": 2026,
  "name": "MacBook (second-hand)",
  "sub": "laptop",
  "img": "img/devices/macbook-secondhand.webp"
 },
 {
  "id": "airpods-max",
  "cat": "headphone",
  "year": 2026,
  "name": "Apple AirPods Max",
  "sub": "over-ear",
  "img": "img/devices/airpods-max.webp"
 },
 {
  "id": "momentum-4",
  "cat": "headphone",
  "year": 2026,
  "name": "Sennheiser MOMENTUM 4",
  "sub": "over-ear",
  "img": "img/devices/momentum-4.webp"
 },
 {
  "id": "iphone-12-pro-max",
  "cat": "phone",
  "year": 2026,
  "name": "Apple iPhone 12 Pro Max",
  "sub": "",
  "img": "img/devices/iphone-12-pro-max.webp"
 },
 {
  "id": "keychron-k8-max",
  "cat": "peripheral",
  "year": 2025,
  "name": "Keychron K8 Max",
  "sub": "keyboard · TKL",
  "img": "img/devices/keychron-k8-max.webp"
 },
 {
  "id": "mba-m3",
  "cat": "computer",
  "year": 2024,
  "name": "MacBook Air 13″ M3",
  "sub": "laptop · daily driver",
  "img": "img/devices/mba-m3.webp"
 },
 {
  "id": "airpods-pro-2",
  "cat": "headphone",
  "year": 2024,
  "name": "Apple AirPods Pro 2",
  "sub": "in-ear",
  "img": "img/devices/airpods-pro-2.webp"
 },
 {
  "id": "honor-100",
  "cat": "phone",
  "year": 2024,
  "name": "Honor 100",
  "sub": "",
  "img": "img/devices/honor-100.webp"
 },
 {
  "id": "ipad-air-6-m2",
  "cat": "phone",
  "year": 2024,
  "name": "iPad Air 11″ (M2)",
  "sub": "tablet",
  "img": "img/devices/ipad-air-6-m2.webp"
 },
 {
  "id": "r9000p",
  "cat": "computer",
  "year": 2022,
  "name": "Lenovo Legion R9000P",
  "sub": "laptop",
  "img": "img/devices/r9000p.webp"
 },
 {
  "id": "xbox-one",
  "cat": "console",
  "year": 2022,
  "name": "Xbox One",
  "sub": "JP · with Kinect",
  "img": "img/devices/xbox-one.webp"
 },
 {
  "id": "presonus-eris-e35",
  "cat": "headphone",
  "year": 2022,
  "name": "PreSonus Eris E3.5 BT",
  "sub": "studio monitor",
  "img": "img/devices/presonus-eris-e35.webp"
 },
 {
  "id": "iphone-se2",
  "cat": "phone",
  "year": 2022,
  "name": "Apple iPhone SE (2nd gen)",
  "sub": "",
  "img": "img/devices/iphone-se2.webp"
 },
 {
  "id": "smartisan-t2",
  "cat": "phone",
  "year": 2022,
  "name": "Smartisan T2",
  "sub": "",
  "img": "img/devices/smartisan-t2.webp"
 },
 {
  "id": "mbp-16-m1max",
  "cat": "computer",
  "year": 2021,
  "name": "MacBook Pro 16″ M1 Max",
  "sub": "laptop",
  "img": "img/devices/mbp-16-m1max.webp"
 },
 {
  "id": "mba-m1",
  "cat": "computer",
  "year": 2021,
  "name": "MacBook Air 13″ M1",
  "sub": "laptop",
  "img": "img/devices/mba-m1.webp"
 },
 {
  "id": "rx-6800-xt",
  "cat": "computer",
  "year": 2021,
  "name": "AMD Radeon RX 6800 XT",
  "sub": "graphics card",
  "img": "img/devices/rx-6800-xt.webp"
 },
 {
  "id": "8bitdo-lite-2",
  "cat": "console",
  "year": 2021,
  "name": "8BitDo Lite 2",
  "sub": "controller",
  "img": "img/devices/8bitdo-lite-2.webp"
 },
 {
  "id": "quest-2",
  "cat": "console",
  "year": 2021,
  "name": "Oculus Quest 2",
  "sub": "VR headset",
  "img": "img/devices/quest-2.webp"
 },
 {
  "id": "mx-master",
  "cat": "peripheral",
  "year": 2021,
  "name": "Logitech MX Master",
  "sub": "mouse",
  "img": "img/devices/mx-master.webp"
 },
 {
  "id": "iphone-12-pro",
  "cat": "phone",
  "year": 2021,
  "name": "Apple iPhone 12 Pro",
  "sub": "",
  "img": "img/devices/iphone-12-pro.webp"
 },
 {
  "id": "ipad-mini-6",
  "cat": "phone",
  "year": 2021,
  "name": "iPad mini 6",
  "sub": "tablet",
  "img": "img/devices/ipad-mini-6.webp"
 },
 {
  "id": "mac-mini-m1",
  "cat": "computer",
  "year": 2020,
  "name": "Mac mini",
  "sub": "desktop",
  "img": "img/devices/mac-mini-m1.webp"
 },
 {
  "id": "workstation-x570",
  "cat": "computer",
  "year": 2020,
  "name": "Custom Workstation",
  "sub": "desktop · R9 3900X / X570 ITX / JONSBO A4",
  "img": "img/devices/workstation-x570.webp"
 },
 {
  "id": "durgod-k320w",
  "cat": "peripheral",
  "year": 2020,
  "name": "DURGOD K320W",
  "sub": "keyboard · TKL",
  "img": "img/devices/durgod-k320w.webp"
 },
 {
  "id": "nektar-lx88",
  "cat": "peripheral",
  "year": 2020,
  "name": "Nektar Impact LX88+",
  "sub": "MIDI keyboard · 88 keys",
  "img": "img/devices/nektar-lx88.webp"
 },
 {
  "id": "rtx-2070-super",
  "cat": "computer",
  "year": 2019,
  "name": "NVIDIA RTX 2070 Super",
  "sub": "graphics card",
  "img": "img/devices/rtx-2070-super.webp"
 },
 {
  "id": "nintendo-2ds",
  "cat": "console",
  "year": 2019,
  "name": "Nintendo 2DS",
  "sub": "handheld",
  "img": "img/devices/nintendo-2ds.webp"
 },
 {
  "id": "surface-pro",
  "cat": "computer",
  "year": 2018,
  "name": "Microsoft Surface Pro",
  "sub": "2-in-1",
  "img": "img/devices/surface-pro.webp"
 },
 {
  "id": "itx-h310",
  "cat": "computer",
  "year": 2018,
  "name": "ITX H310 Build",
  "sub": "desktop",
  "img": "img/devices/itx-h310.webp"
 },
 {
  "id": "switch-limited",
  "cat": "console",
  "year": 2018,
  "name": "Nintendo Switch",
  "sub": "Splatoon 2 limited edition",
  "img": "img/devices/switch-limited.webp"
 },
 {
  "id": "nintendo-3ds",
  "cat": "console",
  "year": 2018,
  "name": "Nintendo 3DS",
  "sub": "handheld",
  "img": "img/devices/nintendo-3ds.webp"
 },
 {
  "id": "shure-se846",
  "cat": "headphone",
  "year": 2018,
  "name": "Shure SE846",
  "sub": "in-ear",
  "img": "img/devices/shure-se846.webp"
 },
 {
  "id": "midiplus-x6",
  "cat": "peripheral",
  "year": 2018,
  "name": "MiDiPLUS X6",
  "sub": "MIDI keyboard · 61 keys",
  "img": "img/devices/midiplus-x6.webp"
 },
 {
  "id": "iphone-6s",
  "cat": "phone",
  "year": 2018,
  "name": "Apple iPhone 6s",
  "sub": "",
  "img": "img/devices/iphone-6s.webp"
 },
 {
  "id": "sony-pha-3",
  "cat": "headphone",
  "year": 2017,
  "name": "Sony PHA-3",
  "sub": "portable amp / DAC",
  "img": "img/devices/sony-pha-3.webp"
 },
 {
  "id": "xperia-xz1",
  "cat": "phone",
  "year": 2017,
  "name": "Sony Xperia XZ1",
  "sub": "",
  "img": "img/devices/xperia-xz1.webp"
 },
 {
  "id": "ipad-pro-105",
  "cat": "phone",
  "year": 2017,
  "name": "iPad Pro 10.5″",
  "sub": "tablet",
  "img": "img/devices/ipad-pro-105.webp"
 },
 {
  "id": "ath-ad2000x",
  "cat": "headphone",
  "year": 2016,
  "name": "Audio-Technica ATH-AD2000X",
  "sub": "open-back",
  "img": "img/devices/ath-ad2000x.webp"
 },
 {
  "id": "sony-xba-a3",
  "cat": "headphone",
  "year": 2015,
  "name": "Sony XBA-A3",
  "sub": "in-ear",
  "img": "img/devices/sony-xba-a3.webp"
 },
 {
  "id": "ibasso-dx90",
  "cat": "headphone",
  "year": 2015,
  "name": "iBasso DX90",
  "sub": "portable player",
  "img": "img/devices/ibasso-dx90.webp"
 },
 {
  "id": "wacom-ctl671",
  "cat": "peripheral",
  "year": 2015,
  "name": "Wacom Intuos CTL-671",
  "sub": "drawing tablet",
  "img": "img/devices/wacom-ctl671.webp"
 },
 {
  "id": "ath-im70",
  "cat": "headphone",
  "year": 2014,
  "name": "Audio-Technica ATH-IM70",
  "sub": "in-ear",
  "img": "img/devices/ath-im70.webp"
 },
 {
  "id": "colorfly-c3",
  "cat": "headphone",
  "year": 2013,
  "name": "Colorfly C3",
  "sub": "portable player",
  "img": "img/devices/colorfly-c3.webp"
 },
 {
  "id": "sennheiser-cx300ii",
  "cat": "headphone",
  "year": 2013,
  "name": "Sennheiser CX 300 II",
  "sub": "in-ear · the first one",
  "img": "img/devices/sennheiser-cx300ii.webp"
 },
 {
  "id": "lenovo-a789",
  "cat": "phone",
  "year": 2013,
  "name": "Lenovo A789",
  "sub": "the first one",
  "img": "img/devices/lenovo-a789.webp"
 }
];
