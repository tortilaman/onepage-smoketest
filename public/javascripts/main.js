var form = $('.signup-form'),
    button = $('.future-customer'),
    learnmore = $('.js-learn-more');

button.on('click', function() {
  form.show(600);

});

learnmore.on('click', function() {
  console.log($(this).attr('class'));

  form.show(600);

  // if ($(this).attr('class') === 'js-learn-more') {
  //   window.scrollTo(0,document.body.scrollHeight);
  //   console.log('clicked learn more');
  // }
});
