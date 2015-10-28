var costelloApp = angular.module('costelloApp', ['ngRoute']);


costelloApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: '/home.html',
      controller:  'HomeController'
    })
    .when('/splash',{
      templateUrl: '/views/splash.html',
      controller: 'HomeController'
    })
    .when('/main',{
      templateUrl: '/views/main.html',
      controller: 'HomeController'
    })
    .when('/contact',{
      templateUrl: '/views/contact.html',
      controller: 'HomeController'
    })
    .otherwise({
      templateUrl: '/404.html'
    })

    $locationProvider.hashPrefix('!')


}]);


costelloApp.controller('HomeController', ['$scope','$location', function($scope,$location) {

  console.log($location.path());

}]);