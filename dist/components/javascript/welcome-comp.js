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
