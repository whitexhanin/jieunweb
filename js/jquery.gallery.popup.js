(function($){
	$.fn.galleryPopup=function(options){
		options=$.extend({
			area: ""
		}, options);

		return this.each(function(){
			var $this=$(this);
			var $popup=$("#");
			var $openButton=$(options.area).children("a");
			if($this.length > 0){
				$("body").append("<div class='modalMask'></div>");
			}

			$(window).resize(function(){
				popupShape();
			});
			function popupShape(){
				var winW=$(window).width();
				var winH=$(window).height();
				var thisW=$popup.width();
				var thisH=$popup.height();

				// width
				if(winW > thisW){
					$popup.css({left:((winW-thisW)/2)+"px"});
				}else{
					$popup.css({left:0});
				}

				// height
				if(winH > thisH){
					$popup.css({top:((winH-thisH)/2)+"px"});
				}else{
					$popup.css({top:0});
				}
			}
			$(window).trigger("resize");

			$openButton.click(function(e){
				e.preventDefault();
				var link=$(this).attr("href");
				$popup=$(link);
				$(".modalMask").fadeIn();
				$(link).fadeIn(600);
				popupShape();
			});
			$(".close, .modalMask").click(function(e){
				e.preventDefault();
				$(".modalMask").fadeOut(0);
				$popup.fadeOut(0);
			});
		});
	}
})(jQuery);