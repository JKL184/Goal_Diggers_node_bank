var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mongoose = require('mongoose');
const RegisterFunctionSet = require('../src/register');

/* Get register page. */
router.get('/', function(req, res, next) {
  if(req.cookies.logged){
  	res.redirect('/member');
  } else {
  	res.render('register', { title: 'Register' });
  }
});

/* Process Register*/
router.post('/', function(req, res, next){
  const cardV =RegisterFunctionSet.verifyCard(req.body.card);
  const nameV =RegisterFunctionSet.verifyName(req.body.name);
  if (cardV.isValid & nameV.isValid){
    var user = new User({
  	name: req.body.name,
  	card: req.body.card,
  	password: req.body.password,
  	email: req.body.email
  });
  user.save();
  res.render('login', { title: 'Login' });
}else{
  console.log(cardV.message);
  console.log(nameV.message);
}
  
});
module.exports = router;
