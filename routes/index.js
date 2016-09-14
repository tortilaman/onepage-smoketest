var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/********************
**  HOMEPAGE
********************/
router.get('/', function(req,res,next) {
  res.render('index', {
    title: 'IBM My Learning',
    success: false,
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
  req.session.nameValue = null;
  req.session.emailValue = null;
  req.session.companyValue = null;
  req.session.phoneValue = null;
});

/********************
**  FORM VALIDATION
********************/
router.post('/submit', function(req, res, next) {
  req.check('customerName', 'Name is required').notEmpty();
  req.check('customerEmail', 'An email is required').notEmpty();
  req.check('customerEmail', 'Invalid email address').isEmail();

  req.session.nameValue = req.body.customerName;
  req.session.emailValue = req.body.customerEmail;
  req.session.companyValue = req.body.customerCompany;
  req.session.phoneValue = req.body.customerPhone;

  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
    for ( var value in errors) {
      if (errors[value].param == "customerName") {
        req.session.errorName = true;
      } else if (errors[value].param == "customerEmail") {
        req.session.errorEmail = true;
      }
    }
  } else {
    req.session.success = true;
    req.session.errorName = null;
    req.session.errorEmail = null;

    /********************
    **  EMAIL
    ********************/
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'tortilaman@gmail.com',
        pass: 'thececsogfqkqrkb'
      }
    });

    var mailOptions = {
      from: 'IBM MyLearning <mylearning@bluemix.com>',
      to: 'tortilaman@gmail.com',
      subject: 'IBM MyLearning Registration',
      text: 'Someone new has expressed interest in My Learning. Their name is: ' + req.body.customerName + ', email is: ' + req.body.customerEmail + ', company is: ' + req.body.customerCompany + ', phone number is: ' + req.body.customerPhone + '.',
      html: '<p>Someone new has expressed interest in My Learning. Details are:</p><ul><li>Name: '+req.body.customerName+'</li><li>Email: '+req.body.customerEmail+'</li><li>Company: ' +req.body.customerCompany + '</li><li>Phone: '+'</li></ul>'
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if(error) {
        console.log(error);
      } else {
        console.log('Message Sent: '+info.response);
      }
    });
  }
  res.redirect('/');
});

module.exports = router;
