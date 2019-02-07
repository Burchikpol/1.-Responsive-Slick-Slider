$(document).ready(function(){
    $('.main-slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
    });
  });

 $(".main-slider").on('afterChange', function(event, slick, currentSlide){
     $(".slide-number").text(currentSlide + 1);
  });