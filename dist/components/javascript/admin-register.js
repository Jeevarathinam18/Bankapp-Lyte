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
