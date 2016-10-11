$(document).ready(function() {
  var form = $('.signup-form'),
      learnmore = $(' .js-future-customer, .js-learn-more'),
      input;

  // when input changes, change the value attribute to whatever is inputted in the field
  $('.signup-form input').on('change paste keyup', function() {
    input = $(this);
    inputString = input.val();
    $(input).attr("value", inputString);

  });


  //Scroll to form
  function scrollDown() {
    $("html, body").animate({
      scrollTop: form.offset().top
    }, 1000);
  }

  // if the success notice is visible
  if ( $( ".notice-success" ).length ) {
    console.log('success notice visible!');
    form.hide();
    scrollDown();

    setTimeout(function () {
        $('.notice-success').fadeOut();
    }, 5000);
  }

  //Show form on click.
  learnmore.on('click', function() {
    form.show(600);
    scrollDown();
    $(".arrow-down-container").addClass('bounce');
    setTimeout(function () {
        $('.arrow-down-container').removeClass('bounce');
    }, 2000);

  });
});
