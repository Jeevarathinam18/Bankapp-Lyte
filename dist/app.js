// Lyte.Router.configureDefaults({baseURL:'',history : "html5"});

Lyte.Router.configureRoutes(function(){
	this.route('index',{path:'/'});
	
	this.route('login', {path: "/auth/login"})

	this.route("account", { path: "/account" }, function(){
		this.route("deposit", { path: "/deposit" });  // /account/deposit
		this.route("withdraw", { path: "/withdraw" }); // /account/withdraw
		this.route("balance", { path: "/balance" }); // /account/balance
		this.route("transactions", { path: "/transactions" }); // /account/transactions
		this.route("download-csv", { path: "/download" });
});
})

// Lyte.Router.configureRoutes(function(){
// 	this.route('account', {path:'/account'});
// });

// Lyte.Router.configureRoutes(function(){
// 	this.route('login', {path:'/auth/login'});
// });

Lyte.Router.beforeRouteTransition = function() {
	//console.log('before Route Change');
}

Lyte.Router.afterRouteTransition = function() {
	//console.log('after Route Change');
}


Lyte.Router.registerRoute('index',{
// 	getResources  : function (paramsObject ){ 
//         /* View related files should be returned as resources(HTML, CSS, components etc). It will be available before 'renderTemplate' hook. */
// },
// getDependencies  : function (paramsObject ){ 
//         /* Files returned as dependencies will be downloaded at once and will be available before 'beforeModel' hook. */
// },
// beforeModel  : function (paramsObject ){ 
//         /* Pre processing stage where you can decide whether to abort/redirect the current transition(e.g Permission check). */
// },
	model : function()	{
		return {
			features : [
				{module : 'Router',url : 'http://lyte/2.0/doc/route/introduction'},
				{module : 'Components',url : 'http://lyte/2.0/doc/components/introduction'},
				{module : 'Data',url : 'http://lyte/2.0/doc/data/introduction'},
				{module : 'CLI',url : 'http://lyte/2.0/doc/cli/introduction'}
			]
		}
				
	},
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
	renderTemplate : function()	{
		return {outlet : "#outlet",component : "welcome-comp"}
	}
// afterRender  : function (model, paramsObject ){ 
//         /* Post processing of rendered page. */
// },
// beforeExit  : function (model, paramsObject ){ 
//         /* Will be invoked before a route is removed from view. */
// },
// didDestroy  : function (model, paramsObject ){ 
//         /* Will be invoked when a route is completly destroyed(remove residues of route. eg: file cache removal). */
// },
// actions  : { 
//        onBeforeLoad  : function (paramsObject ){ 
//                 /* Triggered once route transition starts. */
//         },
//        onError  : function (error, pausedTrans, paramsObject ){ 
//                 /* Triggered by error on file load or on data request. */
//         },
//        willTransition  : function (transition ){ 
//                 /* Triggered before a transition is going to change. */
//         },
//        didTransition  : function (paramsObject ){ 
//                 /* Triggered after completion of transition. */
//         },
// }	
});

Lyte.Router.registerRoute("account",{
// 	getResources  : function (paramsObject ){ 
//         /* View related files should be returned as resources(HTML, CSS, components etc). It will be available before 'renderTemplate' hook. */
// },
// getDependencies  : function (paramsObject ){ 
//         /* Files returned as dependencies will be downloaded at once and will be available before 'beforeModel' hook. */
// },
// beforeModel  : function (paramsObject ){ 
//         /* Pre processing stage where you can decide whether to abort/redirect the current transition(e.g Permission check). */
// },
// model  : function (paramsObject ){ 
//         /* Initiate data request that are necessary for the current page. */
// },
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
renderTemplate  : function (model, paramsObject ){ 
    return {outlet : "#outlet",component : "account-page"}
        /* return where and what to render.(container and component/HTML) */
},
// afterRender  : function (model, paramsObject ){ 
//         /* Post processing of rendered page. */
// },
// beforeExit  : function (model, paramsObject ){ 
//         /* Will be invoked before a route is removed from view. */
// },
// didDestroy  : function (model, paramsObject ){ 
//         /* Will be invoked when a route is completly destroyed(remove residues of route. eg: file cache removal). */
// },
// actions  : { 
//        onBeforeLoad  : function (paramsObject ){ 
//                 /* Triggered once route transition starts. */
//         },
//        onError  : function (error, pausedTrans, paramsObject ){ 
//                 /* Triggered by error on file load or on data request. */
//         },
//        willTransition  : function (transition ){ 
//                 /* Triggered before a transition is going to change. */
//         },
//        didTransition  : function (paramsObject ){ 
//                 /* Triggered after completion of transition. */
//         },
// }
});

Lyte.Router.registerRoute("login",{
// 	getResources  : function (paramsObject ){ 
//         /* View related files should be returned as resources(HTML, CSS, components etc). It will be available before 'renderTemplate' hook. */
// },
// getDependencies  : function (paramsObject ){ 
//         /* Files returned as dependencies will be downloaded at once and will be available before 'beforeModel' hook. */
// },
// beforeModel  : function (paramsObject ){ 
//         /* Pre processing stage where you can decide whether to abort/redirect the current transition(e.g Permission check). */
// },
// model  : function (paramsObject ){ 
//         /* Initiate data request that are necessary for the current page. */
// },
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
renderTemplate  : function (model, paramsObject ){ 
    
    return {outlet : "#login",component : "login-page"}
        /* return where and what to render.(container and component/HTML) */
},
// afterRender  : function (model, paramsObject ){ 
//         /* Post processing of rendered page. */
// },
// beforeExit  : function (model, paramsObject ){ 
//         /* Will be invoked before a route is removed from view. */
// },
// didDestroy  : function (model, paramsObject ){ 
//         /* Will be invoked when a route is completly destroyed(remove residues of route. eg: file cache removal). */
// },
// actions  : { 
//        onBeforeLoad  : function (paramsObject ){ 
//                 /* Triggered once route transition starts. */
//         },
//        onError  : function (error, pausedTrans, paramsObject ){ 
//                 /* Triggered by error on file load or on data request. */
//         },
//        willTransition  : function (transition ){ 
//                 /* Triggered before a transition is going to change. */
//         },
//        didTransition  : function (paramsObject ){ 
//                 /* Triggered after completion of transition. */
//         },
// }
});

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

