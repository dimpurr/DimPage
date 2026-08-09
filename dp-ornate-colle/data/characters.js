// 数据层：与展示完全解耦。改这里即可，不用碰 index.html。
// 用 .js 而非 .json 是因为 fetch() 在 file:// 下被 CORS 拦，而本仓库的主要用法就是从磁盘直接打开。
window.COLLE_CHARACTERS = [
 {
  "id": "zzz-sunna",
  "cat": "zzz",
  "name": {
   "zh": "千夏",
   "en": "Sunna"
  },
  "xp": 99,
  "img": "img/characters/zzz-sunna.webp"
 },
 {
  "id": "genshin-nahida",
  "cat": "genshin",
  "name": {
   "zh": "纳西妲",
   "en": "Nahida"
  },
  "xp": 98,
  "img": "img/characters/genshin-nahida.webp"
 },
 {
  "id": "zzz-nangong-yu",
  "cat": "zzz",
  "name": {
   "zh": "南宫羽",
   "en": "Nangong Yu"
  },
  "xp": 98,
  "img": "img/characters/zzz-nangong-yu.webp"
 },
 {
  "id": "zzz-seed",
  "cat": "zzz",
  "name": {
   "zh": "「席德」",
   "en": "Seed"
  },
  "xp": 96,
  "img": "img/characters/zzz-seed.webp"
 },
 {
  "id": "genshin-nilou",
  "cat": "genshin",
  "name": {
   "zh": "妮露",
   "en": "Nilou"
  },
  "xp": 95,
  "img": "img/characters/genshin-nilou.webp"
 },
 {
  "id": "genshin-sangonomiya-kokomi",
  "cat": "genshin",
  "name": {
   "zh": "珊瑚宫心海",
   "en": "Sangonomiya Kokomi"
  },
  "xp": 95,
  "img": "img/characters/genshin-sangonomiya-kokomi.webp"
 },
 {
  "id": "genshin-columbina",
  "cat": "genshin",
  "name": {
   "zh": "哥伦比娅",
   "en": "Columbina"
  },
  "xp": 95,
  "img": "img/characters/genshin-columbina.webp"
 },
 {
  "id": "zzz-ju-fufu",
  "cat": "zzz",
  "name": {
   "zh": "橘福福",
   "en": "Ju Fufu"
  },
  "xp": 95,
  "img": "img/characters/zzz-ju-fufu.webp"
 },
 {
  "id": "genshin-klee",
  "cat": "genshin",
  "name": {
   "zh": "可莉",
   "en": "Klee"
  },
  "xp": 94,
  "img": "img/characters/genshin-klee.webp"
 },
 {
  "id": "genshin-furina",
  "cat": "genshin",
  "name": {
   "zh": "芙宁娜",
   "en": "Furina"
  },
  "xp": 93,
  "img": "img/characters/genshin-furina.webp"
 },
 {
  "id": "genshin-kachina",
  "cat": "genshin",
  "name": {
   "zh": "卡齐娜",
   "en": "Kachina"
  },
  "xp": 93,
  "img": "img/characters/genshin-kachina.webp"
 },
 {
  "id": "genshin-yoimiya",
  "cat": "genshin",
  "name": {
   "zh": "宵宫",
   "en": "Yoimiya"
  },
  "xp": 93,
  "img": "img/characters/genshin-yoimiya.webp"
 },
 {
  "id": "genshin-varesa",
  "cat": "genshin",
  "name": {
   "zh": "瓦雷莎",
   "en": "Varesa"
  },
  "xp": 91,
  "img": "img/characters/genshin-varesa.webp"
 },
 {
  "id": "genshin-candace",
  "cat": "genshin",
  "name": {
   "zh": "坎蒂丝",
   "en": "Candace"
  },
  "xp": 91,
  "img": "img/characters/genshin-candace.webp"
 },
 {
  "id": "genshin-lynette",
  "cat": "genshin",
  "name": {
   "zh": "琳妮特",
   "en": "Lynette"
  },
  "xp": 91,
  "img": "img/characters/genshin-lynette.webp"
 },
 {
  "id": "genshin-collei",
  "cat": "genshin",
  "name": {
   "zh": "柯莱",
   "en": "Collei"
  },
  "xp": 91,
  "img": "img/characters/genshin-collei.webp"
 },
 {
  "id": "zzz-zhao",
  "cat": "zzz",
  "name": {
   "zh": "照",
   "en": "Zhao"
  },
  "xp": 91,
  "img": "img/characters/zzz-zhao.webp"
 },
 {
  "id": "zzz-ellen-joe",
  "cat": "zzz",
  "name": {
   "zh": "艾莲·乔",
   "en": "Ellen Joe"
  },
  "xp": 91,
  "img": "img/characters/zzz-ellen-joe.webp"
 },
 {
  "id": "genshin-prune",
  "cat": "genshin",
  "name": {
   "zh": "布伦妮",
   "en": "Prune"
  },
  "xp": 90,
  "img": "img/characters/genshin-prune.webp"
 },
 {
  "id": "genshin-linnea",
  "cat": "genshin",
  "name": {
   "zh": "莉奈娅",
   "en": "Linnea"
  },
  "xp": 90,
  "img": "img/characters/genshin-linnea.webp"
 },
 {
  "id": "genshin-ganyu",
  "cat": "genshin",
  "name": {
   "zh": "甘雨",
   "en": "Ganyu"
  },
  "xp": 90,
  "img": "img/characters/genshin-ganyu.webp"
 },
 {
  "id": "genshin-hu-tao",
  "cat": "genshin",
  "name": {
   "zh": "胡桃",
   "en": "Hu Tao"
  },
  "xp": 90,
  "img": "img/characters/genshin-hu-tao.webp"
 },
 {
  "id": "genshin-mualani",
  "cat": "genshin",
  "name": {
   "zh": "玛拉妮",
   "en": "Mualani"
  },
  "xp": 90,
  "img": "img/characters/genshin-mualani.webp"
 },
 {
  "id": "genshin-kamisato-ayaka",
  "cat": "genshin",
  "name": {
   "zh": "神里绫华",
   "en": "Kamisato Ayaka"
  },
  "xp": 90,
  "img": "img/characters/genshin-kamisato-ayaka.webp"
 },
 {
  "id": "genshin-sigewinne",
  "cat": "genshin",
  "name": {
   "zh": "希格雯",
   "en": "Sigewinne"
  },
  "xp": 90,
  "img": "img/characters/genshin-sigewinne.webp"
 },
 {
  "id": "genshin-yaoyao",
  "cat": "genshin",
  "name": {
   "zh": "瑶瑶",
   "en": "Yaoyao"
  },
  "xp": 90,
  "img": "img/characters/genshin-yaoyao.webp"
 },
 {
  "id": "genshin-sayu",
  "cat": "genshin",
  "name": {
   "zh": "早柚",
   "en": "Sayu"
  },
  "xp": 90,
  "img": "img/characters/genshin-sayu.webp"
 },
 {
  "id": "genshin-diona",
  "cat": "genshin",
  "name": {
   "zh": "迪奥娜",
   "en": "Diona"
  },
  "xp": 90,
  "img": "img/characters/genshin-diona.webp"
 },
 {
  "id": "genshin-sucrose",
  "cat": "genshin",
  "name": {
   "zh": "砂糖",
   "en": "Sucrose"
  },
  "xp": 90,
  "img": "img/characters/genshin-sucrose.webp"
 },
 {
  "id": "zzz-hoshimi-miyabi",
  "cat": "zzz",
  "name": {
   "zh": "星见雅",
   "en": "Hoshimi Miyabi"
  },
  "xp": 90,
  "img": "img/characters/zzz-hoshimi-miyabi.webp"
 },
 {
  "id": "zzz-nekomiya-mana",
  "cat": "zzz",
  "name": {
   "zh": "猫宫又奈（猫又）",
   "en": "Nekomiya Mana"
  },
  "xp": 90,
  "img": "img/characters/zzz-nekomiya-mana.webp"
 }
];
