'use strict';


var isEmailValid = function(emailAddr) {
	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddr))
	{
	    return true;
	}
	return false;
};

var verifyPassword = function(pw) {
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
		if(pw.length > 15) {  
			response.isValid = false;
			response.message = "Password length must not exceed 15 characters";  
		}
	}

	

	return response;
};

var isWithdrawValid = function(withdraw,AvBal) {
	var response = {
		isValid : true,
		message : ""
	};
	if ((/^[+]?([0-9]+(?:[\.][0-9]{0,2})?|\.[0-9]{1,2})$/.test(withdraw))) {
		response.isValid = true;  
	} 
	//check empty password field  
	if(withdraw == "") {  
		response.isValid = false;
		response.message = "Withdraw is empty";  
	}  
    //check decimal spaces 
	if((/^[+]?([0-9]+(?:[\.][0-9][0-9][0-9]+))$/.test(withdraw))){  
		response.isValid = false;
		response.message = "Withdraw Amount value cannot have more than 2 decimal spaces";  
	
	}
	//check for characters
	if((/[a-zA-Z!#$%&'*+/=?^_`{|}~-]/.test(withdraw))){  
		response.isValid = false;
		response.message = "Withdraw Amount value cannot have letters or special characters";  
	}   
	//minimum withdraw value validation  
	if(parseFloat(withdraw)<0) {  
		response.isValid = false;
		response.message = "Withdraw Amount value must not be below 0";  
	}
	else{
		//maximum value of withdraw validation  
		if(parseFloat(withdraw) > parseFloat(AvBal)) {  
			response.isValid = false;
			response.message = "Withdraw Amount value must not exceed available balance";  
		}
	}

	

	return response;
};

