var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {

  $routeProvider

    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })

    .when('/second', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })

    .when('/second/:num', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })

}])

myApp.service('nameService', function(){

  var self = this;

  this.name = 'John Doe';

  this.namelength = function() {

    return self.name.length;

  };

});

myApp.controller('mainController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {

  $scope.person = {
    name: 'John Doe',
    address: '555 Main St., New York, NY 11111'
  }

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {

  $scope.person = {
    name: 'Juan Doe',
    address: '555 Main St., New Jersey, NY 22222'
  }

}]);

myApp.directive('searchResult', [function () {
  return {
    restrict: 'AECM',
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
      personName: '@',
      personAddress: '@'
    }
  };
}])
