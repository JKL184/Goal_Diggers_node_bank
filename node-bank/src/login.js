'use strict';


var isEmailValid = function(emailAddr) {
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
		if(pw.length > 15){  
			response.isValid = false;
			response.message = "Password length must not exceed 15 characters";  
		}
	}
	return response;
};



