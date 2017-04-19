var app = angular.module("myapp",[]);
app.controller("Catsctrl",function($scope,$http){
    $scope.x = [];
    window.t = $http;
    $scope.sample1 = function($scope){ 
       $http.get(
           'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&format=json&tags=puppies'
       ).then(function(response) {
           data = JSON.parse(response.data.substring(1, response.data.length - 1));
           console.log(data);
           for(var i=0;i<data.items.length; i++){
                $scope.x.append(data.items[i]);
           }
           console.log($scope.x);
       });
    }
});