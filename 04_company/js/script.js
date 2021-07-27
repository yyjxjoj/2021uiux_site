$(document).ready(function(){


  // menu
  $("#main_menu>ul>li").hover(function(){
    $(".submenu").stop().slideDown();
  },function(){
    $(".submenu").stop().slideUp();
  });



  // mainSlider
  let mainSlider = $(".main_slider").bxSlider({
    controls: false,
    pager: false,
  });

  $(".img_controls .controls .next_btn").click(function(){
      mainSlider.goToNextSlide();
  });
  $(".img_controls .controls .prev_btn").click(function(){
      mainSlider.goToPrevSlide();
  });

  let newsSlider = $(".news_slider").bxSlider({
    pager: false,
    controls: false,
  });
  $(".box_controls .controls .next_btn").click(function(){
    newsSlider.goToNextSlide();
  });
  $(".box_controls .controls .prev_btn").click(function(){
    newsSlider.goToPrevSlide();
  });

  let btnPopup = 0;
  $(".family_btn").click(function(){

    if(btnPopup == 0){
      $(".view li").addClass("btn_active")
      $(".view li").fadeIn();
      btnPopup = 1;
    }else{
      $(".view li").removeClass("btn_active")
      $(".view li").fadeOut();
      btnPopup = 0;
    }
  });

  // language
  let langChange = 0;
  $(".language .kr").click(function(){
    if(langChange == 0){
      $(".language .kr").addClass("lang_active")
      $(".language .en").removeClass("lang_active")
      langChange = 1;
    }else{
      langChange = 0;
    }
  });
  $(".language .en").click(function(){
    if(langChange == 0){
      $(".language .en").addClass("lang_active")
      $(".language .kr").removeClass("lang_active")
      langChange = 1;
    }else{
      langChange = 0;
    }
  });


  $(".cardWrap .product_card > div").hover(function(){
    let i = $(this).index();
    console.log(i);
    $(".cardWrap .product_card > div").eq(i).find(".productimg").removeClass("moon")
  },function(){
    $(".cardWrap .productimg").addClass("moon")
  });


// swiper js
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// scroll
    $(window).scroll(function(){
      // let scrollY = window.pageYoffset;
      const topPos = $(".top").offset().top;
      const menuPos = $("#main_menu>ul").offset().top;

      let scrollY = $(window).scrollTop();
      console.log(scrollY);
      $(".scrollY").html(scrollY + "px");
      
      if(900 < scrollY){
        $("#main_menu>ul").addClass("menufixed");
      }else{
        $("#main_menu>ul").removeClass("menufixed");
      }


      if(1000 < scrollY){
        $(".top").addClass("view");
      }else{
        $(".top").removeClass("view");
      }

    }); //scroll

    $(".top").click(function(){
      $("html,body").animate({scrollTop:0},1000);

    });
});
