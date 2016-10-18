$(document).ready(function() {
  var form = $('.signup-form'),
      learnmore = $(' .js-future-customer, .js-learn-more'),
      submitBtn = $(" .submit-btn"),
      scrollPos = null,
      cookieArr = document.cookie.split(';'),
      input;

  //Find scroll position inside cookieArr and set scrollTop().
  for(var i = 0; i < cookieArr.length; i++) {
    var partArr = cookieArr[i].split('=');
    if(cookieArr[i].indexOf("scrollPos") >= 0) {
      console.log("Scroll position is: "+partArr[1]);
      $("html, body").scrollTop(partArr[1]);
    }
  }

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

  function setCookie() {
    var d = new Date();
    d.setTime(d.getTime() + (1*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var scroll = $("html").scrollTop() > $("body").scrollTop() ? parseFloat($("html").scrollTop()).toFixed(2) : parseFloat($("body").scrollTop()).toFixed(2);
    scrollPos = parseInt(scroll).toFixed(2);
    // console.log("Pos is: "+scrollPos);
    document.cookie = "scrollPos=" + scrollPos + "; " + expires + "; path=localhost:3000/ ";
  }

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validate() {
    console.log("Validating");
    var inp = $(this);
    var bubble = $(this).nextAll('.inputError');
    var msg = bubble.find('.inputErrorMessage');
    msg.text("");
    if(inp.attr("type") == "email") {
      var email = $("#customerEmail").val();
      if (!validateEmail(email)) {
        msg.text("Invalid email address");
        bubble.show(300);
        setTimeout( function() {
          bubble.hide(300);
        }, 3000);
      }
    }

    if(inp.val() === '') {
      msg.text("This field is required");
      bubble.show(300);
      setTimeout( function() {
        bubble.hide(300);
      }, 3000);
    }

    return false;
  }

  $("#customerEmail, #customerName").on("focusin", function() {
    $("#customerEmail, #customerName").one("focusout", validate);
  });


  $(window).on('scroll', function() {
    window.requestAnimationFrame(function() {
      setCookie();
    });
  });
});
