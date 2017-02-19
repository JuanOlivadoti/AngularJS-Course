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

  .when('/forecast/:days', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecastCtrl'
  })

}])

//SERVICE
weatherApp.service('cityService', [function (cityService) {

  this.city = 'Madrid, MD';

}])

//CONTROLLERS

weatherApp.controller('homeCtrl', ['$scope', 'cityService', function ($scope, cityService) {

  $scope.city = cityService.city;

  $scope.$watch('city', function(){

    cityService.city = $scope.city;
  })

}])

weatherApp.controller('forecastCtrl', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {

  $scope.city = cityService.city;

  $scope.days = $routeParams.days || '2';

  $scope.weatherAPI = $resource(
    'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=035d73093194fa81ae9cea9ee815c98a',
    { callback: "JSON_CALLBACK" } ,
    { get: { method: 'JSONP'}});

  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

  $scope.convertToCelsius = function(degK) {
    return Math.round(degK - 273.15);
  }

  $scope.convertToDate = function(dt) {
    console.log(dt);
    return new Date(dt * 1000);
  }

  $scope.getIcon =function(ico) {
    console.log(ico);
    return ico;
  }

}])

//DIRECTIVES

weatherApp.directive('daybox', [function () {
  return {
    templateUrl: 'directives/daybox.html',
    replace: true,

    scope: {

      item: "=",
      convertToStandard: "&",
      convertToDate: "&",
      dateFormatter: "@",

    }

  };
}])
