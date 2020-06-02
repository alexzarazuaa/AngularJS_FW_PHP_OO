mastersport.factory("loginService", ['$location', '$rootScope', 'services','localstorageService','socialService',
function ($location, $rootScope, services,localstorageService, socialService) {
	var service = {};
	service.login = login;
	service.logout = logout;
    return service;

    function login() {
    	var token = localstorageService.getUsers();
        if (token) {
            services.get('login', 'typeuser',token).then(function (response) {
                if (response.type === "user") {
                    $rootScope.login = false
                    $rootScope.logout = true
	            } else if (response.type === "admin") {
                    $rootScope.login = false
                    $rootScope.logout = true
	            }else{
                    $rootScope.login = true
                    $rootScope.logout = false
                }
            });
        } else {

            $rootScope.login = true
            $rootScope.logout = false
            
        }
    }

    function logout() {
    	localstorageService.clearUsers();
    }
}]);
