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
    $scope.gems = gem;
    console.log("hi");
});
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