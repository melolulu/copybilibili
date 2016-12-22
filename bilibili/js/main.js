$(function()
{
	"use strict";
	var sidebar=$("#sidebar");
	var mask=$(".mask");
	var sidebar_trigger=$(".sidebar_trigger"),
		BackToTop=$(".back_to_top");



	sidebar_trigger.on('focus', 'a', showsidebar)
	mask.on('click', hidesidebar);
	BackToTop.on('click', function(){
		$('html,body').animate({scrollTop:0},800)
	});
	$(window).on('scroll',function () {
		if ($(window).scrollTop()>$(window).height()/20) {
			BackToTop.fadeIn();
		}
		else{
			BackToTop.fadeOut();
		}
	})
	$(window).trigger('scroll');



	function showsidebar() {
		mask.fadeIn();
		sidebar.css('top', sidebar_trigger.height());
	}
	function hidesidebar() {
		mask.fadeOut();
		sidebar.css('top',-sidebar.height()-sidebar_trigger.height());
	}


})