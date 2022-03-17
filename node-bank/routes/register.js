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
  const emailV =RegisterFunctionSet.isEmailValid(req.body.email);
  const pswV =RegisterFunctionSet.verifyPassword(req.body.password);
  if (cardV.isValid & nameV.isValid & pswV.isValid & emailV.isValid){
  var queryE = User.findOne({'email': req.body.email,'card': req.body.card ,'name': req.body.name  });
  queryE.select('id email password ');
  queryE.exec(function (err, userE) {
    if (userE == null) {
      var user = new User({
        name: req.body.name,
        card: req.body.card,
        password: req.body.password,
        email: req.body.email
        });
      console.log("save point");
    }else{
      console.log("credentials aleady taken");
    res.redirect('back');}

    //res.render('register', { title: 'Register', message:"User with similar credentials E already exists" });
    return;
  }
  )
  // var queryC = User.findOne({ 'card': req.body.card });
  // queryC.select('id email password');
  // queryC.exec(function (err, userC) {
  //   if (userC != null) {
  //     console.log("card aleady taken");
  //     res.redirect('back');
  //     //res.render('register', { title: 'Register', message:"User with similar credentials N already exists" });
  //     return;
  //   }
  // })
  // var queryN = User.findOne({ 'name': req.body.name });
  // queryN.select('id email password');
  // queryN.exec(function (err, userN) {
  //   if (userN != null) {
  //     console.log("Name aleady taken");
  //     res.render('register', { title: 'Register', message:"User with similar credentials already exists" });
  //     return;
  //   }
  // })
  
    // var user = new User({
  	// name: req.body.name,
  	// card: req.body.card,
  	// password: req.body.password,
  	// email: req.body.email
    // });
      //user.save();
      //res.render('login', { title: 'Login' });
      //console.log("User with similar credentials already exists")
    }
  else{
    console.log(cardV.message);
    console.log(nameV.message);
    console.log(pswV.message);
    console.log(emailV.message);
    } 
}
);
module.exports = router;
