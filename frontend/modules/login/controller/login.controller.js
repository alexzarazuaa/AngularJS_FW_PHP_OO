mastersport.controller('loginCtrl', function ($scope, services, toastr,localstorageService,loginService,googleService,GitHubService) {

    $scope.login = function () {
        //console.log($scope.logindata);
        services.put('login', 'login_user', { data: $scope.logindata })
            .then(function (response) {
                //console.log(response.response)
                var info = response.response;
				if (response.response == info ) {
                    localstorageService.setUsers(response.token_jwt);
                    toastr.success("You are now logged.", "Logged In");
                    loginService.login();
                    location.href = "#/";
                }else{
                    toastr.success("You are not logged.", "Erorr");
                    location.href = "/login";
                }
            })

    }//end_function


    $scope.logGoogle = function(){
        console.log("click google")

		googleService.login();
    };
    
    $scope.Github = function(){
        console.log("github")
        GitHubService.login();
    };


})