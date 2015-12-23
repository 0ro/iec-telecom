$(document).ready(function() {
  $('.sign').click(function(event) {
    $('.nav__menu').css('display', 'none');
    $('.header__form .form').toggle();
  });
  $('.nav__toggle').click(function(event) {
    $('.header__form .form').css('display', 'none');
    $('.nav__menu').toggle();
  });
});