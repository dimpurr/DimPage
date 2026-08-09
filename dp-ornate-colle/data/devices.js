// 数据层：与展示完全解耦。改这里即可，不用碰 index.html。
// 用 .js 而非 .json 是因为 fetch() 在 file:// 下被 CORS 拦，而本仓库的主要用法就是从磁盘直接打开。
window.COLLE_DEVICES = [
 {
  "id": "colorfly-c3",
  "cat": "headphone",
  "year": 2013,
  "name": "Colorfly C3",
  "sub": "portable player",
  "img": "img/devices/colorfly-c3.webp"
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
  "id": "ibasso-dx90",
  "cat": "headphone",
  "year": 2015,
  "name": "iBasso DX90",
  "sub": "portable player",
  "img": "img/devices/ibasso-dx90.webp"
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
  "id": "ath-ad2000x",
  "cat": "headphone",
  "year": 2016,
  "name": "Audio-Technica ATH-AD2000X",
  "sub": "open-back",
  "img": "img/devices/ath-ad2000x.webp"
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
  "id": "shure-se846",
  "cat": "headphone",
  "year": 2018,
  "name": "Shure SE846",
  "sub": "in-ear",
  "img": "img/devices/shure-se846.webp"
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
  "id": "sennheiser-cx300ii",
  "cat": "headphone",
  "year": null,
  "name": "Sennheiser CX 300 II",
  "sub": "in-ear · the first one",
  "img": "img/devices/sennheiser-cx300ii.webp"
 },
 {
  "id": "airpods-pro-2",
  "cat": "headphone",
  "year": null,
  "name": "Apple AirPods Pro 2",
  "sub": "in-ear",
  "img": "img/devices/airpods-pro-2.webp"
 },
 {
  "id": "lenovo-a789",
  "cat": "phone",
  "year": 2013,
  "name": "Lenovo A789",
  "sub": "the first one",
  "img": "img/devices/lenovo-a789.webp"
 },
 {
  "id": "iphone-6s",
  "cat": "phone",
  "year": null,
  "name": "Apple iPhone 6s",
  "sub": "",
  "img": "img/devices/iphone-6s.webp"
 },
 {
  "id": "iphone-12-pro",
  "cat": "phone",
  "year": null,
  "name": "Apple iPhone 12 Pro",
  "sub": "",
  "img": "img/devices/iphone-12-pro.webp"
 },
 {
  "id": "honor-100",
  "cat": "phone",
  "year": null,
  "name": "Honor 100",
  "sub": "",
  "img": "img/devices/honor-100.webp"
 }
];
