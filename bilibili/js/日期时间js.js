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
// window.onload = Adate();
//显示日期结束
