var con1=document.getElementById("con1");
var con2=document.getElementById("con2");
var con3=document.getElementById("con3");
var span1=document.getElementById("span1");
var span2=document.getElementById("span2");
var span3=document.getElementById("span3");

function chacon1() {

	con1.className="show";
	span1.className="select";
	con2.className="";
	con3.className="";
	span2.className="";
	span3.className="";
	span1.style.color="red";
	span2.style.color="";
	span3.style.color="";

}
function chacon2() {
	con2.className="show";
	span2.className="select";
	con1.className="";
	con3.className="";
	span1.className="";
	span3.className="";
	span2.style.color="red";
	span1.style.color="";
	span3.style.color="";

}
function chacon3() {
	con3.className="show";
	span3.className="select";
	con1.className="";
	con2.className="";
	span1.className="";
	span2.className="";
	span3.style.color="red";
	span2.style.color="";
	span1.style.color="";


}
