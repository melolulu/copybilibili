//倒计时
var j=0;
function countdown() {
	var freetime = new Date("2017/1/28,00:00:00");
	var nowtime =new Date();
	var waitime = freetime-nowtime;
	var waitimes = waitime/1000;
	
	var day = parseInt(waitimes/3600/24);
	var hour = parseInt((waitimes/3600)%24);
	var min = parseInt((waitimes/60)%60);
	var seconds = parseInt(waitimes%60);
	var midautumn =$("#mid-autumn");
	var span = $("#mid-autumn span");
	span[0].innerHTML="离春节还有"+day+"天"+hour+"小时"+min+"分钟"+seconds+"秒";
	j++;
	// span[1].innerHTML="哇塞！从你打开网页之后已经过了<em>"+j+"</em>秒了"
	if (waitimes <= 0) {
		span[0].innerHTML="春节好";
		clearInterval(auttimer);
	};
}
var auttimer=setInterval(countdown,1000);
//倒计时结束