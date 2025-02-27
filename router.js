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

