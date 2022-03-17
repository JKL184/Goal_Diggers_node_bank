'use strict';
const RegisterFunctionSet = {

// Verfication of Card Function: This function checks to ensure that the card number entered is valid i.e not empty and is 16 digits long
	verifyCard(cardnum){
	var response = {
		isValid : false,
		message : ""
	};
//check if Card number entered only contains numbers   
	if(/^[0-9]*$/.test(cardnum)){
		response.isValid=true
		response.message = "Card number entered is a number"; 
	}
//check empty Card number field
	if (cardnum == ""){
		response.isValid=false
		response.message = "Card number entered is empty"; 
	}
//check the # of digits in cardnumber to 16
	if (cardnum.length != 16){
		response.isValid=false
		response.message = "Card number entered is invalid"; 
	}
    return response;
}, verifyName(name){
	var response = {
	isValid : true,
	message : "N"
	};
	if(/[0-9!#$%&'*+=?^_`{|}~-]/.test(name)){
	response.isValid=false;
	response.message = "name is invalid"; 
	}
	
	return response;
}, 
isEmailValid(emailAddr) {
	var response = {
		isValid : true,
		message : ""
	};
	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddr))
	{
		response.isValid = true;
		response.message = "email is valid"; 
	}else{
		response.isValid = false;
		response.message = "email is not valid";
	}
	return response;	
}, verifyPassword(pw) {
	var response = {
		isValid : true,
		message : ""
	};
	//check empty password field  
	if(pw == "") {  
		response.isValid = false;
		response.message = "Password is empty";  
	}  

	//minimum password length validation  
	if(pw.length < 8) {
		response.isValid = false;  
		response.message = "Password length must be atleast 8 characters";
	}  
	else{
		//maximum length of password validation  
		if(pw.length > 15){  
			response.isValid = false;
			response.message = "Password length must not exceed 15 characters";  
		}
	}
	return response;
},
};

module.exports = RegisterFunctionSet;
//needs to be fixed because 16 digit exception isn't working anymore