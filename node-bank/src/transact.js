const TransactionFunctionSet = {
	isWithdrawValid(withdraw, AvBal){
		var response = {
			isValid: true,
			message: "",
		};
		if (/^[+]?([0-9]+(?:[\.][0-9]{0,2})?|\.[0-9]{1,2})$/.test(withdraw)) {
			response.isValid = true;
		}
		//check empty password field
		if (withdraw == "") {
			response.isValid = false;
			response.message = "Withdraw is empty";
		}
		//check decimal spaces
		// if((/^[+]?([0-9]+(?:[\.][0-9][0-9][0-9]+))$/.test(withdraw))){
		// 	response.isValid = false;
		// 	response.message = "Withdraw Amount value cannot have more than 2 decimal spaces";

		// }

		//check for characters
		if (/[a-zA-Z!#$%&'*+/=?^_`{|}~-]/.test(withdraw)) {
			response.isValid = false;
			response.message =
				"Withdraw Amount value cannot have letters or special characters";
		}
		//minimum withdraw value validation
		if (parseFloat(withdraw) < 0) {
			response.isValid = false;
			response.message = "Withdraw Amount value must not be below 0";
		} else {
			//maximum value of withdraw validation
			if (parseFloat(withdraw) > parseFloat(AvBal)) {
				response.isValid = false;
				response.message =
					"Withdraw Amount value must not exceed available balance";
			}
		}
		return response;
	},
	checkDeposit(deposit){
		var response = {
			isValid: true,
			message: "",
		};
		if (/^[+]?([0-9]+(?:[\.][0-9]{0,2})?|\.[0-9]{1,2})$/.test(deposit)) {
			response.isValid = true;
		}
		//check empty deposit field
		if (deposit == "") {
			response.isValid = false;
			response.message = "deposit is empty";
		}
		//check decimal spaces
		// if((/^[+]?([0-9]+(?:[\.][0-9][0-9][0-9]+))$/.test(withdraw))){
		// 	response.isValid = false;
		// 	response.message = "Withdraw Amount value cannot have more than 2 decimal spaces";

		// }

		//check for characters
		if (/[a-zA-Z!#$%&'*+/=?^_`{|}~-]/.test(deposit)) {
			response.isValid = false;
			response.message =
				"Deposit Amount value cannot have letters or special characters";
		}
		//minimum deposit value validation
		if (parseFloat(deposit) < 0) {
			response.isValid = false;
			response.message = "Deposit Amount value must not be below 0";
		}
		return response;
	},
};

module.exports = TransactionFunctionSet;
