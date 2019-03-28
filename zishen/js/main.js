$(function(){
	$(".mobile_menu a").click(function(e){
		e.preventDefault();
		$(".pannel_menu").addClass("active");
		$(".transparency").addClass("active");
	});
	$(".transparency").click(function(e){
		if($(".transparency").hasClass("active")){
			$(".pannel_menu").removeClass("active");
			$(".transparency").removeClass("active");
		}
	});
	$(window).resize(function(){
		var w=$("body").width();
		// console.log("w : "+w);

		if(w > 1075){
			$(".pannel_menu").removeClass("active");
			$(".transparency").removeClass("active");
		}
	})
	/********** owl carousel plugins **********/
	var owl=$("#owl");

	owl.owlCarousel({
		navigation: true,
		singleItem: true,
		transitionStyle : "fadeUp",
		autoPlay: true
	});
	$("#transitionType").change(function(){
		var newValue=$(this).val();
		owl.data("owlCarousel").transitionTypes(newValue);
		owl.trigger("owl.next");
	});



	$(window).trigger("resize");
});