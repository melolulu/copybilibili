function $(id) {
	return document.getElementById(id);
}


//二维码
var ewm = $("ewm");
var ewmimg = $("menu-r-app");
ewm.onmouseover = function () {
	ewmimg.style.display="block";
}
ewm.onmouseout = function () {
	ewmimg.style.display="none";
}

//轮播图
var imgindex = 0;//图片索引
var imgWidth = 440;
var Carousel = $("Carousel");
var buttons = $("btns").getElementsByTagName("li");
var repeater = null;
var repeater1 = null;

//清除定时器
function clearclock() {
	if (repeater) {
		clearInterval(repeater);
	}
	if (repeater1) {
		clearInterval(repeater1);
	}
}
function moveto(startPos,end) {
	clearclock();
	var startPos=startPos;
	var end = end;
	var maxstep = 100;
	var step = 0;
	var everystep = (end-startPos)/maxstep;//步长

	repeater = setInterval(move,10);
	function move() {
		step++;
		Carousel.scrollLeft+=everystep;
		if (step == maxstep) {
			clearclock();
			Carousel.scrollLeft=end;
			clock();
		}
	}
}
//自动移动
function autoMove() {
	imgindex++;
	if (imgindex >= buttons.length) {
		imgindex = 0;
	}
	moveto(Carousel.scrollLeft,imgindex*imgWidth);
	btnchange();
}
//每隔三秒调用一次
function clock() {
	repeater1 = setInterval(autoMove,3000);
}
//点击索引移动到对应的图片
for (var i = 0; i < buttons.length; i++) {
	buttons[i].onclick=function () {
		for (var j = 0; j < buttons.length; j++) {
			if (this == buttons[j]) {
				imgindex=j;
				btnchange();
				moveto(Carousel.scrollLeft,j*imgWidth);
			}
		}
	}
}
//轮播图结束



//焦点图
//设置按钮随图片变动
function btnchange() {
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].className=""
	}
	buttons[imgindex].className="lichange";
}
window.onload=clock();


function change(id) {
	//取得所有图片li
	var pics=$("pic").getElementsByTagName("li");
	//取得内容
	var atext=$("intro").getElementsByTagName("div");
	//焦点图切换
	for (var i = 0; i < pics.length; i++) {
		if (i==id) {
			pics[i].style.display="block";
			atext[i].style.display="block";
		}else if(i!=id){
			pics[i].style.display="none";
			atext[i].style.display="none";
		}
	}
}

//焦点图结束

		// function backtotop() {
		// 	var icon=$("backtotop");
		// 	for (var i = 0; i < 750; i+=150) {
		// 		icon.style.backgroundImage = "url('images/rocket_frame.png')";
		// 		icon.style.backgroundPosition="-"+i+"px 0px";
		// 		if (i>=750) {
		// 			i=0;
		// 		}
		// 	}
		// }
//返回顶部
//切换图片位移实现动图
var index = 0;
var timer = null;
function backtotop(){
			clearTimeout(timer);
			timer = null;
			var icon=$("backtotop");
			icon.style.backgroundImage = "url('images/rocket_frame.png')";
			icon.style.backgroundPosition="-"+index+"px 0px";
			index+=150;
			if (index>=750) {
					index=0;
				}
			timer = setTimeout(backtotop,90);
}
function stop() {
	clearTimeout(timer);
	var icon=$("backtotop");
	icon.style.backgroundImage = "url('images/rocket_top.png')";
}
//返回顶部
// window.onscroll=function () {
// 	var icon=$("totop");
// 	icon.style.display="block";
// 	if (document.body.scrollTop==0) {
// 				icon.style.display="none";
// 	}
// }
// function backtop() {
// 	document.body.scrollTop=0;
// }
//返回顶部结束


//显示日期
// 获取星期的方法
Date.prototype.getWeeks = function() {
    var array = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var n = this.getDay();
    return array[n];
};

function addzero(change) {
    var reg = /^\d$/;
    change = reg.test(change) ? "0" + change : change;
    return change;
}

var str = "欢迎访问口袋吧，现在是：";

function Adate() {
    var newdata = new Date();
    var datediv = document.getElementById("date");
    var hours = newdata.getHours();
    var mins = newdata.getMinutes();
    var sec = newdata.getSeconds();
    var flag = "上午";
    if (hours > 12) {
        hours = hours - 12;
        flag = "下午";
    }
    hours = addzero(hours);
    mins = addzero(mins);
    sec = addzero(sec);
    datediv.innerHTML = str + newdata.getFullYear() + "年&nbsp;&nbsp;" + (newdata.getMonth() + 1) + "月" + newdata.getDate() + "日&nbsp;&nbsp;" + flag + hours + "：" + mins + "：" + sec + "&nbsp;&nbsp;" + newdata.getWeeks();
    setTimeout(Adate, 1000);
}
window.onload = Adate();
//显示日期结束




//倒计时
var j=0;
function countdown() {
	var freetime = new Date("2017/1/1,12:00:00");
	var nowtime =new Date();
	var waitime = freetime-nowtime;
	var waitimes = waitime/1000;
	
	var day = parseInt(waitimes/3600/24);
	var hour = parseInt((waitimes/3600)%24);
	var min = parseInt((waitimes/60)%60);
	var seconds = parseInt(waitimes%60);
	var midautumn =$("mid-autumn");
	var span = midautumn.getElementsByTagName('span');
	span[0].innerHTML="离元旦回家还有"+day+"天"+hour+"小时"+min+"分钟"+seconds+"秒";
	j++;
	span[1].innerHTML="哇塞！从你打开网页之后已经过了<em>"+j+"</em>秒了"
	if (waitimes <= 0) {
		span[0].innerHTML="到了";
		clearInterval(auttimer);
	};
}
var auttimer=setInterval(countdown,1000);
//倒计时结束



//加入收藏
var strHome='file:///C:/Users/ibokan/Desktop/h5/我的心愿/焦点图.html'
function addfav() {
	switch(getNav()){
		case 1:
		window.external.addFavorite(strHome,'口袋吧');
		break;
		case 2:
		window.sidebar.addPanel('口袋吧',strHome,'');
		break;
		case 0:
		alert("加入收藏失败");
		break;
	}
}
function getNav() {
	if (navigator.userAgent.indexOf("MSIE")!=-1) {
		return 1;
	}
	if (navigator.userAgent.indexOf("Firefox")!=-1) {
		return 2;
	}
	return 0;
}
function setHome(oThis){
	oThis.style.behavior='url(#default#homepage)';
	oThis.setHomePage(strHome);
	return false;
}


