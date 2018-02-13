﻿// == hambuerger menu (X) ==
function myFunction(x) {
  x.classList.toggle("change");
}

$(document).ready(function(){

  $('.slider').slick({

    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3
        }
      },

      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1
        }
        
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.main_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false
  });

  /*
  $('.slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    arrows: false
  });
  */
});


function resizeHeaderOnScroll() {
  var distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 200,
  headerEl = document.querySelector(".top_arrow");
  
  if (distanceY > shrinkOn) {
    headerEl.classList.add("visible");
    headerEl.classList.remove("hidden");
  } else {
    headerEl.classList.remove("visible");
    headerEl.classList.add("hidden");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);


