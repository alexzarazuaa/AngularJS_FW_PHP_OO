mastersport.factory("localstorageService", function () { 
	var service = {};
	service.getUsers = getUsers;
    service.setUsers = setUsers;
    service.clearUsers = clearUsers;
	return service;

    function getUsers() {
      
            
            localStorage.getItem('token');
        
      
    }
    
    function setUsers(token) {
       
        localStorage.setItem('token', token);
    }
    
    function clearUsers() {
        localStorage.removeItem('token');
    }

});