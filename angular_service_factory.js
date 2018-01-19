var app = angular.module("sad", []);


app.service("additionService", additionServiceFunction);
function additionServiceFunction($http){
    var addition = {};
    addition.addNumber = function(number1, number2){
        return number1 + number2;
    }

    addition.multiplyNumber =function(number1, number2){
        return number1 * number2;
    }
    
    addition.getRemoteData = function(){
        console.log("Inside get remote data")

        var remoteData = $http({
            method:"GET", 
            url:"https://jsonplaceholder.typicode.com/users",
            async:false
        }).then(onSuccess, onFailure);
        function onSuccess(response){
            console.log("success..." + response.data);
            return response.data;
        }
        function onFailure(error){
            console.log("failure..." + error.statusText);
            return error.statusText;
        }
        return remoteData;
    }
    console.log("returning..." + addition);
    return addition;
}


app.controller("happy", additionController);

function additionController($scope, additionService, $http){
    $scope.remoteData = null;

    $scope.addNumberForm = function(){
        $scope.totalAdd = additionService.addNumber($scope.number1, $scope.number2);
    }
    $scope.multiplyNumberForm = function(){
        $scope.totalMultiply = additionService.multiplyNumber($scope.number1, $scope.number2);
    }

    $scope.getRemoteData = function(){
        /* additionService.getRemoteData().then(function(response){
            $scope.remoteData = response;
        }); */
      additionService.getRemoteData().then(function(data){
        $scope.remoteData = data;
        console.log("i am something..." + $scope.remoteData);
    });
       
        console.log("who am i..." + $scope.remoteData);
    }
}