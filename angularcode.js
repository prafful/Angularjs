var app = angular.module("mainApp1", []);
app.controller("myController", implementsController);

function implementsController($scope){
    $scope.myname = "Manoj Kumar";
    $scope.location = "Chennai";
    $scope.counter = 1;
    $scope.friends = ['Ida', 'Anita', 'nazeem','Mani'];    
    $scope.updateMe = function(){
        console.log($scope.myname);
    }
    $scope.editMe = function(received){
        console.log("Editing..." + $scope.friends[received]);
    }
    $scope.addFriend = function(){
        console.log($scope.addMe);
        $scope.friends.push($scope.addMe);
        $scope.addMe = "";
    }
    $scope.angryMe = function(received){
        $scope.friends.splice(received,1);
    }
}



