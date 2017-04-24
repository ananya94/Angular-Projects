var app = angular.module("myapp", ['storeProducts']);
app.controller("gemstorectrl",['$scope','$http', function ($scope, $http) {
    $http.get('./products.json').then(function(result){
    $scope.gem = result.data;
    console.log("hi");
    })
}]);