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
});
