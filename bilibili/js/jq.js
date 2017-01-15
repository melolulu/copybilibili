
/**/
$(function () {
	$(".btn_gotop").click(function () {
		$('body').animate({ scrollTop: 0 }, 1000);
	});
});

/*导航栏用户信息*/
$(".right>.user img").click(function () {
	$(".user img").toggleClass("Simg");
	$(".user .userInfo").toggleClass("userInfo1");

})

/*锚链接*/
$(".n-i .name").click(function() {
	var index = $(".n-i .name").index(this); 
        $("html, body").animate({
            scrollTop:$(".container-row").eq(index).offset().top + "px"
        }, 500);
        return false;
});
$(window).scroll(function () {
	Scroll();
});
function Scroll() {
	var roll=$(window).scrollTop();
	if(roll<$(".container-row:eq(0)").offset().top){
		$(".n-i").css({background:"#fff"});
	}if(roll>=$(".container-row:eq(0)").offset().top){
		$(".n-i").css({background:"#fff"}).eq(0).css({background:"#07A4D7"});
	}if (roll>=$(".container-row:eq(1)").offset().top) {
		$(".n-i").css({background:"#fff"}).eq(1).css({background:"#07A4D7"});
	}if (roll>=$(".container-row:eq(2)").offset().top) {
		$(".n-i").css({background:"#fff"}).eq(2).css({background:"#07A4D7"});
	}if (roll>=$(".container-row:eq(3)").offset().top) {
		$(".n-i").css({background:"#fff"}).eq(3).css({background:"#07A4D7"});
	}if (roll>=$(".container-row:eq(4)").offset().top) {
		$(".n-i").css({background:"#fff"}).eq(4).css({background:"#07A4D7"});
	}
}
// var info = $(".infomation");
var listpics = $(".tg-list-pic a");
var videotime = $(".tg-list-pic .rightbottomtime");

for (var i = 0; i < listpics.length; i++) {
	// info[i].style.display="none";
	listpics[i].onmouseover=function () {
		for (var j = 0; j < listpics.length; j++) {
			if (this == listpics[j]) {
				// info[j].style.display="block";
				videotime[j].style.display="block";
			}else{
				// info[j].style.display="none";
				videotime[j].style.display="none";
			}
		}
	}

	listpics[i].onmouseout=function  () {
		for (var j = 0; j < listpics.length; j++) {
			// info[j].style.display="none";
			videotime[j].style.display="none";
		}
	}
}

// tab切换

$(".b-tab  li").hover(function () {
	var index = $(".b-tab li").index(this);
	$(".b-tab  li").removeClass("li-tabs")
	.eq(index).addClass("li-tabs");
	$(".b-tab ul li em").eq(index).html("周");
},function () {
	$(".b-tab ul li em").html("");
});
$(".b-tab  li").click(function () {
	var index = $(".b-tab li").index(this);
	$(".b-body").css({display:"none"}).eq(index).css({display:"block"});
});
// var tabs = $(".b-tab>li");
// var weeks = $(".b-tab li em");
// var tvs = $(".b-body");
// for (var i = 0; i < tabs.length; i++) {
// 	tabs[i].onclick=function () {
// 		for (var j = 0; j < tabs.length; j++) {
// 			if (this == tabs[j]) {
// 				tabs[j].className="li-tabs";
// 				tvs[j].style.display="block";
// 				weeks[j].innerHTML="星期";
// 			}else{
// 				tabs[j].className="";
// 				tvs[j].style.display="none";
// 				weeks[j].innerHTML="";
// 			}
// 		}
// 	}
// }
// 用css实现
// var wpics=$(".tv-item img");
// for (var i = 0; i < wpics.length; i++) {
// 	wpics[i].onmouseover = function(){
// 		for (var j = 0; j < wpics.length; j++) {
// 			if (this == wpics[j]) {
// 				if (wpics[j].width == 72) {
// 					wpics[j].style.width=wpics[j].width*1.20+"px";
// 					wpics[j].style.height=wpics[j].height*1.20+"px";
// 				}else{
// 					wpics[j].style.width="72px";
// 					wpics[j].style.height="72px";
// 				}
// 			}else{
// 				wpics[j].style.width="72px";
// 				wpics[j].style.height="72px";
// 			}
// 		}
// 	}
// }

