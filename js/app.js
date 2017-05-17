var costelloApp = angular.module('costelloApp', ['ngRoute']);
costelloApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      title: "Costello The Band - Oklahoma Psychedelic/Garage/Experimental Rock Group",
      templateUrl: '/views/main.html',
      controller:  'HomeController'
    })
    .when('/about',{
      title: "Costello Music - About The Band - Oklahoma Psychedelic/Garage/Experimental",
      templateUrl: '/views/about.html',
      controller: 'HomeController'
    })
    .when('/main',{
      title: "Costello The Band - Oklahoma Psychedelic/Garage/Experimental Rock Group",
      templateUrl: '/views/main.html',
      controller: 'HomeController'
    })
    .when('/contact',{
      title: "Costell The Band - Contact Us",
      templateUrl: '/views/contact_old.html',
      controller: 'HomeController'
    })
    .when('/images',{
      title: "Costello The Band - Gallery",
      templateUrl: '/views/images.html',
      controller: 'HomeController'
    })
    .when('/gallery',{
      title: "Costello The Band - Gallery",
      templateUrl: '/views/gallery.html',
      controller: 'HomeController'
    })
    .otherwise({
      templateUrl: '/404.html'
    })

    $locationProvider.hashPrefix('!')


}]);


costelloApp.controller('HomeController', ['$scope','$location', '$window', function($scope,$location) {

$(document).ready(function(){
  $(".navbar-toggle").click(function(){
    $(".collapse").collapse('toggle');
  });

function createSlick(){ 

  $('.slick-carousel').not('.slick-initialized').slick({
      autoplay: true,
      dots: true,
      infinite: true,
      autoplaySpeed: 3000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
  });
}

  createSlick();
});

}]);