$(function(){
	$(".nav > ul").hover(
	function(){
	$(this).addClass("over");
	},
	function(){
	$(this).removeClass("over");
	}
	);

	$(".mobile_tab").click(function(){
		$(".mobile_nav").addClass("active");
		$(".transparency").addClass("active");
		$(".container").addClass("active");
});
$(".transparency").click(function(){
	$(".mobile_nav").removeClass("active");
	$(".mobile_nav .sub").hide();
	$(".transparency").removeClass("active");
	$(".container").removeClass("active");
	});
$(".mobile_nav a").click(function(e){
	e.preventDefault();
});
	$(".mobile_nav > ul > li > a").click(function(){
	if($(this).next(".sub").css("display") == "none"){
		$(".mobile_nav .sub").slideUp(300);
		$(this).next(".sub").slideDown(300);
	}else{
		$(this).next(".sub").slideUp(300);
}
	});
	//850해상도 보다 크면 모바일 메뉴 초기화시킵니다.
		$(window).resize(function(){
		var w=$(this).width();
		if(w > 850){
			$(".mobile_nav").removeClass("active");
			$(".mobile_nav .sub").hide();
			$(".transparency").removeClass("active");
			$(".container").removeClass("active");

		}
	});

});

/*아코디언 메뉴 
2Depth가 닫힌 상태이면,
다른 2Depth를 닫고 현재의 선택한 메뉴의 2Depth를 열어 줍니다.
2Depth가 열린 상태이면,
현재 선택한 메뉴의 2Depth를 닫아 줍니다.

css("display") display 속성을 얻을 수 있습니다.(GET 방식)
css({"display":"none"}) display  속성을 none으로 지정 합니다.(SET방식)


if($(".nav .sub").css("display") == "none") {//2Depth가 닫힌 상태이면,
	$(".mobile_nav .sub").slideUp(300);
	$(this).next(".sub").slideDown(300);
}else{//2Depth가 열린 상태이면,
	$(this).next(".sub").slideUp(300);
	
}

*/