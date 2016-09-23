// var success = $('.notice-success');

//
// A $( document ).ready() block.
// $( document ).ready(function() {
//     console.log( "ready!" );
//     success.hide();
// });


var form = $('.signup-form'),
    learnmore = $(' .js-future-customer, .js-learn-more');

learnmore.on('click', function() {
  if ($(this).hasClass('js-learn-more')) {
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  }

  form.show(600);

});
