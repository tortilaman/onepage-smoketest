var form = $('.signup-form'),
    // button = $('.future-customer'),
    learnmore = $(' .js-future-customer, .js-learn-more');

learnmore.on('click', function() {
  // debugger;
  if ($(this).hasClass('js-learn-more')) {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    console.log('matches js-learn-more!!!!');
  }

  form.show(600);

});
