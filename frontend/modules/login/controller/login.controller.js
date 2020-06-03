mastersport.controller('loginCtrl', function ($scope, services, toastr, $rootScope,localstorageService,loginService) {

    console.log("Login");

    $scope.login = function () {
        // console.log("entra en el login");
        console.log($scope.logindata);
        services.put('login', 'login_user', { data: $scope.logindata })
            .then(function (response) {
                //console.log(response)
                console.log(response.response)
                //console.log(response.token_jwt)
                var info = response.response;
				if (response.response == info ) {
                    console.log("entra");
                    localstorageService.setUsers(response.token_jwt);
                    toastr.success("You are now logged.", "Logged In");
                    loginService.login();
                    location.href = "#/";
                }
            })

    }//end_function


})