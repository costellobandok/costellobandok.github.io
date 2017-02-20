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
      templateUrl: '/views/contact_old.html',
      controller: 'HomeController'
    })
    .when('/images',{
      templateUrl: '/views/images.html',
      controller: 'HomeController'
    })
    .when('/gallery',{
      templateUrl: '/views/gallery.html',
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

function createSlick(){ 

  $('.slick-carousel').not('.slick-initialized').slick({
      autoplay: true,
      dots: true,
      infinite: true,
      autoplaySpeed: 1000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
  });
}

  createSlick();
});

}]);