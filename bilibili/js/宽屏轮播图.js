window.onload=function () {
	var Outpic=document.getElementById("Outpic");
	imgs=Outpic.getElementsByTagName("img");
	var widebtn=document.getElementById("widebtn");
	var widebtn1=document.getElementById("widebtn1");
	btns=widebtn1.getElementsByTagName("div");
	buttons=widebtn.getElementsByTagName("span");
	timer=null;
	dingshi=null;
	WidepicHeight=600;
	autoNum = 0;//当前图片的索引值
	clock();
	for (var i = 0; i < btns.length; i++) {
		btns[i].onclick=function (i) {
			return function () {
				btnColorChange(i);
				moveTo(Outpic.scrollTop,WidepicHeight*i);
			}
		}(i);
	}
	// for (var i = 0; i < btns.length; i++) {
	// 	btns[i].onclick=function () {
	// 		for (var j = 0; j < btns.length; j++) {
	// 			if (this==btns[j]) {
	// 				btnColorChange(j);
	// 				moveTo(Outpic.scrollTop,WidepicHeight*j);
	// 			}
	// 		}
	// 	}
	// }
	buttons[0].onclick=function () {
		clearClock();
		autoNum-=2;
		autoMove();
		clock();
	}
	buttons[1].onclick=function () {
		clearClock();
		autoMove();
		clock();
	}
}

function moveTo(starPos,endPos) {
	clearClock();
	var starPos =starPos;//初始位置
	var endPos =endPos;//结束位置
	var step = 0;//当前移动步数
	var Maxstep =100;//每次滚动需要的总步数
	var everyStep =(endPos-starPos)/Maxstep;//每一步的距离
	function move() {
		step++;
		Outpic.scrollTop+=everyStep;
		// Outpic.scrollTop=Tween.Bounce.easeOut(step,starPos,endPos-starPos,Maxstep);
		if (step==Maxstep) {
			clearClock();
			setTimeout(clock,10);
			Outpic.scrollTop=endPos;
		}
	}
	timer=setInterval(move,1);
}

function autoMove() {
	autoNum++;
	if (autoNum==imgs.length) {
		autoNum=0;
	}
	if (autoNum==-1) {
		autoNum=imgs.length-1;
	}
	btnColorChange(autoNum);
	moveTo(Outpic.scrollTop,WidepicHeight*autoNum);
}
function btnColorChange(index) {
	for (var i = 0; i < btns.length; i++) {
		if (i==index) {
			btns[index].style.borderColor="#f6bfbc";
		}else{
			btns[i].style.borderColor="#fff";
		}
	}
}
//图片自动移动
function clock() {
	dingshi=setInterval(autoMove,4000);
}
//清除所有定时器
function clearClock() {
	if (timer) {
		clearInterval(timer);
	}
	if (dingshi) {
		clearInterval(dingshi);
	}
}
