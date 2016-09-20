var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/********************
**  HOMEPAGE
********************/
router.get('/', function(req,res,next) {
  //Sending all flag values to the template
  res.render('index', {
    title: 'IBM My Learning',
    success: req.session.success,
    errors: req.session.errors,
    errorName: req.session.errorName,
    errorEmail: req.session.errorEmail,
    nameVal: req.session.nameValue,
    emailVal: req.session.emailValue,
    companyVal: req.session.companyValue,
    phoneVal: req.session.phoneValue
  });

  req.session.errors = null;
  req.session.success = null;
  req.session.errorName = null;
  req.session.errorEmail = null;
});

/********************
**  FORM VALIDATION
********************/
//The form submit action goes to /submit, so handle the post request at this url
router.post('/submit', function(req, res, next) {
  //Check validity of form fields
  req.check('customerName', 'Name is required').notEmpty();
  req.check('customerEmail', 'An email is required').notEmpty();
  req.check('customerEmail', 'Invalid email address').isEmail();

  //Set session variables to value of form fields
  req.session.nameValue = req.body.customerName;
  req.session.emailValue = req.body.customerEmail;
  req.session.companyValue = req.body.customerCompany;
  req.session.phoneValue = req.body.customerPhone;

  //Clear error flags so previous submissions don't affect current submission
  req.session.errorName = null;
  req.session.errorEmail = null;


  var errors = req.validationErrors();
  //There are validation errors, take care of it.
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;//unused
    //Clear error flags so previous submissions don't affect current submission
    // req.session.errorName = null;
    // req.session.errorEmail = null;
    for ( var value in errors) {
      //Log validation errors to node console
      console.log("Error in element: "+errors[value].param+", message is: "+errors[value].msg);
      //Update error flags for fields being validated and print to node console
      if (errors[value].param == "customerName") {
        req.session.errorName = true;
        console.log("errorName = true");
      } else if (errors[value].param == "customerEmail") {
        req.session.errorEmail = true;
        console.log("errorEmail = true");
      }
    }
  //No errors, send data via email.
  } else {
    req.session.success = true;
    console.log("No Errors");
    // req.session.errorName = null;
    // req.session.errorEmail = null;

    /********************
    **  EMAIL
    ********************/

    //The transporter contains sender login info
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'tortilaman@gmail.com',
        pass: 'thececsogfqkqrkb'
      }
    });

    //mailOptions contains the email itself
    var mailOptions = {
      from: 'IBM MyLearning <mylearning@bluemix.com>',
<<<<<<< HEAD
      to: 'vivch3n@gmail.com',
=======
      to: 'tortilaman@gmail.com',
>>>>>>> 3f41fb43e9f1c14a1a97d985cfaa7187e583c07e
      subject: 'IBM MyLearning Registration',
      text: 'Someone new has expressed interest in My Learning. Their name is: ' + req.body.customerName + ', email is: ' + req.body.customerEmail + ', company is: ' + req.body.customerCompany + ', phone number is: ' + req.body.customerPhone + '.',
      html: '<p>Someone new has expressed interest in My Learning. Details are:</p><ul><li>Name: '+req.body.customerName+'</li><li>Email: '+req.body.customerEmail+'</li><li>Company: ' +req.body.customerCompany + '</li><li>Phone: '+'</li></ul>'
    };

    //Actually sending the email
    transporter.sendMail(mailOptions, function(error, info) {
      if(error) {
        console.log(error);
      } else {
        console.log('Message Sent: '+info.response);
      }
    });
  }
  //Redirect user from '/submit' to '/'.
  res.redirect('/');
});

module.exports = router;
