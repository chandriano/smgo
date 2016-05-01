angular.module("smgo", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "view/inicial.html",
      controller: 'smgoCtrl'
    })
    .when("/login", {
      templateUrl: "view/login.html"
    });
  })
  .controller("smgoCtrl", ['$scope',
    function smgoCtrl ($scope) {
    }
  ]);