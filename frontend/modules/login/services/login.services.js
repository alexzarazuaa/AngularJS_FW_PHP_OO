mastersport.factory("loginService", ['$rootScope', 'services','localstorageService','socialService',
function ( $rootScope, services,localstorageService) {
  
	var service = {};
	service.login = login;
	service.logout = logout;
    return service;

    function login() {
        //var token = localstorageService.getUsers();
        var token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            services.get('login', 'type_user',token).then(function (response) {
                //console.log(response[0].type);
            
                if (response[0].type === "Client") {
                   // console.log("Aqui jeje")
                    $rootScope.login = false
                    $rootScope.pass = true
	            } else if (response[0].type === "Admin") {
                    $rootScope.login = false
                    $rootScope.pass = true
	            }else{
                    $rootScope.login = false
                    $rootScope.pass = true
                }
            });
        } else {

            $rootScope.login = true
            $rootScope.pass = false
            
        }
    }//end_login

    function logout(localstorageService) {
        localstorageService.clearUsers();
    }//end_logout
    
}]);