Lyte.Component.register("dashboard-page", {
_template:"<template tag-name=\"dashboard-page\"> </template>",
_dynamicNodes : [],

	data : function(){
		return {

		}		
	},
	actions : {
		// Functions for event handling
	},
	methods : {
		// Functions which can be used as callback in the component.
	}
});

Lyte.Component.register("admin-register", {
_template:"<template tag-name=\"admin-register\"> <h2>Admin Registration</h2> <input type=\"text\" placeholder=\"Username\" lbind:value=\"username\"> <input type=\"email\" placeholder=\"Email\" lbind:value=\"email\"> <input type=\"password\" placeholder=\"Password\" lbind:value=\"password\"> <button onclick=\"{{action('registerAdmin')}}\">Register Admin</button> <button onclick=\"registerAdmin\">Register Admin</button> </template>",
_dynamicNodes : [{"type":"attr","position":[9]}],

	data : function(){
		return {

		}		
	},
	actions : {
		// Functions for event handling
	},
	methods : {
		// Functions which can be used as callback in the component.
	}
});

Lyte.Component.register("login-page", {
_template:"<template tag-name=\"login-page\"> <div> <h2>Login</h2> <input type=\"text\" lyte-bind=\"username\" placeholder=\"Username\"> <input type=\"password\" lyte-bind=\"password\" placeholder=\"Password\"> <button lyte-click=\"login\">Login</button> <template is=\"if\" value=\"errorMessage\"><template case=\"true\"><p>{{errorMessage}}</p></template></template> </div> </template>",
_dynamicNodes : [{"type":"if","position":[1,9],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[0,0]}]}},"default":{}}],
_observedAttributes :["username","password"],

	data : function(){
		return {
            username: Lyte.attr("string"),
            password: Lyte.attr("string")
        };	
	},

	actions : {
		// Functions for event handling
		// loginUser() {
		// 	// Lyte.Router.transitionTo('logn');
		// 	let username = document.getElementById("username").value;
		// 	let password = document.getElementById("password").value;

		// 	this.setData("username", username);
		// 	this.setData("password", password);

		// 	console.log(username, password);
		// 	// let record = store.createRecord( "user" ,{username : username , password:password });
		// 	// record.$.save();

		// 	this.executeMethod("login");
		// }

		//---

		login() {
			alert("FIRED")
            let self = this;
			console.log("SELF ", self);
            Lyte.Service.request({
                method: 'POST',
                url: 'http://localhost:8080/auth/login',
                headers: {'Content-Type': 'application/json'},
                body: {
                    username: self.getData('username'),
                    password: self.getData('password')
                }
            }).then(function(response) {
                if (response.code === 200) {
                    localStorage.setItem('token', response.data.token);
                    window.location.href = '/accounts';
                } else {
                    self.setData('errorMessage', 'Invalid credentials');
                }
            }).catch(function(error) {
                self.setData('errorMessage', 'Login failed');
            });
        }
	},
	methods : {
		// Functions which can be used as callback in the component.
		login:function(){

			let payload = {
				username : this.data.username,
				password : this.data.password
			}
			console.log("PAY", payload);

			fetch("http://localhost:8080/auth/login", { 	
				method: "POST",
				//headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
			})
			.then(response => {
				if (!response.ok) {
					throw new Error("Login failed");
				}
				return response.json();
			})
			.then(data => {
				console.log("Response:", data);
				
				if (data.token) {
					sessionStorage.setItem("jwtToken", data.token);
				}
			
				Lyte.Router.transitionTo('account');
			
			})
			.catch(error => {
				console.error("Login Error:", error);
				alert("Invalid credentials. Please try again.");
			});
			

		}
	}
});

Lyte.Component.register("welcome-comp",{
_template:"<template tag-name=\"welcome-comp\"> <h1>One stop solution for all your banking requirement</h1> <button onclick=\"{{action('navigateToLogin')}}\">Login</button> <button onclick=\"{{action('registerUser')}}\">Register</button> </template>",
_dynamicNodes : [{"type":"attr","position":[3]},{"type":"attr","position":[5]}],
_observedAttributes :["features"],

	data : function(){
		return {
			features : Lyte.attr("array")
		}
	},
	actions : {
		// Functions for event handling
		navigateToLogin() {
			Lyte.Router.transitionTo('login');
		},
		
		registerAdmin(){
			Lyte.Router.transitionTo('adminRegister')
		}
	},
	methods : {
		// Functions which can be used as callback in the component.
	}
});

store.registerModel("user",{
    
    "userName" : Lyte.attr("string"),
    "passWord" : Lyte.attr("string")

});

store.registerAdapter("user", {
	host:"http://localhost:8080/",
    
    // headersForRequest : function( type ,queryParams ,customData, actionName, key ){
    //     // var headers = this.$super.headersForRequest( headers );
    //     // headers.CONTENT_TYPE =  "application/json" 
    //     return {
    //     "Content-Type" : "application/json"
    //     }
   
    //   }
});

