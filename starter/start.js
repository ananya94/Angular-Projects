var app = angular.module('MyApp',[]);
app.controller('myController', function(){
    alert("Hey Ananya");
});
angular.module('MyApp').directive('example', function(){
    return{
        template:'<div> My example Directive is this! </div>'
    }
});