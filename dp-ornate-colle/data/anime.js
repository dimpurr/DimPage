// 数据层：与展示完全解耦。改这里即可，不用碰 index.html。
// 用 .js 而非 .json 是因为 fetch() 在 file:// 下被 CORS 拦，而本仓库的主要用法就是从磁盘直接打开。
window.COLLE_ANIME = [
 {
  "id": "anime-航海王-粉丝来信",
  "cat": "anime",
  "name": {
   "zh": "航海王：粉丝来信",
   "en": "ONE PIECE FAN LETTER"
  },
  "score": 10,
  "score2": 8.6,
  "url": "https://bgm.tv/subject/518519",
  "img": "img/anime/航海王-粉丝来信.webp"
 },
 {
  "id": "anime-flcl",
  "cat": "anime",
  "name": {
   "zh": "FLCL",
   "en": "フリクリ"
  },
  "score": 10,
  "score2": 8.3,
  "url": "https://bgm.tv/subject/822",
  "img": "img/anime/flcl.webp"
 },
 {
  "id": "anime-比宇宙更远的地方",
  "cat": "anime",
  "name": {
   "zh": "比宇宙更远的地方",
   "en": "宇宙よりも遠い場所"
  },
  "score": 10,
  "score2": 8.2,
  "url": "https://bgm.tv/subject/218708",
  "img": "img/anime/比宇宙更远的地方.webp"
 },
 {
  "id": "anime-冰菓",
  "cat": "anime",
  "name": {
   "zh": "冰菓",
   "en": "氷菓"
  },
  "score": 10,
  "score2": 8.2,
  "url": "https://bgm.tv/subject/27364",
  "img": "img/anime/冰菓.webp"
 },
 {
  "id": "anime-悠久之翼",
  "cat": "anime",
  "name": {
   "zh": "悠久之翼",
   "en": "ef - a tale of memories."
  },
  "score": 10,
  "score2": 7.9,
  "url": "https://bgm.tv/subject/799",
  "img": "img/anime/悠久之翼.webp"
 },
 {
  "id": "anime-魔法少女奈叶-the-movie-2nd-a-s",
  "cat": "anime",
  "name": {
   "zh": "魔法少女奈叶 The MOVIE 2nd A’s",
   "en": "魔法少女リリカルなのは The MOVIE 2nd A's"
  },
  "score": 10,
  "score2": 7.8,
  "url": "https://bgm.tv/subject/35679",
  "img": "img/anime/魔法少女奈叶-the-movie-2nd-a-s.webp"
 },
 {
  "id": "anime-天使的心跳",
  "cat": "anime",
  "name": {
   "zh": "天使的心跳！",
   "en": "Angel Beats!"
  },
  "score": 10,
  "score2": 7.6,
  "url": "https://bgm.tv/subject/1851",
  "img": "img/anime/天使的心跳.webp"
 },
 {
  "id": "anime-结城友奈是勇者-鹫尾须美之章-勇者之章",
  "cat": "anime",
  "name": {
   "zh": "结城友奈是勇者 -鹫尾须美之章-/-勇者之章-",
   "en": "結城友奈は勇者である -鷲尾須美の章-/-勇者の章-"
  },
  "score": 10,
  "score2": 7.3,
  "url": "https://bgm.tv/subject/195937",
  "img": "img/anime/结城友奈是勇者-鹫尾须美之章-勇者之章.webp"
 },
 {
  "id": "anime-今天的五年二班",
  "cat": "anime",
  "name": {
   "zh": "今天的五年二班",
   "en": "今日の5の2"
  },
  "score": 10,
  "score2": 7.2,
  "url": "https://bgm.tv/subject/3413",
  "img": "img/anime/今天的五年二班.webp"
 },
 {
  "id": "anime-结城友奈是勇者",
  "cat": "anime",
  "name": {
   "zh": "结城友奈是勇者",
   "en": "結城友奈は勇者である"
  },
  "score": 10,
  "score2": 7.1,
  "url": "https://bgm.tv/subject/109328",
  "img": "img/anime/结城友奈是勇者.webp"
 },
 {
  "id": "anime-红-kurenai",
  "cat": "anime",
  "name": {
   "zh": "红 Kurenai",
   "en": "紅 Kurenai"
  },
  "score": 10,
  "score2": 6.6,
  "url": "https://bgm.tv/subject/494",
  "img": "img/anime/红-kurenai.webp"
 },
 {
  "id": "anime-clannad-after-story",
  "cat": "anime",
  "name": {
   "zh": "CLANNAD 〜AFTER STORY〜",
   "en": "CLANNAD 〜AFTER STORY〜"
  },
  "score": 9,
  "score2": 9.2,
  "url": "https://bgm.tv/subject/876",
  "img": "img/anime/clannad-after-story.webp"
 },
 {
  "id": "anime-星际牛仔",
  "cat": "anime",
  "name": {
   "zh": "星际牛仔",
   "en": "カウボーイビバップ"
  },
  "score": 9,
  "score2": 9.1,
  "url": "https://bgm.tv/subject/253",
  "img": "img/anime/星际牛仔.webp"
 },
 {
  "id": "anime-新世纪福音战士剧场版-air-真心为你",
  "cat": "anime",
  "name": {
   "zh": "新世纪福音战士剧场版 Air/真心为你",
   "en": "新世紀エヴァンゲリオン劇場版 Air/まごころを、君に"
  },
  "score": 9,
  "score2": 8.9,
  "url": "https://bgm.tv/subject/6049",
  "img": "img/anime/新世纪福音战士剧场版-air-真心为你.webp"
 },
 {
  "id": "anime-命运石之门",
  "cat": "anime",
  "name": {
   "zh": "命运石之门",
   "en": "STEINS;GATE"
  },
  "score": 9,
  "score2": 8.8,
  "url": "https://bgm.tv/subject/10380",
  "img": "img/anime/命运石之门.webp"
 },
 {
  "id": "anime-凉宫春日的消失",
  "cat": "anime",
  "name": {
   "zh": "凉宫春日的消失",
   "en": "涼宮ハルヒの消失"
  },
  "score": 9,
  "score2": 8.7,
  "url": "https://bgm.tv/subject/3375",
  "img": "img/anime/凉宫春日的消失.webp"
 },
 {
  "id": "anime-四叠半神话大系",
  "cat": "anime",
  "name": {
   "zh": "四叠半神话大系",
   "en": "四畳半神話大系"
  },
  "score": 9,
  "score2": 8.6,
  "url": "https://bgm.tv/subject/4019",
  "img": "img/anime/四叠半神话大系.webp"
 },
 {
  "id": "anime-莉兹与青鸟",
  "cat": "anime",
  "name": {
   "zh": "莉兹与青鸟",
   "en": "リズと青い鳥"
  },
  "score": 9,
  "score2": 8.6,
  "url": "https://bgm.tv/subject/216371",
  "img": "img/anime/莉兹与青鸟.webp"
 },
 {
  "id": "anime-魔法少女小圆",
  "cat": "anime",
  "name": {
   "zh": "魔法少女小圆",
   "en": "魔法少女まどか☆マギカ"
  },
  "score": 9,
  "score2": 8.6,
  "url": "https://bgm.tv/subject/9717",
  "img": "img/anime/魔法少女小圆.webp"
 },
 {
  "id": "anime-日常",
  "cat": "anime",
  "name": {
   "zh": "日常",
   "en": "日常"
  },
  "score": 9,
  "score2": 8.5,
  "url": "https://bgm.tv/subject/9912",
  "img": "img/anime/日常.webp"
 },
 {
  "id": "anime-蜂蜜与四叶草",
  "cat": "anime",
  "name": {
   "zh": "蜂蜜与四叶草",
   "en": "ハチミツとクローバー"
  },
  "score": 9,
  "score2": 8.4,
  "url": "https://bgm.tv/subject/847",
  "img": "img/anime/蜂蜜与四叶草.webp"
 },
 {
  "id": "anime-clannad",
  "cat": "anime",
  "name": {
   "zh": "CLANNAD",
   "en": "CLANNAD -クラナド-"
  },
  "score": 9,
  "score2": 8.4,
  "url": "https://bgm.tv/subject/51",
  "img": "img/anime/clannad.webp"
 },
 {
  "id": "anime-瑞克和莫蒂-第一季",
  "cat": "anime",
  "name": {
   "zh": "瑞克和莫蒂 第一季",
   "en": "Rick and Morty Season 1"
  },
  "score": 9,
  "score2": 8.4,
  "url": "https://bgm.tv/subject/93377",
  "img": "img/anime/瑞克和莫蒂-第一季.webp"
 },
 {
  "id": "anime-3月的狮子",
  "cat": "anime",
  "name": {
   "zh": "3月的狮子",
   "en": "3月のライオン"
  },
  "score": 9,
  "score2": 8.3,
  "url": "https://bgm.tv/subject/147068",
  "img": "img/anime/3月的狮子.webp"
 },
 {
  "id": "anime-吹响吧-上低音号",
  "cat": "anime",
  "name": {
   "zh": "吹响吧！上低音号",
   "en": "響け！ユーフォニアム"
  },
  "score": 9,
  "score2": 8.3,
  "url": "https://bgm.tv/subject/115908",
  "img": "img/anime/吹响吧-上低音号.webp"
 },
 {
  "id": "anime-少女终末旅行",
  "cat": "anime",
  "name": {
   "zh": "少女终末旅行",
   "en": "少女終末旅行"
  },
  "score": 9,
  "score2": 8.1,
  "url": "https://bgm.tv/subject/218707",
  "img": "img/anime/少女终末旅行.webp"
 },
 {
  "id": "anime-悠久之翼2",
  "cat": "anime",
  "name": {
   "zh": "悠久之翼2",
   "en": "ef - a tale of melodies."
  },
  "score": 9,
  "score2": 8.1,
  "url": "https://bgm.tv/subject/1029",
  "img": "img/anime/悠久之翼2.webp"
 },
 {
  "id": "anime-你的名字",
  "cat": "anime",
  "name": {
   "zh": "你的名字。",
   "en": "君の名は。"
  },
  "score": 9,
  "score2": 8.1,
  "url": "https://bgm.tv/subject/160209",
  "img": "img/anime/你的名字.webp"
 },
 {
  "id": "anime-斩服少女",
  "cat": "anime",
  "name": {
   "zh": "斩服少女",
   "en": "キルラキル"
  },
  "score": 9,
  "score2": 8.1,
  "url": "https://bgm.tv/subject/72941",
  "img": "img/anime/斩服少女.webp"
 },
 {
  "id": "anime-春宵苦短-少女前进吧",
  "cat": "anime",
  "name": {
   "zh": "春宵苦短，少女前进吧！",
   "en": "夜は短し歩けよ乙女"
  },
  "score": 9,
  "score2": 8.1,
  "url": "https://bgm.tv/subject/202240",
  "img": "img/anime/春宵苦短-少女前进吧.webp"
 },
 {
  "id": "anime-超时空辉夜姬",
  "cat": "anime",
  "name": {
   "zh": "超时空辉夜姬！",
   "en": "超かぐや姫！"
  },
  "score": 9,
  "score2": 8.1,
  "url": "https://bgm.tv/subject/604826",
  "img": "img/anime/超时空辉夜姬.webp"
 },
 {
  "id": "anime-四月是你的谎言",
  "cat": "anime",
  "name": {
   "zh": "四月是你的谎言",
   "en": "四月は君の嘘"
  },
  "score": 9,
  "score2": 8.0,
  "url": "https://bgm.tv/subject/100444",
  "img": "img/anime/四月是你的谎言.webp"
 },
 {
  "id": "anime-金牌得主",
  "cat": "anime",
  "name": {
   "zh": "金牌得主",
   "en": "メダリスト"
  },
  "score": 9,
  "score2": 8.0,
  "url": "https://bgm.tv/subject/430699",
  "img": "img/anime/金牌得主.webp"
 },
 {
  "id": "anime-龙与虎",
  "cat": "anime",
  "name": {
   "zh": "龙与虎",
   "en": "とらドラ！"
  },
  "score": 9,
  "score2": 8.0,
  "url": "https://bgm.tv/subject/909",
  "img": "img/anime/龙与虎.webp"
 },
 {
  "id": "anime-秒速5厘米",
  "cat": "anime",
  "name": {
   "zh": "秒速5厘米",
   "en": "秒速5センチメートル"
  },
  "score": 9,
  "score2": 7.9,
  "url": "https://bgm.tv/subject/927",
  "img": "img/anime/秒速5厘米.webp"
 },
 {
  "id": "anime-玲音",
  "cat": "anime",
  "name": {
   "zh": "玲音",
   "en": "Serial Experiments Lain"
  },
  "score": 9,
  "score2": 7.8,
  "url": "https://bgm.tv/subject/2582",
  "img": "img/anime/玲音.webp"
 },
 {
  "id": "anime-东方活动写真馆",
  "cat": "anime",
  "name": {
   "zh": "东方活动写真馆",
   "en": "東方活動写真館"
  },
  "score": 9,
  "score2": 7.7,
  "url": "https://bgm.tv/subject/49315",
  "img": "img/anime/东方活动写真馆.webp"
 },
 {
  "id": "anime-少女乐队的呐喊",
  "cat": "anime",
  "name": {
   "zh": "少女乐队的呐喊",
   "en": "ガールズバンドクライ"
  },
  "score": 9,
  "score2": 7.6,
  "url": "https://bgm.tv/subject/431767",
  "img": "img/anime/少女乐队的呐喊.webp"
 },
 {
  "id": "anime-避难所",
  "cat": "anime",
  "name": {
   "zh": "避难所",
   "en": "SHELTER"
  },
  "score": 9,
  "score2": 7.5,
  "url": "https://bgm.tv/subject/195249",
  "img": "img/anime/避难所.webp"
 },
 {
  "id": "anime-三颗星彩色冒险",
  "cat": "anime",
  "name": {
   "zh": "三颗星彩色冒险",
   "en": "三ツ星カラーズ"
  },
  "score": 9,
  "score2": 7.4,
  "url": "https://bgm.tv/subject/211066",
  "img": "img/anime/三颗星彩色冒险.webp"
 },
 {
  "id": "anime-酷爱电影的庞波小姐",
  "cat": "anime",
  "name": {
   "zh": "酷爱电影的庞波小姐",
   "en": "映画大好きポンポさん"
  },
  "score": 9,
  "score2": 7.4,
  "url": "https://bgm.tv/subject/223563",
  "img": "img/anime/酷爱电影的庞波小姐.webp"
 },
 {
  "id": "anime-恋爱随意链接",
  "cat": "anime",
  "name": {
   "zh": "恋爱随意链接",
   "en": "ココロコネクト"
  },
  "score": 9,
  "score2": 7.4,
  "url": "https://bgm.tv/subject/37154",
  "img": "img/anime/恋爱随意链接.webp"
 },
 {
  "id": "anime-刺客伍六七",
  "cat": "anime",
  "name": {
   "zh": "刺客伍六七",
   "en": "刺客伍六七"
  },
  "score": 9,
  "score2": 7.3,
  "url": "https://bgm.tv/subject/244008",
  "img": "img/anime/刺客伍六七.webp"
 },
 {
  "id": "anime-星之声",
  "cat": "anime",
  "name": {
   "zh": "星之声",
   "en": "ほしのこえ"
  },
  "score": 9,
  "score2": 7.2,
  "url": "https://bgm.tv/subject/1936",
  "img": "img/anime/星之声.webp"
 },
 {
  "id": "anime-烟花",
  "cat": "anime",
  "name": {
   "zh": "烟花",
   "en": "打ち上げ花火、下から見るか？横から見るか？"
  },
  "score": 9,
  "score2": 6.0,
  "url": "https://bgm.tv/subject/200704",
  "img": "img/anime/烟花.webp"
 }
];
