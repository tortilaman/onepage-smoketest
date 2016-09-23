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


$(".arrow-down-link").click(function() {
    doBounce($(this), 3, '10px', 300);
});


function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
    }
}
