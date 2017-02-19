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

weatherApp.service('cityService', [function (city) {

  var self = this;

  this.city = 'No city selected!';

}])

weatherApp.controller('homeCtrl', ['$scope', function ($scope) {

  $scope.city = cityService.city;

  $scope.$watch('city', function(){

    cityService.city = $scope.city;
  })

}])

weatherApp.controller('forecastCtrl', ['$scope', function ($scope) {

  $scope.city = cityService.city;

}])
