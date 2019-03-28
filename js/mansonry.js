$(function(){
	var timer=setTimeout(function(){
		mansonryInit();
		/*
		$(".content2").click(function(e){
			e.preventDefault();
			$(".grid1").show();
			$(".grid2").hide();
			mansonryDrawing(".grid1");
		});
		$(".content2").click(function(e){
			e.preventDefault();
			$(".grid1").hide();
			$(".grid2").show();
			mansonryDrawing(".grid2");
		});
		*/

		clearTimeout(timer);
	}, 1000);
	function mansonryInit(){
		mansonryDrawing(".gallery");
		/*mansonryDrawing(".grid2");*/
	}
	function mansonryDrawing(ele){
		var $grid=$(ele).masonry({
			itemSelector: ".grid-item",
			percentPosition: true,
			columnWidth: ".grid-sizer"
		});
	}
});