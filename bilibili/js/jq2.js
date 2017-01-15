var pic_lists =$(".v-list li");
for (var i = 0; i < pic_lists.length; i++) {
	pic_lists[i].style.backgroundImage="url(images/高清封面/"+i+".png)";
}

//关灯

$(document).ready(function () {
	var douse1=$(".douse");
	douse1.click(function () {
	if ($("#mask").length>0) {
		var mask=$("#mask")[0];
		document.body.removeChild(mask);
		douse1.html("关灯");
		douse1.css("background-color","#f2a0a1");
	}else{
		var mask=document.createElement("div");
		var sheight =document.body.scrollHeight;
		mask.style.height=sheight+"px";
		mask.id="mask";
		document.body.appendChild(mask);
		douse1.html("开灯");
		douse1.css("background-color","#000");

	}
	})
})
// douse1.click(function () {
// 	if ($("#mask").length>0) {
// 		var mask=$("#mask")[0];
// 		document.body.removeChild(mask);
// 		douse1.innerHTML="关灯";
// 	}else{
// 		var mask=document.createElement("div");
// 		var sheight =document.body.scrollHeight;
// 		mask.style.height=sheight+"px";
// 		mask.id="mask";
// 		document.body.appendChild(mask);
// 		douse1.innerHTML="开灯";
// 		douse1.css("color","red");

// 	}
// });
