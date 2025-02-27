Lyte.Component.register("welcome-comp",{
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
