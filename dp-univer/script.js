let sloganList = [
  { text: "众生皆苦，五蕴盛苦，求不得苦", date: "2020-今" },
  { text: "少说，少想，多观察，多做。", date: "2019-2020" },
  { text: "倾听，感受，思考", date: "2019-2020" },
  { text: "诸事皆宜。万籁俱静。", date: "2018-2019" },
  { text: "凛と伸び咲く.", date: "2016-2019" },
  { text: "凛と伸びた花は今も きっと傍で咲き続けてる.", date: "2016-2019" },
  { text: "把不想忘却的思念融进心愿", date: "2017-2018" },
  { text: "希望能和有趣的人做有趣的事。", date: "2013-2018" },
  { text: "千里之行，始于足下。", date: "2013-2016" },
  { text: "Because you are different.", date: "2013-2014" },
];
let index = Math.floor(Math.random() * sloganList.length);
document.getElementById("slogan").innerText = sloganList[index].text;
document.getElementById("slogandate").innerText = sloganList[index].date;

let luckyList = [
    { url: "https://www.bilibili.com/read/cv354051" },
    { url: "https://inchei.github.io/blog/2020/08/01/born-as-a-prinsoner/" },
    { url: "https://morion.stores.jp/" },
    { url: "https://otoiro.co.jp/" },
    { url: "https://www.mod-synth.io/" },
    { url: "https://www.feynmanlectures.caltech.edu/" },
    { url: "https://www.wavechaser.xyz/misc-posts/2020/3/002" },
    { url: "http://asparagaliz.quite.moe/" },
    { url: "https://www.cs.ryerson.ca/~aharley/vis/conv/" },
    { url: "http://playground.tensorflow.org/" },
    { url: "https://fontsinuse.com/" },
    { url: "https://visuelle.co.uk/" },
    { url: "https://demos.littleworkshop.fr/track" },
    { url: "http://mathis-biabiany.fr/experiment" },
    { url: "https://www.audiograph.xyz/" },
    { url: "http://weavesilk.com/" },
    { url: "https://visualgo.net/en" },
    { url: "https://crazyangelo.github.io/Cathedral-and-Bazaar/" },
    { url: "https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way" },
    { url: "http://atols.net/" },
    { url: "http://si-ku.her.jp/" },
    { url: "https://www.youtube.com/channel/UCMqUCodZq-FDHRFHrXTA1KQ" },
    { url: "https://www.marxists.org/chinese/" },
    { url: "http://47.94.42.155:8050/#t=w/kuke/library/musicIndex" },
    { url: "http://www.lib.tsinghua.edu.cn/chinese/otherlib/" },
    { url: "https://www.bilibili.com/read/cv3656737" },
    // { url: "" },
]

document.getElementById("luckybtn").onclick = function(e) {
    e.preventDefault();
    let index = Math.floor(Math.random() * luckyList.length);
    window.open(luckyList[index].url,'_blank');
}