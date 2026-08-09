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
  "img": "img/characters/zzz-sunna.webp",
  "faction": {
   "name": "Angels of Delusion",
   "img": "img/factions/angels-of-delusion.webp"
  },
  "tint": "#FF6BAE",
  "tint2": "#58E4D2"
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
  "img": "img/characters/zzz-nangong-yu.webp",
  "faction": {
   "name": "Angels of Delusion",
   "img": "img/factions/angels-of-delusion.webp"
  },
  "tint": "#FF6BAE",
  "tint2": "#58E4D2"
 },
 {
  "id": "zzz-seed",
  "cat": "zzz",
  "name": {
   "zh": "「席德」",
   "en": "Seed"
  },
  "xp": 96,
  "img": "img/characters/zzz-seed.webp",
  "faction": {
   "name": "Obol Squad",
   "img": "img/factions/obol-squad.webp"
  },
  "tint": "#E7D77B",
  "tint2": "#423039"
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
  "img": "img/characters/zzz-ju-fufu.webp",
  "faction": {
   "name": "Yunkui Summit",
   "img": "img/factions/yunkui-summit.webp"
  },
  "tint": "#CF9B54",
  "tint2": "#4E3D2B"
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
  "img": "img/characters/zzz-zhao.webp",
  "faction": {
   "name": "Krampus Compliance Authority",
   "img": "img/factions/krampus-compliance-authority.webp"
  },
  "tint": "#D2E0EC",
  "tint2": "#1E20AF"
 },
 {
  "id": "zzz-ellen-joe",
  "cat": "zzz",
  "name": {
   "zh": "艾莲·乔",
   "en": "Ellen Joe"
  },
  "xp": 91,
  "img": "img/characters/zzz-ellen-joe.webp",
  "faction": {
   "name": "Victoria Housekeeping Co.",
   "img": "img/factions/victoria-housekeeping-co.webp"
  },
  "tint": "#E7DFA5",
  "tint2": "#231E2E"
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
  "img": "img/characters/zzz-hoshimi-miyabi.webp",
  "faction": {
   "name": "Hollow Special Operations Section 6",
   "img": "img/factions/hollow-special-operations-section-6.webp"
  },
  "tint": "#F7D79C",
  "tint2": "#103C4A"
 },
 {
  "id": "zzz-nekomiya-mana",
  "cat": "zzz",
  "name": {
   "zh": "猫宫又奈（猫又）",
   "en": "Nekomiya Mana"
  },
  "xp": 90,
  "img": "img/characters/zzz-nekomiya-mana.webp",
  "faction": {
   "name": "Cunning Hares",
   "img": "img/factions/cunning-hares.webp"
  },
  "tint": "#FF80A2",
  "tint2": "#9430FF"
 },
 {
  "id": "general-宮村",
  "cat": "general",
  "name": {
   "zh": "宫村宫子",
   "en": "宮村みやこ"
  },
  "sub": "悠久之翼 ef - a tale of memories.",
  "xp": null,
  "tier": 3,
  "tierlabel": "第一档 ①",
  "img": "img/characters/char-miyamura-miyako.webp"
 },
 {
  "id": "general-朝倉美羽",
  "cat": "general",
  "name": {
   "zh": "朝仓美羽",
   "en": "朝倉美羽"
  },
  "sub": "文学少女",
  "xp": null,
  "tier": 3,
  "tierlabel": "第一档 ①",
  "img": "img/characters/char-asakura-miu.webp"
 },
 {
  "id": "general-永瀬伊織",
  "cat": "general",
  "name": {
   "zh": "永濑伊织",
   "en": "永瀬伊織"
  },
  "sub": "恋爱随意链接 · ココロコネクト",
  "xp": null,
  "tier": 3,
  "tierlabel": "第一档 ①",
  "img": "img/characters/char-nagase-iori.webp"
 },
 {
  "id": "general-三好夏凜",
  "cat": "general",
  "name": {
   "zh": "三好夏凛",
   "en": "三好夏凜"
  },
  "sub": "结城友奈是勇者",
  "xp": null,
  "tier": 3,
  "tierlabel": "第一档 ①",
  "img": "img/characters/char-miyoshi-karin.webp"
 },
 {
  "id": "general-青山七海",
  "cat": "general",
  "name": {
   "zh": "青山七海",
   "en": "青山七海"
  },
  "sub": "樱花庄的宠物女孩",
  "xp": null,
  "tier": 3,
  "tierlabel": "第一档 ②",
  "img": "img/characters/char-aoyama-nanami.webp"
 },
 {
  "id": "general-大鳥希",
  "cat": "general",
  "name": {
   "zh": "大鸟希",
   "en": "大鳥希"
  },
  "sub": "只身一人的地球侵略 · ひとりぼっちの地球侵略",
  "xp": null,
  "tier": 3,
  "tierlabel": "第一档 ③",
  "img": "img/characters/char-otori-nozomi.webp"
 },
 {
  "id": "general-佐倉瀬津美",
  "cat": "general",
  "name": {
   "zh": "佐仓濑津美",
   "en": "佐倉瀬津美"
  },
  "sub": "水仙 Narcissu",
  "xp": null,
  "tier": 3,
  "tierlabel": "第一档 ④",
  "img": "img/characters/char-sakura-setsumi.webp"
 },
 {
  "id": "general-宮園",
  "cat": "general",
  "name": {
   "zh": "宫园薰",
   "en": "宮園かをり"
  },
  "sub": "四月是你的谎言",
  "xp": null,
  "tier": 3,
  "tierlabel": "第一档 ④",
  "img": "img/characters/char-miyazono-kaori.webp"
 },
 {
  "id": "general-有馬冴子",
  "cat": "general",
  "name": {
   "zh": "有马冴子",
   "en": "有馬冴子"
  },
  "sub": "ROOM NO.1301",
  "xp": null,
  "tier": 3,
  "tierlabel": "第一档 ⑤",
  "img": "img/characters/char-arima-saeko.webp"
 },
 {
  "id": "general-夢前光",
  "cat": "general",
  "name": {
   "zh": "梦前光",
   "en": "夢前光"
  },
  "sub": "我将在明日逝去，而你将死而复生 · 明日、僕は死ぬ。君は生き返る。",
  "xp": null,
  "tier": 3,
  "tierlabel": "第一档 ⑤",
  "img": "img/characters/char-yumesaki-hikaru.webp"
 },
 {
  "id": "general-椎名",
  "cat": "general",
  "name": {
   "zh": "椎名真白",
   "en": "椎名ましろ"
  },
  "sub": "樱花庄的宠物女孩",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ①",
  "img": "img/characters/char-shiina-mashiro.webp"
 },
 {
  "id": "general-涼宮",
  "cat": "general",
  "name": {
   "zh": "凉宫春日",
   "en": "涼宮ハルヒ"
  },
  "sub": "凉宫春日的忧郁",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ①",
  "img": "img/characters/char-suzumiya-haruhi.webp"
 },
 {
  "id": "general-x",
  "cat": "general",
  "name": {
   "zh": "奈亚拉托提普",
   "en": "ニャルラトホテプ"
  },
  "sub": "潜行吧！奈亚子",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ①",
  "img": "img/characters/char-nyarlathotep.webp"
 },
 {
  "id": "general-神楽坂響子",
  "cat": "general",
  "name": {
   "zh": "神乐坂响子",
   "en": "神楽坂響子"
  },
  "sub": "离别的钢琴奏鸣曲 · さよならピアノソナタ",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ①",
  "img": "img/characters/char-kagurazaka-kyoko.webp"
 },
 {
  "id": "general-上井草美咲",
  "cat": "general",
  "name": {
   "zh": "上井草美咲",
   "en": "上井草美咲"
  },
  "sub": "樱花庄的宠物女孩",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ①",
  "img": "img/characters/char-kamiigusa-misaki.webp"
 },
 {
  "id": "general-赤坂龍之介",
  "cat": "general",
  "name": {
   "zh": "赤坂龙之介",
   "en": "赤坂龍之介"
  },
  "sub": "樱花庄的宠物女孩",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ①",
  "img": "img/characters/char-akasaka-ryunosuke.webp"
 },
 {
  "id": "general-結城友奈",
  "cat": "general",
  "name": {
   "zh": "结城友奈",
   "en": "結城友奈"
  },
  "sub": "结城友奈是勇者",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ①",
  "img": "img/characters/char-yuki-yuna.webp"
 },
 {
  "id": "general-纏流子",
  "cat": "general",
  "name": {
   "zh": "缠流子",
   "en": "纏流子"
  },
  "sub": "斩服少女 · KILL la KILL",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ①",
  "img": "img/characters/char-matoi-ryuko.webp"
 },
 {
  "id": "general-x",
  "cat": "general",
  "name": {
   "zh": "赫萝",
   "en": "ホロ"
  },
  "sub": "狼与香辛料",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ①",
  "img": "img/characters/char-holo.webp"
 },
 {
  "id": "general-長門有希",
  "cat": "general",
  "name": {
   "zh": "长门有希",
   "en": "長門有希"
  },
  "sub": "凉宫春日的忧郁",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ①",
  "img": "img/characters/char-nagato-yuki.webp"
 },
 {
  "id": "general-佐倉杏子",
  "cat": "general",
  "name": {
   "zh": "佐仓杏子",
   "en": "佐倉杏子"
  },
  "sub": "魔法少女小圆",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ②",
  "img": "img/characters/char-sakura-kyoko.webp"
 },
 {
  "id": "general-三-輪銀",
  "cat": "general",
  "name": {
   "zh": "三之轮银",
   "en": "三ノ輪銀"
  },
  "sub": "结城友奈是勇者 -鹫尾须美之章-",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ②",
  "img": "img/characters/char-minowa-gin.webp"
 },
 {
  "id": "general-東郷美森-鷲尾須美",
  "cat": "general",
  "name": {
   "zh": "东乡美森 / 鹫尾须美",
   "en": "東郷美森 / 鷲尾須美"
  },
  "sub": "结城友奈是勇者",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ②",
  "img": "img/characters/char-togo-mimori.webp"
 },
 {
  "id": "general-一-瀬",
  "cat": "general",
  "name": {
   "zh": "一之濑琴美",
   "en": "一ノ瀬ことみ"
  },
  "sub": "CLANNAD",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ②",
  "img": "img/characters/char-ichinose-kotomi.webp"
 },
 {
  "id": "general-犬吠埼樹",
  "cat": "general",
  "name": {
   "zh": "犬吠埼树",
   "en": "犬吠埼樹"
  },
  "sub": "结城友奈是勇者",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ②",
  "img": "img/characters/char-inubozaki-itsuki.webp"
 },
 {
  "id": "general-伊吹風子",
  "cat": "general",
  "name": {
   "zh": "伊吹风子",
   "en": "伊吹風子"
  },
  "sub": "CLANNAD",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ②",
  "img": "img/characters/char-ibuki-fuko.webp"
 },
 {
  "id": "general-新藤千尋",
  "cat": "general",
  "name": {
   "zh": "新藤千寻",
   "en": "新藤千尋"
  },
  "sub": "悠久之翼 ef - a tale of memories.",
  "xp": null,
  "tier": 2,
  "tierlabel": "第二档 ②",
  "img": "img/characters/char-shindo-chihiro.webp"
 },
 {
  "id": "general-可児那由多",
  "cat": "general",
  "name": {
   "zh": "可儿那由多",
   "en": "可児那由多"
  },
  "sub": "如果有妹妹就好了。 · 妹さえいればいい。",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ①",
  "img": "img/characters/char-kani-nayuta.webp"
 },
 {
  "id": "general-山田",
  "cat": "general",
  "name": {
   "zh": "山田妖精 / 山田伊尔芙",
   "en": "山田エルフ"
  },
  "sub": "埃罗芒阿老师 · エロマンガ先生 · 又译情色漫画老师",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ①",
  "img": "img/characters/char-yamada-elf.webp"
 },
 {
  "id": "general-澤村-英梨",
  "cat": "general",
  "name": {
   "zh": "泽村·史宾瑟·英梨梨",
   "en": "澤村・スペンサー・英梨々"
  },
  "sub": "路人女主的养成方法",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ①",
  "img": "img/characters/char-sawamura-eriri.webp"
 },
 {
  "id": "general-御船流子",
  "cat": "general",
  "name": {
   "zh": "御船流子",
   "en": "御船流子"
  },
  "sub": "电波女与青春男",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ②",
  "img": "img/characters/char-mifune-ryuko.webp"
 },
 {
  "id": "general-佐-木千穂",
  "cat": "general",
  "name": {
   "zh": "佐佐木千穗",
   "en": "佐々木千穂"
  },
  "sub": "打工吧！魔王大人",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ②",
  "img": "img/characters/char-sasaki-chiho.webp"
 },
 {
  "id": "general-x",
  "cat": "general",
  "name": {
   "zh": "妮姆芙",
   "en": "ニンフ"
  },
  "sub": "天降之物",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ③",
  "img": "img/characters/char-nymph.webp"
 },
 {
  "id": "general-natsuki",
  "cat": "general",
  "name": {
   "zh": "Natsuki 夏树",
   "en": "Natsuki"
  },
  "sub": "心跳文学部！ · Doki Doki Literature Club!",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ③",
  "img": "img/characters/char-ddlc-natsuki.webp"
 },
 {
  "id": "general-宇佐美",
  "cat": "general",
  "name": {
   "zh": "宇佐美瑞希",
   "en": "宇佐美みずき"
  },
  "sub": "这个美术社大有问题！",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ③",
  "img": "img/characters/char-usami-mizuki.webp"
 },
 {
  "id": "general-小豆梓",
  "cat": "general",
  "name": {
   "zh": "小豆梓",
   "en": "小豆梓"
  },
  "sub": "变态王子与不笑猫 · 変態王子と笑わない猫。",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ③",
  "img": "img/characters/char-azuki-azusa.webp"
 },
 {
  "id": "general-筒隠月子",
  "cat": "general",
  "name": {
   "zh": "筒隐月子",
   "en": "筒隠月子"
  },
  "sub": "变态王子与不笑猫",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ③",
  "img": "img/characters/char-tsutsukakushi-tsukiko.webp"
 },
 {
  "id": "general-三日月夜空",
  "cat": "general",
  "name": {
   "zh": "三日月夜空",
   "en": "三日月夜空"
  },
  "sub": "我的朋友很少",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ④",
  "img": "img/characters/char-mikazuki-yozora.webp"
 },
 {
  "id": "general-宮沢真希",
  "cat": "general",
  "name": {
   "zh": "宫泽真希",
   "en": "宮沢真希"
  },
  "sub": "第九日 -The 9th Day-",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ④"
 },
 {
  "id": "general-由比-浜結衣",
  "cat": "general",
  "name": {
   "zh": "由比滨结衣",
   "en": "由比ヶ浜結衣"
  },
  "sub": "我的青春恋爱物语果然有问题",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ④",
  "img": "img/characters/char-yuigahama-yui.webp"
 },
 {
  "id": "general-x",
  "cat": "general",
  "name": {
   "zh": "克图格亚",
   "en": "クトゥグア"
  },
  "sub": "潜行吧！奈亚子",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ④",
  "img": "img/characters/char-cthugha.webp"
 },
 {
  "id": "general-逢坂大河",
  "cat": "general",
  "name": {
   "zh": "逢坂大河",
   "en": "逢坂大河"
  },
  "sub": "龙与虎 · とらドラ！",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ④",
  "img": "img/characters/char-aisaka-taiga.webp"
 },
 {
  "id": "general-川嶋亜美",
  "cat": "general",
  "name": {
   "zh": "川岛亚美",
   "en": "川嶋亜美"
  },
  "sub": "龙与虎",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ④",
  "img": "img/characters/char-kawashima-ami.webp"
 },
 {
  "id": "general-九鳳院紫",
  "cat": "general",
  "name": {
   "zh": "九凤院紫",
   "en": "九鳳院紫"
  },
  "sub": "红 Kurenai",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ⑤",
  "img": "img/characters/char-kuhoin-murasaki.webp"
 },
 {
  "id": "general-藤和",
  "cat": "general",
  "name": {
   "zh": "藤和艾莉欧",
   "en": "藤和エリオ"
  },
  "sub": "电波女与青春男",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ⑤",
  "img": "img/characters/char-towa-erio.webp"
 },
 {
  "id": "general-美遊",
  "cat": "general",
  "name": {
   "zh": "美游·艾德费尔特",
   "en": "美遊・エーデルフェルト"
  },
  "sub": "Fate/kaleid liner 魔法少女☆伊莉雅",
  "xp": null,
  "tier": 1,
  "tierlabel": "第三档 ⑤",
  "img": "img/characters/char-miyu-edelfelt.webp"
 },
 {
  "id": "vsinger-初音-hatsune-miku",
  "cat": "vsinger",
  "name": {
   "zh": "初音未来",
   "en": "初音ミク · Hatsune Miku"
  },
  "sub": "Crypton Future Media · クリプトン（札幌）",
  "xp": null,
  "year": 2007,
  "img": "img/characters/vsinger-hatsune-miku.webp"
 },
 {
  "id": "vsinger-重音-kasane-teto",
  "cat": "vsinger",
  "name": {
   "zh": "重音Teto",
   "en": "重音テト · Kasane Teto"
  },
  "sub": "重音テト製作委員会 · 2ch VIP 板同人出身；SynthV 商用版由 AHS 发行",
  "xp": null,
  "year": 2008,
  "img": "img/characters/vsinger-kasane-teto.webp"
 },
 {
  "id": "vsinger-ia-ia-aria-on-the-planetes",
  "cat": "vsinger",
  "name": {
   "zh": "IA",
   "en": "IA · IA -ARIA ON THE PLANETES-"
  },
  "sub": "1st PLACE",
  "xp": null,
  "year": 2012,
  "img": "img/characters/vsinger-ia.webp"
 },
 {
  "id": "vsinger-洛天依-luo-tianyi",
  "cat": "vsinger",
  "name": {
   "zh": "洛天依",
   "en": "洛天依 · Luo Tianyi"
  },
  "sub": "上海禾念 → 厂牌 Vsinger",
  "xp": null,
  "year": 2012,
  "img": "img/characters/vsinger-luo-tianyi.webp"
 },
 {
  "id": "vsinger-星尘-xingchen-stardust",
  "cat": "vsinger",
  "name": {
   "zh": "星尘",
   "en": "星尘 · Xingchen / Stardust"
  },
  "sub": "角色属 平行四界 Quadimension（同人社团） · 声库由 上海禾念 受托开发",
  "xp": null,
  "year": 2016,
  "img": "img/characters/vsinger-stardust.webp"
 }
];
