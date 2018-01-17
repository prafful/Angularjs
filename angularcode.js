var app = angular.module("mainApp1", []);
app.controller("myController", implementsController);

function implementsController($scope){
    $scope.myname = "Manoj Kumar";
    $scope.location = "Chennai";
    $scope.counter = 1;
    $scope.friends = ['Ida', 'Anita', 'nazeem','Mani'];    
    $scope.friends_json = [
                            
                            {
                                name:'Ida',
                                score:"25",
                                dob:"31/08/85",
                                earning:500
                                },   
                                {
                                    name:'Mani',
                                    score:"25",
                                    dob:"25/08/85",
                                    earning:450
                                    },   
                                    {
                                        name:'Ram',
                                        score:"50",
                                        dob:"02/08/85",
                                        earning:300
                                        },   
                                        {
                                            name:'Chenna',
                                            score:"85",
                                            dob:"31/01/85",
                                            earning:900
                                            },     
                             
                        ];   

    $scope.date_sample = new Date();
    $scope.show_score = true;
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

/* 
app.directive("w3TestDirective", function() {
    return {
        restrict : "A",
        template : "<h1>Made by a directive!</h1>"
    };
});
 */

 app.directive("moneyUl", implementDirective1);

 function implementDirective1(){
    return {
        restrict:"E",
        template:`<ul>
        <li>Hello</li>
        <li>World</li>
        </ul>`
    };
 }








