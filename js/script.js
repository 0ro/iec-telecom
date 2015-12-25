$(document).ready(function() {
  $('.sign').click(function(event) {
    $('.nav__menu').hide();
    $('.header__form .form').toggle();
  });
  $('.nav__toggle').click(function(event) {
    $('.header__form .form').hide();
    $('.nav__menu').toggle();
  });
});