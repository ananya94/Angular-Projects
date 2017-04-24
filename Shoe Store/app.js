var app = angular.module("myapp",['shoeStore']);
app.controller("gemstorectrl",function($scope){
    $scope.gems = gem;
    console.log("hi");
});


var gem = [{
name: 'Pumps',
price: 150.99,
description: "6in heels with sparkle backs",
canPurchase: true,
soldOut : false,
images:[{
    full:'images/shoe-01.jpg',
    thumb: 'images/shoe-01.jpg'
}],
reviews: [{
                stars: 5,
                body: "I love this Shoe!",
                author: "joe@codingtemple.com"
                },
                {
                stars: 1,
                body: "This shoe sucks",
                author: "ripal@codingtemple.com"
                }]
               
},
    {
        name: "Straps",
        price:75,
        description: "5in heels with straps until the ankle " ,
        canPurchase: true,
        soldOut: false,
        images:[{
            full:'images/shoe-02.jpg',
            thumb: 'images/shoe-02.jpg'
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
        name: "Bows",
        price: 54.55,
        description: "Comfortable 3in heels with bows",
        canPurchase:true,
        soldOut: false,
        images:[{
            full:'images/shoe-03.jpg',
            thumb:'images/shoe-03.jpg'
        }],
        reviews: [{
                stars: 5,
                body: "I love this Shoe!",
                author: "joe@codingtemple.com"
                },
                {
                stars: 1,
                body: "This shoe sucks",
                author: "ripal@codingtemple.com"
                }]
               
    },
    {
        name: "Maroon cover toes",
        price: 85.55,
        description: "Marron pump tops, covers toes",
        canPurchase: true,
        soldOut:false,
        images:[{
            full: 'images/shoe-04.jpg',
            thumb: 'images/shoe-04.jpg'
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