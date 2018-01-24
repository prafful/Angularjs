ctsOrderApp.directive("cafetariaCts", ctsCafetariaDirective);

function ctsCafetariaDirective(){

    return {
        restrict: 'E',
        templateUrl:'app/AddVendor/addVendorTemplate.html'
    }

}