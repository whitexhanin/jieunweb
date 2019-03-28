
	var t;

	$(function(){

		$(window).scroll(function(){
			t=$(this).scrollTop();
			
					// sub page 
	
			if(t>200){
				$(".container.sub .header_wrapper").addClass("fix");
				$(".container.sub .nav h2").addClass("fix");
				$(".right_icon").addClass("fix");
	
			}else{
				$(".container.sub .header_wrapper").removeClass("fix");
				$(".container.sub .nav h2").removeClass("fix");
				$(".right_icon").removeClass("fix");
			}
	
		});


		$('.ico_up').click(function(e){
			e.preventDefault();
			$('html,body').animate({'scrollTop' : 0},1000);
		});
		
		$('.text > a').on('click' , function(e){
			e.preventDefault();
			var goPage = $(this).attr('href')
			var topPos = $(goPage).offset().top;
			

			$('html,body').animate({'scrollTop' : topPos},1000);
		});

	});




