$(document).ready(function(){

var qm = "文艺青年。技术宅。交互。平面。出版。编程。网络。绘画。音乐。电影。汽车。";
var qm2 = "Cheny@WEB/UI/ACGMN<br />技术宅 / 主交互 / 兼前端 / 蛋蛋后 / 初二生 / 略文艺 / 蹭得累 / 贫乳控 / LOLI控";
var jj = "洋洋，晨阳工作室。技术宅加文艺二货青年一只，属性绝对不是蹭得累和萌。<br />主攻用户体验和WEB前端，也对小说和汽车有兴趣，平面出版编程绘画等稍有入门，给一只自动铅笔一个草稿本就能靠写小说、画汽车、画数码产品一整天不无聊。";

$("#div-btn-hide").addClass("hide");

$("#text-main").html(qm);

$("#btn-jj").click(function(){
	$("#text-main").html(jj);
});

$("#btn-qm").click(function(){
	$("#text-main").html(qm);
});

$("#btn-sns-more").click(function(){
	$("#div-btn-hide").toggle(500,function(){
		if($("#btn-sns-more-i").hasClass("icon-chevron-up")){
			$("#btn-sns-more-i").addClass("icon-chevron-down");
			$("#btn-sns-more-i").removeClass("icon-chevron-up");
		}else{
			$("#btn-sns-more-i").addClass("icon-chevron-up");
			$("#btn-sns-more-i").removeClass("icon-chevron-down");
		}
	})
});

});