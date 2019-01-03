$(window).scroll(function () {

  var windowScroll = $(this).scrollTop();

  $('.logo').css({
    'transform': 'translate(0px,' + windowScroll / 3 + '%)'
  })

  $('.back-bird').css({
    'transform': 'translate(0px,' + windowScroll / 4 + '%)'
  })

  $('.fore-bird').css({
    'transform': 'translate(0px,-' + windowScroll / 40 + '%)'
  })

  if (windowScroll > $('.products-pics').offset().top - ($(window).height() / 1.2)) {

    $('.product-picture').each(function (i) {

      setTimeout(function () {
        $('.product-picture').eq(i).addClass('is-showing');
      }, 350 * (i + 1));
    });
  }
});