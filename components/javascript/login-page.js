	Lyte.Component.register("login-page", {
		data : function(){
			return {
				username: Lyte.attr("string"),
				password: Lyte.attr("string")
			};	
		},

		actions : {
		
			login() {
				
				let username = this.getData("username");
				let password = this.getData("password");

				if(!username && !password){
					alert("Please Enter Username and Password");
					return;

				}else if(!username){
					alert("Please Enter Username");
					return;

				}else if(!password){
					alert("Please enter Password");
					return;
				}
				
				console.log("here");
				this.executeMethod("login");
			}

		},

		methods : {

			login : function(){
			let payload = {
				"username": this.getData('username'),
				"password": this.getData('password')

			}
			console.log("PAYLOAD ", payload);
			fetch("http://localhost:8080/auth/login", { 	
				method: "POST",
				headers: { "Content-Type": "application/json" },
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

			Lyte.Router.replaceWith('account');

			})
			.catch(error => {
				console.error("Login Error:", error);
				alert("Invalid credentials. Please try again.");
			});

			// $L.ajax({
			
			// 	method: "POST",
			// 	url: "http://localhost:8080/auth/login",
			// 	headers: { "Content-Type": "application/json" },
			// 	dataType: "json",  // Important! Ensures data is sent as JSON
			// 	data: JSON.stringify(payload),
			
			// 	success: function(response) {
			// 		console.log("Success:", response);
			// 	},
			// 	error: function(response) {
			// 		console.log("Error:", response); // Fixed error callback
			// 	}
			// });

		}

		}
	});
