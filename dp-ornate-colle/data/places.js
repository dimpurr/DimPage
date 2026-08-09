// 数据层：与展示完全解耦。
// ⭐ 可信源在 DimLifeS：Life/Gear/dimpage-colle-life/places.md —— 改地点先改那边。
// days / photos 是隐性排序键，来自 Immich 照片库统计，**不展示给读者**。
// cat: live=居住 / travel=旅游与活动。lat/lon 供地图视图用。
window.COLLE_PLACES = [
 {
  "id": "london",
  "cat": "live",
  "name": {
   "en": "London",
   "zh": "伦敦"
  },
  "country": {
   "en": "英国",
   "zh": "英国"
  },
  "flag": "🇬🇧",
  "year": 2022,
  "first": "2022-01",
  "last": "2026-07",
  "lat": 51.5166,
  "lon": -0.0848,
  "segs": "2022-01–2022-03 · 2022-05 · 2022-09–2026-07",
  "days": 696,
  "photos": 54081,
  "img": "img/places/london.webp"
 },
 {
  "id": "beijing",
  "cat": "live",
  "name": {
   "en": "Beijing",
   "zh": "北京"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2014,
  "first": "2014-07",
  "last": "2025-08",
  "lat": 39.9821,
  "lon": 116.3192,
  "segs": "2014-07–2014-10 · 2014-12 · 2017-11 … （共 10 段）… 2025-03 · 2025-06–2025-08",
  "days": 543,
  "photos": 17497,
  "img": "img/places/beijing.webp"
 },
 {
  "id": "huizhou",
  "cat": "live",
  "name": {
   "en": "Huizhou",
   "zh": "惠州"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": null,
  "first": "2001-01",
  "last": "2025-09",
  "lat": 23.0816,
  "lon": 114.4324,
  "segs": "2001-01 · 2013-06 · 2014-08–2014-10 … （共 18 段）… 2024-07–2024-08 · 2025-08–2025-09",
  "days": 212,
  "photos": 5639,
  "img": "img/places/huizhou.webp"
 },
 {
  "id": "chaling",
  "cat": "live",
  "name": {
   "en": "Chaling",
   "zh": "茶陵"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2018,
  "first": "2018-02",
  "last": "2025-07",
  "lat": 26.7926,
  "lon": 113.537,
  "segs": "2018-02 · 2019-07–2019-08 · 2022-07–2022-08 · 2023-08 · 2024-08 · 2025-07",
  "days": 35,
  "photos": 1067,
  "img": "img/places/chaling.webp"
 },
 {
  "id": "orenburg",
  "cat": "travel",
  "name": {
   "en": "Orenburg",
   "zh": "奥伦堡"
  },
  "country": {
   "en": "俄罗斯",
   "zh": "俄罗斯"
  },
  "flag": "🇷🇺",
  "year": 2024,
  "first": "2024-01",
  "last": "2025-05",
  "lat": 51.7953,
  "lon": 55.1374,
  "segs": "2024-01–2024-03 · 2024-10–2024-11 · 2025-04–2025-05",
  "days": 33,
  "photos": 2859,
  "img": "img/places/orenburg.webp"
 },
 {
  "id": "saint-petersburg",
  "cat": "travel",
  "name": {
   "en": "Saint Petersburg",
   "zh": "圣彼得堡"
  },
  "country": {
   "en": "俄罗斯",
   "zh": "俄罗斯"
  },
  "flag": "🇷🇺",
  "year": 2024,
  "first": "2024-01",
  "last": "2024-09",
  "lat": 59.9272,
  "lon": 30.3152,
  "segs": "2024-01–2024-02 · 2024-07–2024-09",
  "days": 21,
  "photos": 17126,
  "img": "img/places/saint-petersburg.webp"
 },
 {
  "id": "shanghai",
  "cat": "travel",
  "name": {
   "en": "Shanghai",
   "zh": "上海"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2016,
  "first": "2016-07",
  "last": "2025-08",
  "lat": 31.2288,
  "lon": 121.4877,
  "segs": "2016-07 · 2017-07 · 2018-08 · 2019-07 · 2024-05 · 2025-08",
  "days": 18,
  "photos": 5989,
  "img": "img/places/shanghai.webp"
 },
 {
  "id": "hangzhou",
  "cat": "travel",
  "name": {
   "en": "Hangzhou",
   "zh": "杭州"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2018,
  "first": "2018-10",
  "last": "2025-08",
  "lat": 30.2416,
  "lon": 120.1427,
  "segs": "2018-10 · 2018-12 · 2019-03–2019-04 … （共 9 段）… 2024-07 · 2025-08",
  "days": 18,
  "photos": 1853,
  "img": "img/places/hangzhou.webp"
 },
 {
  "id": "edinburgh",
  "cat": "travel",
  "name": {
   "en": "Edinburgh",
   "zh": "爱丁堡"
  },
  "country": {
   "en": "英国",
   "zh": "英国"
  },
  "flag": "🇬🇧",
  "year": 2022,
  "first": "2022-03",
  "last": "2024-12",
  "lat": 55.9492,
  "lon": -3.2027,
  "segs": "2022-03 · 2022-12–2023-01 · 2023-04 · 2024-07 · 2024-12",
  "days": 17,
  "photos": 4536,
  "img": "img/places/edinburgh.webp"
 },
 {
  "id": "paris",
  "cat": "travel",
  "name": {
   "en": "Paris",
   "zh": "巴黎"
  },
  "country": {
   "en": "法国",
   "zh": "法国"
  },
  "flag": "🇫🇷",
  "year": 2023,
  "first": "2023-03",
  "last": "2024-05",
  "lat": 48.8602,
  "lon": 2.3513,
  "segs": "2023-03–2023-04 · 2023-07 · 2024-05",
  "days": 11,
  "photos": 5210,
  "img": "img/places/paris.webp"
 },
 {
  "id": "changsha",
  "cat": "travel",
  "name": {
   "en": "Changsha",
   "zh": "长沙"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2023,
  "first": "2023-08",
  "last": "2025-12",
  "lat": 28.2003,
  "lon": 112.9736,
  "segs": "2023-08 · 2025-07–2025-08 · 2025-12",
  "days": 10,
  "photos": 2642,
  "img": "img/places/changsha.webp"
 },
 {
  "id": "guangzhou",
  "cat": "travel",
  "name": {
   "en": "Guangzhou",
   "zh": "广州"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2017,
  "first": "2017-07",
  "last": "2023-07",
  "lat": 23.1471,
  "lon": 113.3179,
  "segs": "2017-07 · 2019-02 · 2022-07–2022-08 · 2022-10 · 2023-07",
  "days": 10,
  "photos": 1135,
  "img": "img/places/guangzhou.webp"
 },
 {
  "id": "shenzhen",
  "cat": "travel",
  "name": {
   "en": "Shenzhen",
   "zh": "深圳"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2014,
  "first": "2014-07",
  "last": "2024-08",
  "lat": 22.5512,
  "lon": 114.1102,
  "segs": "2014-07 · 2014-10 · 2014-12 … （共 8 段）… 2023-08 · 2024-08",
  "days": 10,
  "photos": 943,
  "img": "img/places/shenzhen.webp"
 },
 {
  "id": "zhuzhou",
  "cat": "travel",
  "name": {
   "en": "Zhuzhou",
   "zh": "株洲"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2019,
  "first": "2019-07",
  "last": "2025-07",
  "lat": 27.8222,
  "lon": 113.106,
  "segs": "2019-07 · 2023-08 · 2024-07–2024-08 · 2025-07",
  "days": 10,
  "photos": 269,
  "img": "img/places/zhuzhou.webp"
 },
 {
  "id": "new-york",
  "cat": "travel",
  "name": {
   "en": "New York",
   "zh": "纽约"
  },
  "country": {
   "en": "美国",
   "zh": "美国"
  },
  "flag": "🇺🇸",
  "year": 2023,
  "first": "2023-04",
  "last": "2023-04",
  "lat": 40.7876,
  "lon": -73.9656,
  "segs": "2023-04",
  "days": 8,
  "photos": 3678,
  "img": "img/places/new-york.webp"
 },
 {
  "id": "nantes",
  "cat": "travel",
  "name": {
   "en": "Nantes",
   "zh": "南特"
  },
  "country": {
   "en": "法国",
   "zh": "法国"
  },
  "flag": "🇫🇷",
  "year": 2025,
  "first": "2025-06",
  "last": "2025-08",
  "lat": 47.2158,
  "lon": -1.5522,
  "segs": "2025-06 · 2025-08",
  "days": 8,
  "photos": 2966,
  "img": "img/places/nantes.webp"
 },
 {
  "id": "oxford",
  "cat": "travel",
  "name": {
   "en": "Oxford",
   "zh": "牛津"
  },
  "country": {
   "en": "英国",
   "zh": "英国"
  },
  "flag": "🇬🇧",
  "year": 2022,
  "first": "2022-11",
  "last": "2024-08",
  "lat": 51.7546,
  "lon": -1.27,
  "segs": "2022-11 · 2024-08",
  "days": 8,
  "photos": 2191,
  "img": "img/places/oxford.webp"
 },
 {
  "id": "san-diego",
  "cat": "travel",
  "name": {
   "en": "San Diego",
   "zh": "圣迭戈"
  },
  "country": {
   "en": "美国",
   "zh": "美国"
  },
  "flag": "🇺🇸",
  "year": 2025,
  "first": "2025-12",
  "last": "2025-12",
  "lat": 32.7206,
  "lon": -117.1767,
  "segs": "2025-12",
  "days": 8,
  "photos": 1623,
  "img": "img/places/san-diego.webp"
 },
 {
  "id": "rome",
  "cat": "travel",
  "name": {
   "en": "Rome",
   "zh": "罗马"
  },
  "country": {
   "en": "意大利",
   "zh": "意大利"
  },
  "flag": "🇮🇹",
  "year": 2026,
  "first": "2026-05",
  "last": "2026-05",
  "lat": 41.8969,
  "lon": 12.4986,
  "segs": "2026-05",
  "days": 7,
  "photos": 2461,
  "img": "img/places/rome.webp"
 },
 {
  "id": "chongqing",
  "cat": "travel",
  "name": {
   "en": "Chongqing",
   "zh": "重庆"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2018,
  "first": "2018-06",
  "last": "2023-08",
  "lat": 29.5694,
  "lon": 106.5382,
  "segs": "2018-06 · 2023-08",
  "days": 7,
  "photos": 1046,
  "img": "img/places/chongqing.webp"
 },
 {
  "id": "atlanta",
  "cat": "travel",
  "name": {
   "en": "Atlanta",
   "zh": "亚特兰大"
  },
  "country": {
   "en": "美国",
   "zh": "美国"
  },
  "flag": "🇺🇸",
  "year": 2023,
  "first": "2023-04",
  "last": "2023-07",
  "lat": 33.7758,
  "lon": -84.3947,
  "segs": "2023-04 · 2023-07",
  "days": 6,
  "photos": 1817,
  "img": "img/places/atlanta.webp"
 },
 {
  "id": "jinan",
  "cat": "travel",
  "name": {
   "en": "Jinan",
   "zh": "济南"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2020,
  "first": "2020-09",
  "last": "2023-06",
  "lat": 36.6556,
  "lon": 117.0345,
  "segs": "2020-09 · 2023-06",
  "days": 6,
  "photos": 60,
  "img": "img/places/jinan.webp"
 },
 {
  "id": "glasgow",
  "cat": "travel",
  "name": {
   "en": "Glasgow",
   "zh": "格拉斯哥"
  },
  "country": {
   "en": "英国",
   "zh": "英国"
  },
  "flag": "🇬🇧",
  "year": 2023,
  "first": "2023-04",
  "last": "2023-11",
  "lat": 55.8632,
  "lon": -4.2507,
  "segs": "2023-04 · 2023-11",
  "days": 5,
  "photos": 2246,
  "img": "img/places/glasgow.webp"
 },
 {
  "id": "casablanca",
  "cat": "travel",
  "name": {
   "en": "Casablanca",
   "zh": "卡萨布兰卡"
  },
  "country": {
   "en": "摩洛哥",
   "zh": "摩洛哥"
  },
  "flag": "🇲🇦",
  "year": 2022,
  "first": "2022-05",
  "last": "2022-10",
  "lat": 33.5917,
  "lon": -7.6388,
  "segs": "2022-05 · 2022-10",
  "days": 4,
  "photos": 549,
  "img": "img/places/casablanca.webp"
 },
 {
  "id": "hong-kong",
  "cat": "travel",
  "name": {
   "en": "Hong Kong",
   "zh": "香港"
  },
  "country": {
   "en": "香港",
   "zh": "香港"
  },
  "flag": "🇭🇰",
  "year": 2022,
  "first": "2022-03",
  "last": "2024-08",
  "lat": 22.3144,
  "lon": 113.9333,
  "segs": "2022-03 · 2022-09 · 2024-08",
  "days": 4,
  "photos": 398,
  "img": "img/places/hong-kong.webp"
 },
 {
  "id": "shanghai-laogang",
  "cat": "travel",
  "name": {
   "en": "Shanghai (Laogang)",
   "zh": "上海·老港"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2018,
  "first": "2018-08",
  "last": "2024-08",
  "lat": 31.1028,
  "lon": 121.831,
  "segs": "2018-08 · 2024-07–2024-08",
  "days": 4,
  "photos": 101,
  "img": "img/places/shanghai-laogang.webp"
 },
 {
  "id": "vatican-city",
  "cat": "travel",
  "name": {
   "en": "Vatican City",
   "zh": "梵蒂冈"
  },
  "country": {
   "en": "梵蒂冈",
   "zh": "梵蒂冈"
  },
  "flag": "🇻🇦",
  "year": 2026,
  "first": "2026-05",
  "last": "2026-05",
  "lat": 41.8964,
  "lon": 12.4776,
  "segs": "2026-05",
  "days": 3,
  "photos": 1587,
  "img": "img/places/vatican-city.webp"
 },
 {
  "id": "cambridge",
  "cat": "travel",
  "name": {
   "en": "Cambridge",
   "zh": "剑桥"
  },
  "country": {
   "en": "英国",
   "zh": "英国"
  },
  "flag": "🇬🇧",
  "year": 2024,
  "first": "2024-08",
  "last": "2024-10",
  "lat": 52.2078,
  "lon": 0.1179,
  "segs": "2024-08 · 2024-10",
  "days": 3,
  "photos": 1506,
  "img": "img/places/cambridge.webp"
 },
 {
  "id": "marrakesh",
  "cat": "travel",
  "name": {
   "en": "Marrakesh",
   "zh": "马拉喀什"
  },
  "country": {
   "en": "摩洛哥",
   "zh": "摩洛哥"
  },
  "flag": "🇲🇦",
  "year": 2022,
  "first": "2022-03",
  "last": "2022-10",
  "lat": 31.6266,
  "lon": -7.9902,
  "segs": "2022-03 · 2022-10",
  "days": 3,
  "photos": 750,
  "img": "img/places/marrakesh.webp"
 },
 {
  "id": "rissani",
  "cat": "travel",
  "name": {
   "en": "Rissani",
   "zh": "里萨尼"
  },
  "country": {
   "en": "摩洛哥",
   "zh": "摩洛哥"
  },
  "flag": "🇲🇦",
  "year": 2022,
  "first": "2022-03",
  "last": "2022-10",
  "lat": 31.0863,
  "lon": -4.0117,
  "segs": "2022-03 · 2022-10",
  "days": 3,
  "photos": 732,
  "img": "img/places/rissani.webp"
 },
 {
  "id": "tinghir",
  "cat": "travel",
  "name": {
   "en": "Tinghir",
   "zh": "廷吉尔"
  },
  "country": {
   "en": "摩洛哥",
   "zh": "摩洛哥"
  },
  "flag": "🇲🇦",
  "year": 2022,
  "first": "2022-03",
  "last": "2022-12",
  "lat": 31.5845,
  "lon": -5.5915,
  "segs": "2022-03 · 2022-10–2022-12",
  "days": 3,
  "photos": 509,
  "img": "img/places/tinghir.webp"
 },
 {
  "id": "amerzgane",
  "cat": "travel",
  "name": {
   "en": "Amerzgane",
   "zh": "阿梅兹加内"
  },
  "country": {
   "en": "摩洛哥",
   "zh": "摩洛哥"
  },
  "flag": "🇲🇦",
  "year": 2022,
  "first": "2022-03",
  "last": "2022-10",
  "lat": 31.0992,
  "lon": -7.2835,
  "segs": "2022-03 · 2022-10",
  "days": 3,
  "photos": 458,
  "img": "img/places/amerzgane.webp"
 },
 {
  "id": "istanbul",
  "cat": "travel",
  "name": {
   "en": "Istanbul",
   "zh": "伊斯坦布尔"
  },
  "country": {
   "en": "土耳其",
   "zh": "土耳其"
  },
  "flag": "🇹🇷",
  "year": 2022,
  "first": "2022-03",
  "last": "2024-07",
  "lat": 41.2627,
  "lon": 28.7443,
  "segs": "2022-03 · 2022-09 · 2024-07",
  "days": 3,
  "photos": 455,
  "img": "img/places/istanbul.webp"
 },
 {
  "id": "tabount",
  "cat": "travel",
  "name": {
   "en": "Tabount",
   "zh": "塔布恩特"
  },
  "country": {
   "en": "摩洛哥",
   "zh": "摩洛哥"
  },
  "flag": "🇲🇦",
  "year": 2022,
  "first": "2022-03",
  "last": "2022-10",
  "lat": 30.9412,
  "lon": -6.9663,
  "segs": "2022-03 · 2022-10",
  "days": 3,
  "photos": 426,
  "img": "img/places/tabount.webp"
 },
 {
  "id": "york",
  "cat": "travel",
  "name": {
   "en": "York",
   "zh": "约克"
  },
  "country": {
   "en": "英国",
   "zh": "英国"
  },
  "flag": "🇬🇧",
  "year": 2024,
  "first": "2024-11",
  "last": "2024-11",
  "lat": 53.9612,
  "lon": -1.0809,
  "segs": "2024-11",
  "days": 2,
  "photos": 750,
  "img": "img/places/york.webp"
 },
 {
  "id": "milan",
  "cat": "travel",
  "name": {
   "en": "Milan",
   "zh": "米兰"
  },
  "country": {
   "en": "意大利",
   "zh": "意大利"
  },
  "flag": "🇮🇹",
  "year": 2026,
  "first": "2026-05",
  "last": "2026-05",
  "lat": 45.4651,
  "lon": 9.189,
  "segs": "2026-05",
  "days": 2,
  "photos": 655,
  "img": "img/places/milan.webp"
 },
 {
  "id": "fes",
  "cat": "travel",
  "name": {
   "en": "Fes",
   "zh": "非斯"
  },
  "country": {
   "en": "摩洛哥",
   "zh": "摩洛哥"
  },
  "flag": "🇲🇦",
  "year": 2022,
  "first": "2022-10",
  "last": "2022-10",
  "lat": 34.0576,
  "lon": -4.9729,
  "segs": "2022-10",
  "days": 2,
  "photos": 322,
  "img": "img/places/fes.webp"
 },
 {
  "id": "tianjin",
  "cat": "travel",
  "name": {
   "en": "Tianjin",
   "zh": "天津"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2025,
  "first": "2025-07",
  "last": "2025-07",
  "lat": 39.1535,
  "lon": 117.1808,
  "segs": "2025-07",
  "days": 2,
  "photos": 255,
  "img": "img/places/tianjin.webp"
 },
 {
  "id": "chefchaouen",
  "cat": "travel",
  "name": {
   "en": "Chefchaouen",
   "zh": "舍夫沙万"
  },
  "country": {
   "en": "摩洛哥",
   "zh": "摩洛哥"
  },
  "flag": "🇲🇦",
  "year": 2022,
  "first": "2022-10",
  "last": "2022-10",
  "lat": 35.1687,
  "lon": -5.258,
  "segs": "2022-10",
  "days": 2,
  "photos": 173,
  "img": "img/places/chefchaouen.webp"
 },
 {
  "id": "dabu",
  "cat": "live",
  "name": {
   "en": "Dabu",
   "zh": "大埔"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2020,
  "first": "2020-01",
  "last": "2022-07",
  "lat": 24.3502,
  "lon": 116.6761,
  "segs": "2020-01 · 2022-07",
  "days": 2,
  "photos": 86,
  "img": "img/places/dabu.webp"
 },
 {
  "id": "ifrane",
  "cat": "travel",
  "name": {
   "en": "Ifrane",
   "zh": "伊夫兰"
  },
  "country": {
   "en": "摩洛哥",
   "zh": "摩洛哥"
  },
  "flag": "🇲🇦",
  "year": 2022,
  "first": "2022-03",
  "last": "2022-10",
  "lat": 33.5285,
  "lon": -5.1071,
  "segs": "2022-03 · 2022-10",
  "days": 2,
  "photos": 57,
  "img": "img/places/ifrane.webp"
 },
 {
  "id": "yueyang",
  "cat": "travel",
  "name": {
   "en": "Yueyang",
   "zh": "岳阳"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2023,
  "first": "2023-08",
  "last": "2023-08",
  "lat": 29.3826,
  "lon": 113.0884,
  "segs": "2023-08",
  "days": 1,
  "photos": 1025,
  "img": "img/places/yueyang.webp"
 },
 {
  "id": "pinghai",
  "cat": "travel",
  "name": {
   "en": "Pinghai",
   "zh": "平海"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2025,
  "first": "2025-08",
  "last": "2025-08",
  "lat": 22.5892,
  "lon": 114.8862,
  "segs": "2025-08",
  "days": 1,
  "photos": 979,
  "img": "img/places/pinghai.webp"
 },
 {
  "id": "zhujiajiao",
  "cat": "travel",
  "name": {
   "en": "Zhujiajiao",
   "zh": "朱家角"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2025,
  "first": "2025-08",
  "last": "2025-08",
  "lat": 31.1097,
  "lon": 121.0495,
  "segs": "2025-08",
  "days": 1,
  "photos": 921,
  "img": "img/places/zhujiajiao.webp"
 },
 {
  "id": "seven-sisters",
  "cat": "travel",
  "name": {
   "en": "Seven Sisters",
   "zh": "七姊妹白崖一带"
  },
  "country": {
   "en": "英国",
   "zh": "英国"
  },
  "flag": "🇬🇧",
  "year": 2022,
  "first": "2022-09",
  "last": "2022-09",
  "lat": 50.7428,
  "lon": 0.204,
  "segs": "2022-09",
  "days": 1,
  "photos": 716,
  "img": "img/places/seven-sisters.webp"
 },
 {
  "id": "oban",
  "cat": "travel",
  "name": {
   "en": "Oban",
   "zh": "奥本"
  },
  "country": {
   "en": "英国",
   "zh": "英国"
  },
  "flag": "🇬🇧",
  "year": 2023,
  "first": "2023-04",
  "last": "2023-04",
  "lat": 56.4168,
  "lon": -5.477,
  "segs": "2023-04",
  "days": 1,
  "photos": 694,
  "img": "img/places/oban.webp"
 },
 {
  "id": "bath",
  "cat": "travel",
  "name": {
   "en": "Bath",
   "zh": "巴斯"
  },
  "country": {
   "en": "英国",
   "zh": "英国"
  },
  "flag": "🇬🇧",
  "year": 2022,
  "first": "2022-10",
  "last": "2022-10",
  "lat": 51.3833,
  "lon": -2.3653,
  "segs": "2022-10",
  "days": 1,
  "photos": 602,
  "img": "img/places/bath.webp"
 },
 {
  "id": "moulay-idriss",
  "cat": "travel",
  "name": {
   "en": "Moulay Idriss",
   "zh": "穆莱伊德里斯"
  },
  "country": {
   "en": "摩洛哥",
   "zh": "摩洛哥"
  },
  "flag": "🇲🇦",
  "year": 2022,
  "first": "2022-10",
  "last": "2022-10",
  "lat": 34.0728,
  "lon": -5.5541,
  "segs": "2022-10",
  "days": 1,
  "photos": 248,
  "img": "img/places/moulay-idriss.webp"
 },
 {
  "id": "beijing-zhangjiawan",
  "cat": "travel",
  "name": {
   "en": "Beijing (Zhangjiawan)",
   "zh": "北京·张家湾"
  },
  "country": {
   "en": "中国",
   "zh": "中国"
  },
  "flag": "🇨🇳",
  "year": 2025,
  "first": "2025-07",
  "last": "2025-07",
  "lat": 39.8819,
  "lon": 116.7097,
  "segs": "2025-07",
  "days": 1,
  "photos": 237,
  "img": "img/places/beijing-zhangjiawan.webp"
 },
 {
  "id": "rabat",
  "cat": "travel",
  "name": {
   "en": "Rabat",
   "zh": "拉巴特"
  },
  "country": {
   "en": "摩洛哥",
   "zh": "摩洛哥"
  },
  "flag": "🇲🇦",
  "year": 2022,
  "first": "2022-10",
  "last": "2022-10",
  "lat": 34.0232,
  "lon": -6.8224,
  "segs": "2022-10",
  "days": 1,
  "photos": 187,
  "img": "img/places/rabat.webp"
 },
 {
  "id": "istanbul-pendik",
  "cat": "travel",
  "name": {
   "en": "Istanbul (Pendik)",
   "zh": "伊斯坦布尔·彭迪克"
  },
  "country": {
   "en": "土耳其",
   "zh": "土耳其"
  },
  "flag": "🇹🇷",
  "year": 2024,
  "first": "2024-01",
  "last": "2024-01",
  "lat": 40.9046,
  "lon": 29.316,
  "segs": "2024-01",
  "days": 1,
  "photos": 71,
  "img": "img/places/istanbul-pendik.webp"
 }
];
