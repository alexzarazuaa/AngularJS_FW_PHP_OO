mastersport.factory("loginService", ['$rootScope', 'services','localstorageService','socialService',
function ( $rootScope, services,localstorageService) {
  
	var service = {};
	service.login = login;
	service.logout = logout;
    return service;

    function login() {
        //var token = localstorageService.getUsers();
        var token = localStorage.getItem('token');
        if (token) {
            services.get('login', 'type_user',token).then(function (response) {
                //console.log(response[0].type);
            
                if (response[0].type === "Client") {
                    console.log("Aqui jeje")
                    $rootScope.login = false
                    $rootScope.logout = true
	            } else if (response[0].type === "admin") {
                    $rootScope.login = false
                    $rootScope.logout = true
	            }else{
                    $rootScope.login = false
                    $rootScope.logout = true
                }
            });
        } else {

            $rootScope.login = true
            $rootScope.logout = false
            
        }
    }//end_login

    function logout() {
        localstorageService.clearUsers();
        
    }//end_logout
}]);
