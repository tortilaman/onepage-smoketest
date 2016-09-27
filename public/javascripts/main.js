// Handle scroll and show form

var form = $('.signup-form'),
    learnmore = $(' .js-future-customer, .js-learn-more');

learnmore.on('click', function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  doBounce($(".arrow-down-link"), 3, '8px', 200);
  form.show(600);

});


function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
    }
}
