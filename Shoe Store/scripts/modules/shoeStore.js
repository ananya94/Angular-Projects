angular.module("shoeStore", []);
angular.module("shoeStore").directive("shoePanels", function(){
    return{
        restrict: 'A',
        templateUrl:'/templates/shoe-store-panels.html',
        controller:['$scope', function($scope)  {
            $scope.tab=1
            $scope.selectTab = function(newTab){
            $scope.tab= newTab;
            }
        }
        ]
    }
});
angular.module("shoeStore").directive("shoeReview", function(){
    return{
        restrict: 'A',
        templateUrl: '/templates/review.html',
        controller: ['$scope', function($scope){
            $scope.newReview = {};
            $scope.addReview = function(products) {
            if(!products.reviews){
                products.reviews = [];
                $scope.newReview = {};
            }  
        products.reviews.push($scope.newReview);
        //TODO: Make an API call to send this new review to the server
        }
        }]
    }
});