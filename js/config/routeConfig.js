angular.module("smgo").config(function ($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "view/inicial.html",
		controller: 'smgoCtrl'
	})
	
	.when("/login", {
		templateUrl: "view/login.html"
	});
});