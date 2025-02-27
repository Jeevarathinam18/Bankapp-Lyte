Lyte.Component.register("account-page", {
	data : function(){
		return {
	
			accountNumber: Lyte.attr('string'),
			depositAmount: Lyte.attr('number'),
			withdrawAmount: Lyte.attr('number'),
			transferAmount: Lyte.attr('number'),
			recipient: Lyte.attr('string')
			
		}		
	},
	actions : {

		deposit: function () {
			
			let amount = this.getData("depositAmount");
			let accountNumber = this.getData("accountNumber");


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
				this.setData("depositAmount", '');
				this.setData("accountNumber", '');

			})
			.catch(error => alert('Error: ' + error.message));
		},
		
		withdraw: function () {
			let amount = parseFloat(this.getData('withdrawAmount'));
			let accountNumber = this.getData("withdrawAccNumber");

			let token = sessionStorage.getItem("jwtToken");
			console.log(accountNumber);
			
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
				this.setData('withdrawAmount', '');
				this.setData('withdrawAccNumber', '');
			})
			.catch(error => alert('Error: ' + error.message));
		},
		
		transfer: function () {
			let fromAccounNumber = this.getData('transferAccNumber');
			let amount = parseFloat(this.getData('transferAmount'));
			let toAccountNumber = this.getData('recipient');

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
				this.setData('transferAccNumber','');
				this.setData('transferAmount','');
				this.setData('recipient','');

			})
			.catch(error => alert('Error: ' + error.message));
		},

		logout: function(){
			sessionStorage.removeItem("jwtToken");
			sessionStorage.clear();
			Lyte.Router.replaceWith('index');
		}
		
	},
	methods : {

		deposit : {}

		// Functions which can be used as callback in the component.
	}
});
