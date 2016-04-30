angular.module("smgo").config(function ($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "view/inicial.html"
	})
	
	.when("/login", {
		templateUrl: "view/login.html"
	});
});