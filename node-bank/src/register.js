'use strict';


// Verfication of Card Function: This function checks to ensure that the card number entered is valid i.e not empty and is 16 digits long

function verifyCard(cardnum){
	var response = {
		isValid : false,
		message : ""
	};
//check if Card number entered only contains numbers   
	if(/^[0-9]*$/.test(cardnum)){
		response.message = "Card number entered is not a number"; 
	}
//check empty Card number field
	if (cardnum == ""){
		response.message = "Card number entered is empty"; 
	}
//check the # of digits in cardnumber to 16
	if (cardnum.length != 16){
		response.message = "Card number entered is invalid"; 
	}
    return response;
};

//needs to be fixed because 16 digit exception isn't working anymore