$(document).ready(function(){
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

  $(".content_slider").bxSlider({
    pager: true,
    controls: false,
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

  let langChange = 0;
  $(".language .kr").click(function(){

    if(langChange == 0){
      $(".language .kr").addClass("lang_active")
      $(".language .en").removeClass("lang_active")
      langChange = 1;
    }else{
      $(".language .kr").removeClass("lang_active")
      $(".language .en").addClass("lang_active")
      langChange = 0;
    }
  });
  $(".language .en").click(function(){

    if(langChange == 0){
      $(".language .en").addClass("lang_active")
      $(".language .kr").removeClass("lang_active")
      langChange = 1;
    }else{
      $(".language .en").removeClass("lang_active")
      $(".language .kr").addClass("lang_active")
      langChange = 0;
    }
  });

});
