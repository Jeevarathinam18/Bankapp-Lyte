Lyte.Component.register("welcome-comp",{
	data : function(){
		return {
			features : Lyte.attr("array")
		}
	},
	actions : {
		// Functions for event handling
		navigateToLogin() {
			Lyte.Router.replaceWith('login');
		},
		
		registerAdmin(){
			Lyte.Router.replaceWith('adminRegister')
		}
	},
	methods : {
		// Functions which can be used as callback in the component.
	}
});
