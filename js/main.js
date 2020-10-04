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

  $("link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      {
        duration: 1000,
        easing: "swing",
      }
    );
    return false;
  });

  var tabsItem = $(".header-menu__item");
  var contentItem = $(".tabs");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("header-menu__item_active");
    $(activeContent).toggleClass("tabs__active");
    $(this).addClass("header-menu__item_active");
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("data-target")).offset().top + "px",
      },
      {
        duration: 1000,
        easing: "swing",
      }
    );
    return false;
  });

  var menuCloset = $(".header-menu__link");
  menuCloset.on("click", function () {
    $(".menu-button").removeClass("menu-button_active");
    $(".header-menu").removeClass("header-menu--visible");
    $(".menu-button__logo").removeClass("menu-button__logo_active");
    $(".menu-button__line").removeClass("menu-button__line_active");
    $(".menu-button__icon").removeClass("menu-button__icon_active");
  });
});
