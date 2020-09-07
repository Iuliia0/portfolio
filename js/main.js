$(document).ready(function () {

  var menuMobile = $(".menu-button__line");
  menuMobile.on("click", function () {
    $(".header-menu").toggleClass("header-menu--visible");
  });

  var menuButton = $(".menu-button__line");
  menuButton.on("click", function () {
    $(".menu-button__line").toggleClass("menu-button__line_active");
    $(".menu-button__logo").toggleClass("menu-button__logo_active");
    $(".menu-button").toggleClass("menu-button_active");
    $(".menu-button__icon").toggleClass("menu-button__icon_active");

  });

});