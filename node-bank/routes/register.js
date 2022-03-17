var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mongoose = require('mongoose');
const RegisterFunctionSet = require('../src/register');
var emailState= false;
var nameState= false;
var cardState= false;
/* Get register page. */
router.get('/', function(req, res, next) {
  if(req.cookies.logged){
  	res.redirect('/member');
  } else {
  	res.render('register', { title: 'Register',message:"" });
  }
});

/* Process Register*/
router.post('/', function(req, res, next){
  const cardV =RegisterFunctionSet.verifyCard(req.body.card);
  const nameV =RegisterFunctionSet.verifyName(req.body.name);
  const emailV =RegisterFunctionSet.isEmailValid(req.body.email);
  const pswV =RegisterFunctionSet.verifyPassword(req.body.password);
  if (cardV.isValid & nameV.isValid & pswV.isValid & emailV.isValid){
  //var queryE = User.findOne({$or:[{'email': req.body.email},{'card': req.body.card} ,{'name': req.body.name }]});
  var queryN = User.findOne({ 'name': req.body.name });
  queryN.select('id email password');
  queryN.exec(function (err, userN) {
    if (userN != null) {
      console.log("Name aleady taken");
      nameState= false;
      res.render('register', { title: 'Register', message:"User with similar Name credentials already exists" });
      return;
    }else{nameState= true;}
  })
  var queryE = User.findOne({ 'email': req.body.email });
  queryE.exec(function (err, userE) {
    if (userE != null) {
      console.log("Email aleady taken");
      emailState= false;
      res.render('register', { title: 'Register', message:"User with similar Email credentials already exists" });
      return;
    }else{emailState= true;}
  })
  var queryC = User.findOne({ 'card': req.body.card });
  queryC.select('id email password');
  queryC.exec(function (err, userC) {
    if (userC != null) {
      console.log("card aleady taken");
      cardState= false;
      res.render('register', { title: 'Register', message:"User with similar Card credentials already exists" });
      return;
    }else{cardState= true;}
  })
  console.log("point")
  if (cardState==true & nameState==true & emailState==true){
    var user = new User({
  	name: req.body.name,
  	card: req.body.card,
  	password: req.body.password,
  	email: req.body.email
    });
    console.log("save")
      user.save();
      cardState==false;
      nameState==false;
      emailState==false;
      res.render('login', { title: 'Login',message:"" });
    }
    }
  else{

    console.log(cardV.message);
    console.log(nameV.message);
    console.log(pswV.message);
    console.log(emailV.message);
    res.render('register', { title: 'Register', message:"Name, Email and Card must be unique,Names can have only letters and spaces, Emails must ne of standard format, Passwords must be 8-15 characters and Cards a 16 digit number " });
    return;
    } 
}
);
module.exports = router;
