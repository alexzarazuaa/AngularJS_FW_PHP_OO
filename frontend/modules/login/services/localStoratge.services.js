mastersport.factory("localstorageService", function () { 
	var service = {};
	service.getUsers = getUsers;
    service.setUsers = setUsers;
    service.clearUsers = clearUsers;
	return service;

    function getUsers() {
		if ((!localStorage.token) || (localStorage.token == 'undefined')) {
			
        }
		return localStorage.token;
	}

    
    function setUsers(token) {

        localStorage.setItem('token', token);
    }
    
    function clearUsers() {

        localStorage.removeItem('token');
    
    }

});
