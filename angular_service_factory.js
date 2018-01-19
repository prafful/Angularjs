var app = angular.module("sad", []);
app.controller("happy", additionController);

function additionController($scope, additionService){
    $scope.addNumberForm = function(){
        $scope.totalAdd = additionService.addNumber($scope.number1, $scope.number2);
    }
    $scope.multiplyNumberForm = function(){
        $scope.totalMultiply = additionService.multiplyNumber($scope.number1, $scope.number2);
    }
}

app.service("additionService", additionServiceFunction);
function additionServiceFunction(){
    var addition = {};
    addition.addNumber = function(number1, number2){
        return number1 + number2;
    }

    addition.multiplyNumber =function(number1, number2){
        return number1 * number2;
    } 
    return addition;
}