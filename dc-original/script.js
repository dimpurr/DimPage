let sloganList = [
  { text: "All beings suffer: the five aggregates of suffering, the suffering of not being able to get what you want", date: "2020-Now" },
  { text: "Talk less, think less, observe more and do more.", date: "2019-2020" },
  { text: "Hear. Feel. Think.", date: "2019-2020" },
  { text: "All is well. All is quiet.", date: "2018-2019" },
  { text: "凛と伸び咲く.", date: "2016-2019" },
  { text: "凛と伸びた花は今も きっと傍で咲き続けてる.", date: "2016-2019" },
  { text: "Melt the thoughts you don't want to forget into your heart's desire.", date: "2017-2018" },
  { text: "Do interesting things with interesting people.", date: "2013-2018" },
  { text: "The journey of a thousand miles begins with the first step.", date: "2013-2016" },
  { text: "Because you are different.", date: "2013-2014" },
];
let index = Math.floor(Math.random() * sloganList.length);
document.getElementById("slogan").innerText = sloganList[index].text;
document.getElementById("slogandate").innerText = sloganList[index].date;

let luckyList = [
    // { url: "https://www.bilibili.com/read/cv354051" },
    // { url: "https://inchei.github.io/blog/2020/08/01/born-as-a-prinsoner/" },
    { url: "https://morion.stores.jp/" },
    { url: "https://otoiro.co.jp/" },
    { url: "https://www.mod-synth.io/" },
    { url: "https://www.feynmanlectures.caltech.edu/" },
    // { url: "https://www.wavechaser.xyz/misc-posts/2020/3/002" },
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
    { url: "http://www.catb.org/~esr/faqs/smart-questions.html" },
    { url: "http://atols.net/" },
    { url: "http://si-ku.her.jp/" },
    { url: "https://www.youtube.com/channel/UCMqUCodZq-FDHRFHrXTA1KQ" },
    { url: "https://www.marxists.org/" },
    // { url: "http://47.94.42.155:8050/#t=w/kuke/library/musicIndex" },
    // { url: "http://www.lib.tsinghua.edu.cn/chinese/otherlib/" },
    { url: "https://nlab.itmedia.co.jp/nl/articles/1909/14/news010.html" },
    { url: "https://en.wikipedia.org/wiki/Anattalakkha%E1%B9%87a_Sutta" },
    // { url: "" },
]

document.getElementById("luckybtn").onclick = function(e) {
    e.preventDefault();
    let index = Math.floor(Math.random() * luckyList.length);
    window.open(luckyList[index].url,'_blank');
}