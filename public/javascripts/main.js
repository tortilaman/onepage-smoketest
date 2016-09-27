// Handle scroll and show form

var form = $('.signup-form'),
    learnmore = $(' .js-future-customer, .js-learn-more');

learnmore.on('click', function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  $(".arrow-down-container").addClass('bounce');
  form.show(600);

  setTimeout(function () {
      $('.arrow-down-container').removeClass('bounce');
  }, 2000);

});

// $('.notice-success').delay(3000).hide();
