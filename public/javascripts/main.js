var form = $('.signup-form'),
    learnmore = $(' .js-future-customer, .js-learn-more');

learnmore.on('click', function() {
  if ($(this).hasClass('js-learn-more')) {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  }

  form.show(600);

});
