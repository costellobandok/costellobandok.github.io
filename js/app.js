var costelloApp = angular.module('costelloApp', ['ngRoute']);


costelloApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: '/views/main.html',
      controller:  'HomeController'
    })
    .when('/about',{
      templateUrl: '/views/about.html',
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
    .when('/images',{
      templateUrl: '/views/images.html',
      controller: 'HomeController'
    })
    .otherwise({
      templateUrl: '/404.html'
    })

    $locationProvider.hashPrefix('!')


}]);


costelloApp.controller('HomeController', ['$scope','$location', function($scope,$location) {

$(document).ready(function(){
    $(".navbar-toggle").click(function(){
        $(".collapse").collapse('toggle');


    });

    $('.carousel').carousel()

});

  console.log($location.path());

}]);