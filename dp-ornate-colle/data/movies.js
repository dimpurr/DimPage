// 数据层：与展示完全解耦。改这里即可，不用碰 index.html。
// 用 .js 而非 .json 是因为 fetch() 在 file:// 下被 CORS 拦，而本仓库的主要用法就是从磁盘直接打开。
window.COLLE_MOVIES = [
 {
  "id": "movie-2001太空漫游",
  "cat": "movie",
  "name": "2001太空漫游",
  "year": 1968,
  "score": 95,
  "url": "https://movie.douban.com/subject/1292226/",
  "img": "img/movies/2001太空漫游.webp"
 },
 {
  "id": "movie-重庆森林",
  "cat": "movie",
  "name": "重庆森林",
  "year": 1994,
  "score": 91,
  "url": "https://movie.douban.com/subject/1291999/",
  "img": "img/movies/重庆森林.webp"
 },
 {
  "id": "movie-奇爱博士",
  "cat": "movie",
  "name": "奇爱博士",
  "year": 1964,
  "score": 90,
  "url": "https://movie.douban.com/subject/1322848/",
  "img": "img/movies/奇爱博士.webp"
 },
 {
  "id": "movie-月球时代白日梦",
  "cat": "movie",
  "name": "月球时代白日梦",
  "year": 2022,
  "score": 90,
  "url": "https://movie.douban.com/subject/35869654/",
  "img": "img/movies/月球时代白日梦.webp"
 },
 {
  "id": "movie-布达佩斯大饭店",
  "cat": "movie",
  "name": "布达佩斯大饭店",
  "year": 2014,
  "score": 89,
  "url": "https://movie.douban.com/subject/11525673/",
  "img": "img/movies/布达佩斯大饭店.webp"
 },
 {
  "id": "movie-搏击俱乐部",
  "cat": "movie",
  "name": "搏击俱乐部",
  "year": 1999,
  "score": 88,
  "url": "https://movie.douban.com/subject/1292000/",
  "img": "img/movies/搏击俱乐部.webp"
 },
 {
  "id": "movie-教父",
  "cat": "movie",
  "name": "教父",
  "year": 1972,
  "score": 87,
  "url": "https://movie.douban.com/subject/1291841/",
  "img": "img/movies/教父.webp"
 },
 {
  "id": "movie-疯狂动物城",
  "cat": "movie",
  "name": "疯狂动物城",
  "year": 2016,
  "score": 87,
  "url": "https://movie.douban.com/subject/25662329/",
  "img": "img/movies/疯狂动物城.webp"
 },
 {
  "id": "movie-我不是药神",
  "cat": "movie",
  "name": "我不是药神",
  "year": 2018,
  "score": 87,
  "url": "https://movie.douban.com/subject/26752088/",
  "img": "img/movies/我不是药神.webp"
 },
 {
  "id": "movie-蜘蛛侠-平行宇宙",
  "cat": "movie",
  "name": "蜘蛛侠：平行宇宙",
  "year": 2018,
  "score": 87,
  "url": "https://movie.douban.com/subject/26374197/",
  "img": "img/movies/蜘蛛侠-平行宇宙.webp"
 },
 {
  "id": "movie-肖申克的救赎",
  "cat": "movie",
  "name": "肖申克的救赎",
  "year": 1994,
  "score": 86,
  "url": "https://movie.douban.com/subject/1292052/",
  "img": "img/movies/肖申克的救赎.webp"
 },
 {
  "id": "movie-浦泽直树的漫勉-第一季",
  "cat": "movie",
  "name": "浦泽直树的漫勉 第一季",
  "year": 2015,
  "score": 86,
  "url": "https://movie.douban.com/subject/26627753/",
  "img": "img/movies/浦泽直树的漫勉-第一季.webp"
 },
 {
  "id": "movie-海上钢琴师",
  "cat": "movie",
  "name": "海上钢琴师",
  "year": 1998,
  "score": 86,
  "url": "https://movie.douban.com/subject/1292001/",
  "img": "img/movies/海上钢琴师.webp"
 },
 {
  "id": "movie-守望者",
  "cat": "movie",
  "name": "守望者",
  "year": 2009,
  "score": 86,
  "url": "https://movie.douban.com/subject/1972698/",
  "img": "img/movies/守望者.webp"
 },
 {
  "id": "movie-画廊外的天赋",
  "cat": "movie",
  "name": "画廊外的天赋",
  "year": 2010,
  "score": 86,
  "url": "https://movie.douban.com/subject/4319017/",
  "img": "img/movies/画廊外的天赋.webp"
 },
 {
  "id": "movie-巴比伦",
  "cat": "movie",
  "name": "巴比伦",
  "year": 2022,
  "score": 86,
  "url": "https://movie.douban.com/subject/34467461/",
  "img": "img/movies/巴比伦.webp"
 },
 {
  "id": "movie-霸王别姬",
  "cat": "movie",
  "name": "霸王别姬",
  "year": 1993,
  "score": 85,
  "url": "https://movie.douban.com/subject/1291546/",
  "img": "img/movies/霸王别姬.webp"
 },
 {
  "id": "movie-辛德勒的名单",
  "cat": "movie",
  "name": "辛德勒的名单",
  "year": 1993,
  "score": 85,
  "url": "https://movie.douban.com/subject/1295124/",
  "img": "img/movies/辛德勒的名单.webp"
 },
 {
  "id": "movie-发条橙",
  "cat": "movie",
  "name": "发条橙",
  "year": 1971,
  "score": 85,
  "url": "https://movie.douban.com/subject/1292233/",
  "img": "img/movies/发条橙.webp"
 },
 {
  "id": "movie-火星救援",
  "cat": "movie",
  "name": "火星救援",
  "year": 2015,
  "score": 85,
  "url": "https://movie.douban.com/subject/25864085/",
  "img": "img/movies/火星救援.webp"
 },
 {
  "id": "movie-末代皇帝",
  "cat": "movie",
  "name": "末代皇帝",
  "year": 1987,
  "score": 83,
  "url": "https://movie.douban.com/subject/1293172/",
  "img": "img/movies/末代皇帝.webp"
 },
 {
  "id": "movie-张艺谋的2008",
  "cat": "movie",
  "name": "张艺谋的2008",
  "year": 2009,
  "score": 82,
  "url": "https://movie.douban.com/subject/4073919/",
  "img": "img/movies/张艺谋的2008.webp"
 },
 {
  "id": "movie-黑客帝国",
  "cat": "movie",
  "name": "黑客帝国",
  "year": 1999,
  "score": 82,
  "url": "https://movie.douban.com/subject/1291843/",
  "img": "img/movies/黑客帝国.webp"
 },
 {
  "id": "movie-摩登时代",
  "cat": "movie",
  "name": "摩登时代",
  "year": 1936,
  "score": 81,
  "url": "https://movie.douban.com/subject/1294371/",
  "img": "img/movies/摩登时代.webp"
 },
 {
  "id": "movie-辩护人",
  "cat": "movie",
  "name": "辩护人",
  "year": 2013,
  "score": 81,
  "url": "https://movie.douban.com/subject/21937445/",
  "img": "img/movies/辩护人.webp"
 },
 {
  "id": "movie-龙猫",
  "cat": "movie",
  "name": "龙猫",
  "year": 1988,
  "score": 81,
  "url": "https://movie.douban.com/subject/1291560/",
  "img": "img/movies/龙猫.webp"
 },
 {
  "id": "movie-蝙蝠侠-黑暗骑士",
  "cat": "movie",
  "name": "蝙蝠侠：黑暗骑士",
  "year": 2008,
  "score": 81,
  "url": "https://movie.douban.com/subject/1851857/",
  "img": "img/movies/蝙蝠侠-黑暗骑士.webp"
 },
 {
  "id": "movie-chernobyl",
  "cat": "movie",
  "name": "切尔诺贝利",
  "year": 2019,
  "score": 80,
  "url": "https://movie.douban.com/subject/27098632/",
  "img": "img/movies/chernobyl.webp"
 },
 {
  "id": "movie-触不可及",
  "cat": "movie",
  "name": "触不可及",
  "year": 2011,
  "score": 80,
  "url": "https://movie.douban.com/subject/6786002/",
  "img": "img/movies/触不可及.webp"
 },
 {
  "id": "movie-鬼子来了",
  "cat": "movie",
  "name": "鬼子来了",
  "year": 2000,
  "score": 80,
  "url": "https://movie.douban.com/subject/1291858/",
  "img": "img/movies/鬼子来了.webp"
 },
 {
  "id": "movie-三傻大闹宝莱坞",
  "cat": "movie",
  "name": "三傻大闹宝莱坞",
  "year": 2009,
  "score": 80,
  "url": "https://movie.douban.com/subject/3793023/",
  "img": "img/movies/三傻大闹宝莱坞.webp"
 },
 {
  "id": "movie-白日梦想家",
  "cat": "movie",
  "name": "白日梦想家",
  "year": 2013,
  "score": 80,
  "url": "https://movie.douban.com/subject/2133323/",
  "img": "img/movies/白日梦想家.webp"
 },
 {
  "id": "movie-哪吒之魔童闹海",
  "cat": "movie",
  "name": "哪吒之魔童闹海",
  "year": 2025,
  "score": 80,
  "url": "https://movie.douban.com/subject/34780991/",
  "img": "img/movies/哪吒之魔童闹海.webp"
 },
 {
  "id": "movie-一出好戏",
  "cat": "movie",
  "name": "一出好戏",
  "year": 2018,
  "score": 80,
  "url": "https://movie.douban.com/subject/26985127/",
  "img": "img/movies/一出好戏.webp"
 }
];
