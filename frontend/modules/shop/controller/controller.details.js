
mastersport.controller('detailsCtrl', function ($scope, prod) {
    console.log("entra details")
    console.log(prod)
    $scope.details = true;

    $scope.product = {};

    angular.forEach(prod[0], function (value, key) {
        $scope.product[key] = value;
    });
});