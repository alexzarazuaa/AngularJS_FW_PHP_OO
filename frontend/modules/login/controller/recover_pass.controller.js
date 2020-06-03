mastersport.controller('recoverCtrl', function ($scope, services, toastr, $rootScope,localstorageService) {

    console.log("RECOVER PASS")
    $scope.changePassword = function(){
        console.log("fa click");
        //token = localstorageService.getUsers();
        console.log($scope.recoverdata);
        console.log(localstorageService.getUsers());
        services.put('login', 'change_password', { data: $scope.recoverdata , token : localstorageService.getUsers() })
        .then(function (response) {
            console.log(response);
        })
    }



})