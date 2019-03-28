$(function(){
$(document).ready(function() {

  var owl = $(".owl-demo");

  owl.owlCarousel({

      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 3],
        [700, 3],
        [1000, 4],
        [1200, 5],
        [1400, 5],
        [1600, 5]
      ],
      navigation : true

  });
$(".search").click(function(){
    $(".form_wrap").animate({width:"395px"}, 500);
    $(".nav").css("display","none");
    //$(".search").css("display","none");
    //$(".nav > ul > li > a").addClass("font");
    //$(this).css("display","none");

  });

  $(".form_wrap > .form > .x").click(function(){
    $(".form_wrap").animate({width:"0"}, 500);
    $(".nav").css("display","block");
    //$(".nav > ul > li > a").removeClass("font");
    //$(".search").css("display","block");
    return false;
  });
  $(".mobile_button").click(function(){
    //e.preverntDefault();
    $(".mobile_nav").addClass("active");
    return false;
  });
  $(".mobile_button").click(function(){
    //e.preverntDefault();
    $(".mobile_nav").addClass("active");
    $(".m_open").addClass("active");
    $(".m_close").addClass("active");
    return false;
  });
  $(".m_close").click(function(){
    //e.preverntDefault();
    $(".mobile_nav").removeClass("active");
    $(".m_open").removeClass("active");
    $(".m_close").removeClass("active");
    return false;
  });
  /*
  $("#keyword").keyup(function(){
    var k = $(this).val();
    $(".sub_visual > .item").hide();
    var temp = $(".sub_visual > .item > h4 > a:contains("'+k+'")");
    $(temp).parent().show();
  });
  */
});
});
