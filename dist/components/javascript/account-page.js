Lyte.Component.register("account-page", {
_template:"<template tag-name=\"account-page\"> <div class=\"container\"> <h2>Welcome to Your Bank</h2> <h3>Deposit</h3> <input type=\"text\" placeholder=\"accountNumber\" id=\"accountNumber\"> <input type=\"number\" placeholder=\"Amount\" id=\"depositAmount\"> <button onclick=\"{{action('deposit')}}\">Deposit</button> <h3>Withdraw</h3> <input type=\"text\" placeholder=\"accountNumber\" id=\"withdrawAccNumber\"> <input type=\"number\" placeholder=\"Amount\" id=\"withdrawAmount\"> <button onclick=\"{{action('withdraw')}}\">withdraw</button> <h3>Transfer</h3> <input type=\"text\" placeholder=\"accountNumber\" id=\"transferAccNumber\"> <input type=\"text\" placeholder=\"Recipient Account\" id=\"recipient\"> <input type=\"number\" placeholder=\"Amount\" id=\"transferAmount\"> <button onclick=\"{{action('transfer')}}\">Transfer</button> <button onclick=\"{{action('logout')}}\">Logout</button> </div> </template>",
_dynamicNodes : [{"type":"attr","position":[1,9]},{"type":"attr","position":[1,17]},{"type":"attr","position":[1,27]},{"type":"attr","position":[1,29]}],
_observedAttributes :["accountNumber","depositAmount","withdrawAmount","transferAmount","recipient"],

	data : function(){
		return {
			
			// balance: 1000,
			accountNumber:'',
			depositAmount: 0,
			withdrawAmount: 0,
			transferAmount: 0,
			recipient: ''
			
		}		
	},
	action : {

		deposit: function () {
			let amount = parseFloat(document.getElementById('depositAmount').value);
			let accountNumber = document.getElementById('accountNumber').value;
			let token = sessionStorage.getItem("jwtToken");

			console.log(amount, accountNumber);
			if(!token){
				alert("You're not authroized");
			}

			fetch('http://localhost:8080/accounts/deposit', {
				method: 'POST',
				headers: { 
					'Content-Type': 'application/json',
					'Authorization' : `Bearer ${token}`
				 },
				body: JSON.stringify({ amount, accountNumber })	
			})
			.then(response => response.text())
			.then(data => {
				console.log(data);
				alert(data);

				document.getElementById('depositAmount').value = '';
				document.getElementById('accountNumber').value = '';

			})
			.catch(error => alert('Error: ' + error.message));
		},
		
		withdraw: function () {
			let amount = parseFloat(document.getElementById('withdrawAmount').value);
			let accountNumber = document.getElementById('withdrawAccNumber').value;
			let token = sessionStorage.getItem("jwtToken");
			console.log(accountNumber);
			// let amount = parseFloat(this.getData('withdrawAmount'));
			
			fetch('http://localhost:8080/accounts/withdraw', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', 
					'Authorization' : `Bearer ${token}`
				},
				body: JSON.stringify({ amount, accountNumber })
			})
			.then(response => response.text())
			.then(data => {

				alert(data);
				// if (data.success) {
				// 	this.setData('balance', data.newBalance);
				// 	alert('Withdrawal successful');
				// } else {
				// 	alert('Withdrawal failed: ' + data.message);
				// }
				document.getElementById('withdrawAmount').value = '';
				document.getElementById('withdrawAccNumber').value = '';
			})
			.catch(error => alert('Error: ' + error.message));
		},
		
		transfer: function () {
			let fromAccounNumber = document.getElementById('transferAccNumber').value;
			let amount = parseFloat(document.getElementById('transferAmount').value);
			let toAccountNumber = document.getElementById('recipient').value;
			let token = sessionStorage.getItem("jwtToken");	
			fetch('http://localhost:8080/accounts/transfer', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', 
					'Authorization' : `Bearer ${token}`
				},
				body: JSON.stringify({ fromAccounNumber, toAccountNumber, amount })
			
			})
			.then(response => response.text())
			.then(data => {
				alert(data);
				document.getElementById('transferAccNumber').value = '';
				document.getElementById('transferAmount').value = '';
				document.getElementById('recipient').value = '';

			})
			.catch(error => alert('Error: ' + error.message));
		},

		logout: function(){
			sessionStorage.removeItem("jwtToken");
			sessionStorage.clear();
			window.location.replace('/')

			// setTimeout(() => {
			// 	window.history.pushState(null, "", window.location.href);
			// }, 0);
		
			// window.onpopstate = function () {
			// 	window.history.pushState(null, "", window.location.href);
			// };

		}
		
	},
	methods : {

		deposit : {}

		// Functions which can be used as callback in the component.
	}
});
