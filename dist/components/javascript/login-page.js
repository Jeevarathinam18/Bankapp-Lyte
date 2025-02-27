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
