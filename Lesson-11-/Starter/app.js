var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

  $scope.name = 'John Doe'
  $scope.ocupation = 'Coder'

  $scope.getname = function() {
    return 'John Doe'
  }

  $scope.getname();

  console.log($scope)

});
