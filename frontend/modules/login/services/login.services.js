mastersport.factory("loginService", ['$rootScope', 'services','localstorageService','socialService',
function ( $rootScope, services,localstorageService) {
  
	var service = {};
	service.login = login;
	service.logout = logout;
    return service;

    function login() {
        var token = localstorageService.getUsers();

        if (token) {
            services.get('login', 'type_user',token).then(function (response) {
                //console.log(response[0].type);
            
                if (response[0].type === "Client") {
                    //console.log("Aqui jeje")
                    $rootScope.login = false
                    $rootScope.logout = true
                    $rootScope.pass = true
	            } else if (response[0].type === "admin") {
                    $rootScope.login = false
                    $rootScope.logout = true
                    $rootScope.pass = true
	            }else{
                    $rootScope.login = false
                    $rootScope.logout = true
                    $rootScope.pass = false
                }
            });
        } else {

            $rootScope.login = true
            $rootScope.logout = false
            $rootScope.pass = false
            
        }
    }//end_login

    function logout() {
        console.log("entra")
        localstorageService.clearUsers();
        
    }//end_logout
}]);
