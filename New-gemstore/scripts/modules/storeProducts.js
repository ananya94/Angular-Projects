angular.module("storeProducts", []);
angular.module("storeProducts").directive("gemPanels", function () {
        return {
            restrict: 'A',
            templateUrl: 'templates/store-panels.html',
            controller:['$scope', function($scope) {
                $scope.tab = 1;
                $scope.selectTab = function (newTab) {
                    $scope.tab = newTab;
                }
            }
                       ]
}
});
angular.module("storeProducts").directive("myReview", function () {
        return {
            restrict: 'A',
            templateUrl: 'templates/review.html',
            controller: ['$scope', function($scope){
                $scope.newReview = {};
                $scope.addReview = function (products){
                    if (!products.reviews) {
                        products.reviews = [];
                        $scope.newReview = {};
                        }
            products.reviews.push($scope.newReview);
        //TODO: Make an API call to send this new review to the server
                    }       
            }
            ]
        }
});
