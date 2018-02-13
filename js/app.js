var mobileViewport = window.matchMedia("screen and (max-width: 980px)");

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    arrows: false
  });
});