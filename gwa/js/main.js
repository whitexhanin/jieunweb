$(function(){
	$(".hide").hide();
	$(".nav > .nav_line > li ").hover(
		function(){
			$(this).find(".hide").stop().slideDown(300);
		},
		function(){
			$(this).find(".hide").stop().slideUp(300);
		}
		);

	var $tab=$(".g_main_title h3  a");
	var $release=$(".release");
	$(".g_main_title .notice1").addClass("on");

	$tab.on("click focus",function(e){
		e.preventDefault();
		$(".g_main_title > div").removeClass("on");
		$(this).parents("div").addClass("on");
	});

	/*
	$(".inner .totalm").click(function(e){
			e.preventDefault();
		$(".inner .totalm .sub").addClass("on");
		$(this).removeClass("on");
	});	*/
	$(".inner .totalm > a").click(function(e){
		e.preventDefault();
		$(".totalm .sub").addClass("on");
	});
	$(".inner .totalm .sub > span > h2 > .close").click(function(){
		$(".totalm .sub").removeClass("on");
	});

	//	$(".inner .totalm .sub").addClass("on");
		//},
		//function(e){
		//	e.preventDefault();
		//$(".inner .totalm .sub").removeClass("on");
		//});


});
