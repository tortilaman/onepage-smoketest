var form = $('.signup-form'),
    button = $('.future-customer'),
    learnmore = $('.js-learn-more');

button.on('click', function() {
  form.show(600);

  if ($(this).attr('class') === 'js-learn-more') {
    console.log('clicked on a learn more link');
  }

});

learnmore.on('click', function() {
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  form.show(600);
});
