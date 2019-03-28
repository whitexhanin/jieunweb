$(function(){
	/********** gnb ui **********/
	var goPage;
	var topPos;
	var n;
	var scrollSpeed=1000;

	$(".nav a").click(function(e){
		e.preventDefault();
		$(".nav a").removeClass("on");
		$(this).addClass("on");

		goPage=$(this).attr("href");
		// console.log("goPage : "+goPage);
		topPos=$(goPage).offset().top;
		// console.log("topPos : "+topPos);
		$("html, body").animate({scrollTop:topPos}, 800);
	});

	$(".fixed_nav a").click(function(e){
		e.preventDefault();
		$(".fixed_nav a").removeClass("on");
		$(this).addClass("on");

		goPage=$(this).attr("href");
		topPos=$(goPage).offset().top;
		$("html, body").animate({scrollTop:topPos}, 800);
	});

	$(".mobile_tab").click(function(e){
		e.preventDefault();
		$(".mobile_nav").addClass("active");
		$(".transparency").addClass("active");
	});

	$(".mobile_nav a").click(function(e){
		e.preventDefault();
		goPage=$(this).attr("href");
		topPos=$(goPage).offset().top;
		$("html, body").animate({scrollTop:topPos}, 800, function(){
			$(".mobile_nav").removeClass("active");
			$(".transparency").removeClass("active");
		});
/*
	$(".mobile_nav a.close").click(function(e){
		e.preventDefault();
		$(".mobile_nav").removeClass("active");
		$(".transparency").removeClass("active");
	});	*/


});

	$(window).scroll(function(){
		var t=$(this).scrollTop()+600;
		console.log("t : "+t);

		if(t >= $(".title_wrap").offset().top && t <= $(".content2").offset().top){ 
			n=0;
			console.log($(".title_wrap").offset().top);
			console.log($(".content2").offset().top);
		}
		else if(t >= $(".content2").offset().top && t <= $(".content3").offset().top){ 
			n=1;
			console.log($(".content2").offset().top); 
			console.log($(".content3").offset().top);

		}
		else if(t > $(".content3").offset().top){
			n=2;
		}

		if(t > 700){
			if($(".fixed_nav").hasClass("show") == false){
				$(".fixed_nav").addClass("show");
			}
		}else{
			$(".fixed_nav").removeClass("show");
		}

		$(".nav a").removeClass("on");
		$(".nav li").eq(n).find("a").addClass("on");
		$(".fixed_nav a").removeClass("on");
		$(".fixed_nav li").eq(n).find("a").addClass("on");




	});

		$(".transparency").click(function(){
		$(".mobile_nav").removeClass("active");
		$(".transparency").removeClass("active");
	});
			/*
	$(".mobile_tab").click(function(){
		$("mobile_nav").toggleClass("show_menu");
		$(".mobile_tab").toggleClass("close_menu");
		return false;
	});*/
	/********** menu ui **********/
	/*$(".mobile_tab").click(function(e){
		e.preventDefault();
		// $(this).toggleClass("on");
		if($(this).next(".mobile_nav a").hasClass("show") == false){
			$(this).next(".mobile_nav a").addClass("show");
			$(this).next(".mobile_nav a").slideDown(400);
		}else{
			$(this).next(".mobile_nav a").removeClass("show");
			$(this).next(".mobile_nav a").slideUp(400);
		}
	});*/


	/****skill****/
//     jQuery('.skillbar').each(function(){
// 	jQuery(this).find('.skillbar-bar').animate({
// 		width:jQuery(this).attr('data-percent')
// 	},6000);
// });

    /********** popup ui **********/
/*	if($(".popup").length > 0){
	$("body").append("<div class='modalMask'></div>");
	}

	function popupShape(){
		 //console.log("popup shape");
		var winW=$(window).width();
		var winH=$(window).height();
		var thisW=$(".popup").width();
		var thisH=$(".popup").height();

		if(winW > thisW){
			$(".popup").css({left:((winW-thisW)/2)+"px"});
		}else{
			$(".popup").css({left:0});
		}
		if(winH > thisH){
			$(".popup").css({top:((winH-thisH)/2)+"px"});
		}else{
			$(".popup").css({top:0});
		}
	}

	$(".grid-item a").click(function(e){
		e.preventDefault();
		var link=$(this).attr("href");
		var index=parseInt($(this).attr("data-index"));
		console.log("index : "+index);

		$(".modalMask").fadeIn();
		$(link).fadeIn(600);
		num=index;
		galleryMoving();
		popupShape();
	});
	$(".close").click(function(e){
		e.preventDefault();
		$(".modalMask").fadeOut();
		$(this).parents(".popup").fadeOut();
	});

	/********** gallery ui **********/
/*	var num;
	var galleryArray=new Array();
	galleryArray[0]=["네파몰", '<a href="http://easyeun.dothome.co.kr/nepa">http://www.easyeun.dothome.co.kr/nepa</a>', "NEPA"];
	galleryArray[1]=["지센", '<a href="http://easyeun.dothome.co.kr/zishen">http://easyeun.dothome.co.kr/zishen</a>', "Zishen"];
	galleryArray[2]=["과천시청", '<a href="http://easyeun.dothome.co.kr/gwacheon">http://easyeun.dothome.co.kr/gwacheon</a>', "과천시청"];
	galleryArray[3]=["CNN", '<a href="http://easyeun.dothome.co.kr/cnn">http://easyeun.dothome.co.kr/cnn</a>', "CNN"];
	var width=490;
	var total=4;

	function galleryMoving(){
		var distance=num*width*(-1);
		$(".gallery ul").animate({left:distance+"px"}, 800);
		$(".popup h2").html(galleryArray[num][2]);
		$(".popup .title").html(galleryArray[num][0]);
		$(".popup .url").html(galleryArray[num][1]);
		$(".popup .company").html(galleryArray[num][2]);
	}
	$(".left_arrow").click(function(e){
		e.preventDefault();
		if(num > 0){
			num--;
		}
		galleryMoving();
	});
	$(".right_arrow").click(function(e){
		e.preventDefault();
		if(num < (total-1)){
			num++;
		}
		galleryMoving();
	});
	*/




	/********** interval background **********/
	var colorN=0;
	var $header=$(".header_wrapper");
	var colors=new Array("#b1dceb","#fbf18e","#bdec8e");
	$header.css("backgroundColor", colors[colorN]);

	var backInterval=setInterval(function(){
		if(colorN < (colors.length-1)){
			colorN++;
		}else{
			colorN=0;
		}
		$header.animate({"background-color": colors[colorN]}, 3000);
	}, 300);


	/********** mansonry  **********/
// 	mansonryDrawing(".gallery");
// 	function mansonryDrawing(ele){
// 		var $grid=$(ele).masonry({
// 			itemSelector: ".grid-item",
// 			percentPosition: true,
// 			columnWidth: ".grid-sizer"
// 		});
// 	}
// 	$(window).resize(function(){
// 		var w=$("body").width();
// 		// console.log("w : "+w);

// 		if(w > 1075){
// 			$(".transparency").removeClass("active");
// 			$(".mobile_nav").removeClass("active");
// 		}

// 	});

// 	$(window).trigger("resize");
// 	$(window).trigger("scroll");
 });
