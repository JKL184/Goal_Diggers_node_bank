// var express = require('express');
// var router = express.Router();
// var User = require('../models/user');
//var mongoose  = require("mongoose");
//const {MongoClient} = require('mongodb');
//mongoose.connect('mongodb://jeffreynerona:VyxfpsiDdWh4oF1I@cluster0-shard-00-00-k7flg.mongodb.net:27017,cluster0-shard-00-01-k7flg.mongodb.net:27017,cluster0-shard-00-02-k7flg.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');


//var Schema = mongoose.Schema;
//var User = mongoose.model('User', userSchema);

// /* Get login page. */
// router.get('/', function(req, res, next) {
//   if(req.cookies.logged){
//   	res.redirect('/member');
//   } else {
//   	res.render('login', { title: 'Login' });
//   }
// });

/* Proccess Login */
var isEmailValid2 = function(emailAddr, pw) {
    //router.post('/', function(req, res, next) {
        //var User = mongoose.model('User', userSchema);
        //module.exports = User;
        //var MongoClient = require('mongodb').MongoClient;
        var email = emailAddr;
        var pass = pw;
        console.log(email);
        console.log(pass);
        var query = User.findOne({ 'email': email });
        query.select('id email password');
        query.exec(function (err, user) {
            if (query == NULL) {
                return true;
            }else{
                return false;
            }
        })
        //return false;
        //console.log(email);
        //if (query == NULL) {
        //    return true;
        //}     
        //return false;   
        // query.exec(function (err, user) {
        // if (err) return false;
  	    //     return true;
        // });
    //});
};
//module.exports = router;



// // var express = require('express');
// // var router = express.Router();
// var User = require('../models/user');
// // var mongoose = require('mongoose');

// var isEmailValid2 = function(emailAddr, pw) {
//     var email = emailAddr;
//     var pass = pw;
//     var query = User.findOne({ 'email': email, 'password':pass });
//     query.select('id email password');
//     query.exec(function (err, user) {
//         if (err) return false;
//   	    return true;
//     // if (err) return handleError(err);
//   	//     console.log('Email: %s, Password: %s', user.email, user.password);
//   	//     res.cookie('logged',user.id);
//   	//     res.redirect('/member');
//   });
// };
// 	// //check empty password field  
// 	// if(withdraw == "") {  
// 	// 	response.isValid = false;
// 	// 	response.message = "Withdraw is empty";  
// 	// }  
//     // //check decimal spaces 
// 	// if((/^[+]?([0-9]+(?:[\.][0-9][0-9][0-9]+))$/.test(withdraw))){  
// 	// 	response.isValid = false;
// 	// 	response.message = "Withdraw Amount value cannot have more than 2 decimal spaces";  
	
// 	// }
// 	// //check for characters
// 	// if((/[a-zA-Z!#$%&'*+/=?^_`{|}~-]/.test(withdraw))){  
// 	// 	response.isValid = false;
// 	// 	response.message = "Withdraw Amount value cannot have letters or special characters";  
// 	// }   
// 	// //minimum withdraw value validation  
// 	// if(parseFloat(withdraw)<0) {  
// 	// 	response.isValid = false;
// 	// 	response.message = "Withdraw Amount value must not be below 0";  
// 	// }
// 	// else{
// 	// 	//maximum value of withdraw validation  
// 	// 	if(parseFloat(withdraw) > parseFloat(AvBal)) {  
// 	// 		response.isValid = false;
// 	// 		response.message = "Withdraw Amount value must not exceed available balance";  
// 	// 	}
// 	// }

	

// 	//return response;
// //};