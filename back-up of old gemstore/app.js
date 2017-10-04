var app = angular.module("myapp",[]);
var gem = [{
name: 'Dodecahedron',
price: 2.95,
description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems',
canPurchase: true,
soldOut : false,
images:[{
    full:'images/gem-01.gif',
    thumb: 'images/gem-01.gif'
}]
},
    {
        name: "Pentagonal gems",
        price: 5.95,
        description: "take this for desp",
        canPurchase: true,
        soldOut: false,
        images:[{
            full:'images/gem-02.gif',
            thumb: 'images/gem-02.gif'
           }],
        reviews: [{
                stars: 5,
                body: "I love this product!",
                author: "joe@codingtemple.com"
                },
                {
                stars: 1,
                body: "This product sucks",
                author: "ripal@codingtemple.com"
                }]
    },
    {
        name: "Diamonds",
        price: 190.54,
        description: "Woman's best friend",
        canPurchase:true,
        soldOut: false,
        images:[{
            full:'images/gem-03.gif',
            thumb:'images/gem-03.gif'
        }],
        reviews: [{
                stars: 5,
                body: "I love this product!",
                author: "joe@codingtemple.com"
                },
                {
                stars: 1,
                body: "This product sucks",
                author: "ripal@codingtemple.com"
                }]
               
    },
    {
        name: "Sasha",
        price: 134.43,
        description: "Earth's friends",
        canPurchase: true,
        soldOut:false,
        images:[{
            full: 'images/gem-04.gif',
            thumb: 'images/gem-04.gif'
        }],
        reviews: [{
                stars: 5,
                body: "I love this product!",
                author: "joe@codingtemple.com"
                },
                {
                stars: 1,
                body: "This product sucks",
                author: "ripal@codingtemple.com"
                }]
    }
        
];
app.controller("gemstorectrl",function($scope){
     database.ref("/products/").on('value', function(snapshot) {
        $scope.gem = snapshot.val();
        $scope.$digest();
    console.log($scope.gem);
})});
app.controller("panelcontroller",function($scope){
    $scope.tab=1
    
    $scope.selectTab = function(newTab){
        $scope.tab= newTab;
    }
});
app.controller("ReviewController", function($scope){
    $scope.newReview = {};
    $scope.addReview = function(product) {
            if(!product.reviews){
            product.reviews = [];
                $scope.newReview = {};
            }  
        product.reviews.push($scope.newReview);
        //TODO: Make an API call to send this new review to the server
    }
});
var config = {
    apiKey: "AIzaSyAyGBvhDqHel0ROiFIbQIwGrNB3Wmfhy6o",
    authDomain: "oldgemstore.firebaseapp.com",
    databaseURL: "https://oldgemstore.firebaseio.com",
    projectId: "oldgemstore",
    storageBucket: "oldgemstore.appspot.com",
    messagingSenderId: "14509891191"
  };
firebase.initializeApp(config);
var database = firebase.database();
var storageRef = firebase.storage().ref();

function writeUserData() {
    for (var i = 0; i < gem.length; i++) {
        database.ref("/products/" + i).set({
            productname : gem[i].name,
            price : gem[i].price,
            description : gem[i].description,
            canPurchase : gem[i].canPurchase,
            soldOut : gem[i].soldOut,
            images : gem[i].images
        });
    }
}