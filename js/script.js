$(document).ready(function() {
  $('.sign').click(function(event) {
    $('.nav__menu').hide();
    $('.header__form .form').toggle();
  });
  $('.nav__toggle').click(function(event) {
    $('.header__form .form').hide();
    $('.nav__menu').toggle();
  });

  /*SLICK*/
   $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});