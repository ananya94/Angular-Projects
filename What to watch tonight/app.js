var app = angular.module("myapp",[])
app.controller("randomMovieController", function($scope){
  $scope.randomMovie = function($https){
      var id = Math.floor(Math.random() * 1000);
      var movie = "https://api.themoviedb.org/3/movie/"+id+"?api_key=42b9c854689ec715d21031fadea775f2";
      console.log(id);
      console.log(movie);
      // $https.get(movie).then(function($scope,responce){
      //   $scope.movieData = responce.data
      //   console.log($scope.movieData);
      // })
  }
})
