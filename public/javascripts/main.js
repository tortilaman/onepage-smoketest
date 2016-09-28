// Handle scroll and show form


$( document ).ready(function() {

  var form = $('.signup-form'),
      learnmore = $(' .js-future-customer, .js-learn-more');

  if ( $( ".notice-success" ).length ) {
    form.hide();
    scrollDown();
    setTimeout(function () {
        $('.notice-success').fadeOut();
    }, 5000);
  }

  var form = $('.signup-form'),
      learnmore = $(' .js-future-customer, .js-learn-more');

  learnmore.on('click', function() {
    form.show(600);
    scrollDown();
    $(".arrow-down-container").addClass('bounce');
    setTimeout(function () {
        $('.arrow-down-container').removeClass('bounce');
    }, 2000);

  });
});

function scrollDown() {
  $("html, body").animate({
    scrollTop: $('.signup-form').offset().top
  }, 1000);
}
