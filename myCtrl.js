var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = ["Shoes", "Skirt", "Shirt", "Shorts", "Pants", "Blouse"];
    $scope.AddItems = function () {
        $scope.texterror = "";
        if (!$scope.addMe) {return;}        
        if ($scope.product.indexOf($scope.addMe) == -1) {
            $scope.product.push($scope.addMe);
        } else {
            $scope.texterror = "Item is already in your shopping list.";
        }
    };
    $scope.RemovedItems = function (x) {
        $scope.texterror = "";    
        $scope.product.splice(x, 1);
    };
});