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
        }]
               
    },
    {
        name: "Sasha",
        price: 134.43,
        description: "Earth's friends",
        canPurchase: false,
        soldOut:false,
        images:[{
            full: 'images/gem-04.gif',
            thumb: 'images/gem-04.gif'
        }]
    }
        
];
app.controller("gemstorectrl",function($scope){
    $scope.gems = gem;
    console.log("hi");
})