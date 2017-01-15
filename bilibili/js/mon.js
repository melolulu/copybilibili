var pic=document.getElementById("pic").getElementsByTagName("div");
var ctrl=document.getElementById("ctrl").getElementsByTagName("a");
for(var i=0;i<ctrl.length;i++){
	ctrl[i].onclick=function () {
		for(var i=0;i<ctrl.length;i++){
			if (this==ctrl[i]) {
				ctrl[i].className="select";
				pic[i].className="show";
			}
			else{
				ctrl[i].className="";
				pic[i].className="";
			}
		}
	}
}