//弹出登陆框内容
var obtn = $(".rightlogin")[0];

function newsquare() {
	//获取页面高度
	var sheight =$("body").height();
	// var swidth =$("body").width();
	var swidth =document.body.scrollWidth;
	//可视区域高度和宽度
	var wheight=document.body.clientHeight;
	var wwidth=document.body.clientWidth;


	var oMask=document.createElement("div");
	oMask.id="mask";
	oMask.style.height=sheight+"px";
	oMask.style.width=swidth+"px";
	document.body.appendChild(oMask);

	var oLogin=document.createElement("div");
	oLogin.id="login";
	oLogin.innerHTML="<div class='loginCon'><div id='close'></div></div>";
	document.body.appendChild(oLogin);

	//获取ologin的高度和宽度
	var dheight=oLogin.offsetHeight;
	var dwidth = oLogin.offsetWidth;

	oLogin.style.left=(swidth - dwidth)/2;
	oLogin.style.top=(sheight - dheight)/2;
	var closeSquare = document.getElementById("close");
	function closefun() {
		document.body.removeChild(oMask);
		document.body.removeChild(oLogin);
	}

	closeSquare.onclick=function () {
		closefun();
	}
	oMask.onclick=function () {
		closefun();
	}
}

obtn.onclick=function () {
	newsquare();
}


//1轮播图
var len = $("#btns > li").length;
    var index = 0;  //图片序号
    var adTimer;
    $("#btns li").click(function() {
        index = $("#btns li").index(this);  //获取鼠标点击 li 的index
        showImg(index);
    }).eq(0).mouseover();
    //滑入停止动画，滑出开始动画.
    $('#Carousel').hover(function() {
        clearInterval(adTimer);
    }, function() {
        adTimer = setInterval(function() {
            showImg(index)
            index++;
            if (index == len) {       //最后一张图片之后，转到第一张
                index = 0;
            }
        }, 3000);
    }).trigger("mouseleave");
    function showImg(index) {
        var adWidth = $("#carousel>a>img:first").width();
        $("#carousel").stop(true,false).animate({
            "marginLeft": -adWidth * index + "px"    //改变 marginTop 属性的值达到轮播的效果
        }, 1000);
        $("#btns li").removeClass("lichange")
        .eq(index).addClass("lichange");
    }

/*推广内容*/
$(".tg-list-pic").hover(function () {
	var index2=$(".tg-list-pic").index(this);
	$(".infomation").eq(index2).animate({"opacity":"1"},1000);
},function () {
	$(".infomation").animate({"opacity":"0"},1000);
})

/*焦点图大*/

	var Blen = $(".btn > li").length;
    var index1 = 0;  //图片序号
    var adTimer1;
    $(".btn li").click(function() {
        index1 = $(".btn li").index(this);  //获取鼠标点击 li 的index
        showBigImg(index1);
    }).eq(0).mouseover();
    //滑入停止动画，滑出开始动画.
    $('#focPic').hover(function() {
        clearInterval(adTimer1);
    }, function() {
        adTimer1 = setInterval(function() {
            showBigImg(index1)
            index1++;
            if (index1 == Blen) {       //最后一张图片之后，转到第一张
                index1 = 0;
            }
        },3000);
    }).trigger("mouseleave");
    function showBigImg(index1) {
        var adHeight = $("#pic>li>img:first").height();
        $("#pic").stop(true,false).animate({
            "marginTop": -adHeight * index1 + "px"    //改变 marginTop 属性的值达到轮播的效果
        },1000);
        $(".btn li").removeClass("changeBg").eq(index1).addClass("changeBg");
    }


    var index2 = 0;  //图片序号
    $(".zhibo div span").hover(function() {
        index2 =$(".zhibo div span").index(this);  //获取鼠标点击 li 的index
        var adHeight = $(".zhibo ul li img:first").height();
        $(".zhibo ul").stop(true,false).animate({
            "marginTop": -adHeight * index2 + "px"    //改变 marginTop 属性的值达到轮播的效果
        },500);
        $(".zhibo>div span").removeClass("elongate").eq(index2).addClass("elongate");
    });










