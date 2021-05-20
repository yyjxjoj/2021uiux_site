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

});
