ctsOrderApp.controller("cafetariaCtsController", ctsCafeController);

function ctsCafeController($scope, ctsCafeService){

   /*  $scope.formContent = [
        {
            "emailAddress":"prraful@gmail.com", 
            "description":"Making AngularJs App Scalable"
        }
    ]; */

        $scope.formContent = ctsCafeService.data;
        console.log($scope.formContent)
}
