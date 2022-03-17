var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mongoose = require('mongoose');
const TransactionFunctionSet = require('../src/transact');
var userdata;

/* Get member page. */
router.get('/', function(req, res, next) {
  if(req.cookies.logged){
    var uid = req.cookies.logged;
    var query = User.findOne({ '_id' : uid });
    query.select('name email money card image_url');
    query.exec(function (err, user) {
    if (err) return handleError(err);
      userdata=user;
      res.render('member', { userdata: user, title: 'member', action:'MAIN' });
    });
  } else {
    res.redirect('/login');
  }
});
router.get('/withdraw', function(req, res, next) {
  res.render('member', { action: 'WITHDRAW',message:"", userdata: userdata, title: 'Withdraw' });
});
router.get('/deposit', function(req, res, next) {
  res.render('member', { action: 'DEPOSIT',message:"", userdata: userdata, title: 'Deposit' });
});
router.get('/logout', function(req, res, next) {
  res.clearCookie("logged");
  res.redirect('/login');
});
router.get('/transact', function(req, res, next) {
  res.send('it goes to get');
});
router.post('/transact', function(req, res, next) {
  console.log('transact working');
  var amount = req.body.amount;
  var card = req.body.card;
  var action = req.body.action;
  console.log(amount+' '+card+' '+action);
    if(action=='DEPOSIT'){
      const result= TransactionFunctionSet.checkDeposit(amount);
      if(result.isValid){
        var newAmount = (parseInt(amount) + parseInt(userdata.money)).toString();
        var deposit = User.updateOne(
        { 'card' : card },
        { $set: { 'money' : newAmount } }
        );
        deposit.exec(function (err, result) {
        if (err) return handleError(err);
          console.log(result);
        });
        res.redirect('/member');
      }else{
        res.render('member', { action: 'DEPOSIT',message:"Amount must be a unsigned whole number", userdata: userdata, title: 'Deposit' });
        console.log(result.message);
      }
    };
    if(action=='WITHDRAW'){
      const result= TransactionFunctionSet.isWithdrawValid(amount,userdata.money);
      if(result.isValid){
        var newAmount = parseInt(userdata.money) - parseInt(amount);
        if(newAmount<0){res.redirect('/member'); return;}
        var withdraw = User.updateOne(
        { 'card' : card },
        { $set: { 'money' : newAmount } }
        );
        withdraw.exec(function (err, result) {
        if (err) return handleError(err);
          console.log(result);
        });
        res.redirect('/member');
      }else{
        res.render('member', { action: 'WITHDRAW',message:"Amount must be a unsigned whole number and less than available balance", userdata: userdata, title: 'Withdraw' });
        console.log(result.message);
      }
      
    };
    
});
module.exports = router;
