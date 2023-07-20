/***************************************************
	hero-slider 
****************************************************/

$(document).ready(function(){
  $('.hero-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1
  });
});


/***************************************************
	custom popup (for all)
****************************************************/

$("body").on('click', ".popup-opener", function(e){
  e.preventDefault();
  var $parents = $(this).attr('data-popup-id');
  var $customPop = $(this).attr('data-overlay');
  $("div[data-popup='" + $parents + "']").addClass("active");
  if($customPop !== "false"){$('.overlay').addClass("active");}
  $("div[data-popup='" + $parents + "']").siblings(".cs-popup").removeClass("active");
  $(this).addClass("active");
  $("body").addClass("popup-active");
});

$("body").on('click', ".close-icon", function(e){
  e.preventDefault();
  var $parents = $('.active').attr('data-popup');
  $(".cs-popup").removeClass("active");
  $('.overlay').removeClass("active");
  $('.popup-opener').removeClass("active");
  $('body').removeClass("popup-active");
});

$("body").on('click', ".overlay", function(e){
  e.preventDefault();
  var $parents = $('.active').attr('data-popup');
  $('.cs-popup').removeClass('active');
  $('.overlay').removeClass("active");
  $('.popup-opener').removeClass("active");
  $('body').removeClass("popup-active");
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    $(".cs-popup").removeClass("active");
    $('.overlay').removeClass("active");
    $('.popup-opener').removeClass("active");
    $('body').removeClass("popup-active");
  }
});


/***************************************************
	main cover div height count
****************************************************/

$(function() {
  var height = $(window).outerHeight(true) - ($("header").outerHeight(true) + $("footer").outerHeight(true) );
  $(".main-cover").css("min-height",height+"px");
});