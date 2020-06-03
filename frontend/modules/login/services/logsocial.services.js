mastersport.factory("socialService", ['$rootScope', 'services','localstorageService','toastr','$timeout',
function ($rootScope, services, localstorageService, toastr, $timeout) {
	var service = {};
	service.initialize = initialize;
	service.insertData = insertData;
    return service;

    function initialize(){
        // Initialize Firebase
        var config = {
            apiKey: GHUB_API,
            authDomain: "fw-php-mastersport.firebaseapp.com",
            databaseURL: "https://fw-php-mastersport.firebaseapp.com",
            projectId: "fw-php-mastersport",
            storageBucket: "",
            messagingSenderId: messageSender
        };
        firebase.initializeApp(config);
    }

    function insertData(user,name,email,avatar){
        var sname = name.split(' ');
        var name = sname[0];
        var surname = sname[1];
        services.post('login','log_social',
        {'data_social_net':JSON.stringify({'id_user':user,'user':user,'name':name,'surname':surname,email:email,'avatar':avatar})})
        .then(function(response){
    		localstorageService.setUsers(JSON.parse(response));
    		toastr.success('Inicio de sesion correcto', 'Perfecto',{
                closeButton: true
            });
            $timeout( function(){
	            location.href = '.';
	        }, 3000 );
    	});
    }
}]);

mastersport.factory("GitHubService", ['$rootScope', 'services','socialService', 'toastr', '$timeout',
function ($rootScope, services, socialService, toastr, $timeout) {
	var service = {};
	service.login = login;
    return service;

    function login() {
    	var provider = new firebase.auth.GithubAuthProvider();
        var authService = firebase.auth();

        authService.signInWithPopup(provider).then(function(result) {
            //socialService.insertData(result.user.uid,result.user.displayName,result.user.email,result.user.photoURL);
        })
        .catch(function(error) {
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            var email = error.email;
            console.log(email);
            var credential = error.credential;
            console.log(credential);

            toastr.error('Inicio de sesion incorrecto', 'Error',{
                closeButton: true
            });
            $timeout( function(){
	            location.href = '.';
	        }, 3000 )
        });
    };

}]);

mastersport.factory("googleService", ['$rootScope', 'services','socialService',
function ($rootScope, services,socialService) {
	var service = {};
	service.login = login;
    return service;

    function login() {
    	var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('email');
        var authService = firebase.auth();

        authService.signInWithPopup(provider).then(function(result) {
            socialService.insertData(result.user.uid,result.user.displayName,result.user.email,result.user.photoURL);
        })
        .catch(function(error) {
            console.log('Se ha encontrado un error:', error);
        });
    };

}]);
