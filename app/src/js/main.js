var COOKIE_NAME = 'kasten-cookie-agree';
var hasAgreedToCookies = !!store.get(COOKIE_NAME);

$(document).ready(function() {

  var currentYear = new Date().getFullYear();
  if (currentYear > 2017) {
    $('.copyright .to-date').text('-' + currentYear);
  }

  /**
   * Logic for GDPR cookie banner
   */
  var showCookieBanner = function() {
    if (!hasAgreedToCookies) $('.cookie-banner').fadeIn();
  };

  $('.btn-cookie-agree').click(function() {
    store.set(COOKIE_NAME, true);
    $('.cookie-banner').fadeOut();
  });
  // Show the banner after 1s
  setTimeout(showCookieBanner, 1000);

  // Navbar
  // Open mobile nav window
  $('.menu-btn').click(function() {
    $('nav').toggleClass('open');
  });
  // Open nav submenu
  $('.navitem').click(function() {
    $(this).toggleClass('open');
  });
  // When user clicks any link in mobile nav window, close the nav
  $('nav a, nav .close-btn').click(function() {
    $('nav').removeClass('open');
  });

  // Float the nav bar when scrolling
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $('nav').addClass('floating');
    } else {
      $('nav').removeClass('floating');
    }
  });

});
