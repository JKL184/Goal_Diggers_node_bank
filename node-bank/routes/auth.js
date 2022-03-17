var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mongoose = require('mongoose');
const RegisterFunctionSet = require('../src/register');


/* Get login page. */
router.get('/', function(req, res, next) {
  if(req.cookies.logged){
  	res.redirect('/member');
  } else {
  	res.render('login', { title: 'Login' ,message:""});
  }
});

/* Process Login */
router.post('/', function(req, res, next) {
  var email = req.body.email;
  var pass = req.body.password;
  const emailV =RegisterFunctionSet.isEmailValid(email);
  const pswV =RegisterFunctionSet.verifyPassword(pass);
  if (pswV.isValid & emailV.isValid){
  var query = User.findOne({ 'email': email, 'password':pass });
  query.select('id email password');
  query.exec(function (err, user) {
    if (user == null) {
      console.log("invalid credentials");
      res.render('login', { title: 'Login', message:"Invalid Credentials" });
      return;
    }else{
      console.log('Email: %s, Password: %s', user.email, user.password);
      res.cookie('logged',user.id);
      res.redirect('/member');
  }	
  });
}else{
  res.render('login', { title: 'Login', message:"Email must be of standard email format and Password must be between 8-15 characters" });
  console.log(pswV.message);
  console.log(emailV.message);
}
  
});
module.exports = router;
