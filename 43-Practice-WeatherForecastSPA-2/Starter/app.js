//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(['$routeProvider', function ($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeCtrl'
  })

  .when('/forecast', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecastCtrl'
  })

}])

//SERVICE
weatherApp.service('cityService', [function (cityService) {


  this.city = 'Madrid, MD';

}])

weatherApp.controller('homeCtrl', ['$scope', 'cityService', function ($scope, cityService) {

  $scope.city = cityService.city;

  $scope.$watch('city', function(){

    cityService.city = $scope.city;
  })

}])

weatherApp.controller('forecastCtrl', ['$scope', 'cityService', function ($scope, cityService) {

  $scope.city = cityService.city;

}])
