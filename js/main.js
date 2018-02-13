// == preloader ==


var preloader = document.querySelector("#preloader");

var home = document.querySelector("#home");


//preloader:

window.addEventListener('load', function () {
    preloader.classList.add('hide');
    home.classList.add('visible');
});


window.addEventListener('load', function () {
    setTimeout(function(){
        preloader.classList.add('hide');
        home.classList.add('visible');
    },1000);

});


// == hambuerger menu (X) ==
function myFunction(x) {
    x.classList.toggle("change");
}


function resizeHeaderOnScroll() {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 200,
    headerEl = document.querySelector(".navigation");
    
    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
      headerEl.classList.remove("bigger");
    } else {
      headerEl.classList.remove("smaller");
      headerEl.classList.add("bigger");
    }
  }
  
  window.addEventListener('scroll', resizeHeaderOnScroll);

//form 

//phone
var phone = document.querySelector("#phone");
var pmsg = document.querySelector("#phone_message");

phone.onfocus = function (){
    pmsg.style.display = 'block';
};

phone.onblur = function() {
    pmsg.style.display='none';
};

//email

var email = document.querySelector("#email");
var emsg = document.querySelector("#email_message");

email.onfocus = function (){
    emsg.style.display = 'block';
};

email.onblur = function() {
    emsg.style.display='none';
};

//name

var uname = document.querySelector("#uname");
var nmsg = document.querySelector("#name_message");

uname.onfocus = function (){
    nmsg.style.display = 'block';
};

uname.onblur = function() {
    nmsg.style.display='none';
};

//msg

var txt = document.querySelector("#txt");
var tmsg = document.querySelector("#text_message");

txt.onfocus = function (){
    tmsg.style.display = 'block';
};

txt.onblur = function() {
    tmsg.style.display='none';
};


