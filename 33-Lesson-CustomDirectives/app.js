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


}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {



}]);

myApp.directive('searchResult', [function () {
  return {
    template: `
        <a href="#" class="list-group-item">
          <h4 class="list-group-item-heading">John Doe</h4>
          <p class="list-group-item-text">
            555 Main St., New York, NY 11111
          </p>
        </a>
        `
  };
}])
