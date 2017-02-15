var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $http.get('//pokeapi.co/api/v2/pokemon/')
      .then(function (response){
        $scope.rules = response.data.results;
      })

}]);
