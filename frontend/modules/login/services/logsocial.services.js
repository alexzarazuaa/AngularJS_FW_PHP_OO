mastersport.factory("socialService", ['$rootScope', 'services', 'localstorageService', 'toastr', '$timeout',
    function ($rootScope, services, localstorageService, toastr, $timeout) {
        var service = {};
        service.initialize = initialize;
        service.insertData = insertData;
        return service;

        function initialize() {
            // Initialize Firebase
            var firebaseConfig = {
                apiKey: apikey,
                authDomain: AuthDomain,
                databaseURL: databaseURL,
                projectId: projectId,
                storageBucket: storageBucket ,
                messagingSenderId: messagingSenderId,
                appId: appId,
                
              };
              // Initialize Firebase
              firebase.initializeApp(firebaseConfig);
        }


        function insertData(nickname, user_email, avatar) {
            services.post('login', 'social_login',
                { 'data': JSON.stringify({ 'userid': nickname, 'user_email': user_email, 'nickname': nickname, 'avatar': avatar }) })
                .then(function (response) {
                    console.log(response);
                    localstorageService.setUsers(JSON.parse(response));
                    toastr.success('Inicio de sesion correcto', 'Perfecto', {
                        closeButton: true
                    });
                    $timeout(function () {
                        location.href = '.';
                    }, 3000);
                });
        }

    }]);

mastersport.factory("GitHubService", ['$rootScope', 'services', 'socialService', 'toastr', '$timeout',
    function ($rootScope, services, socialService, toastr, $timeout) {
        //console.log("entra ghub");
        var service = {};
        service.login = login;
        return service;

        function login() {
            var provider = new firebase.auth.GithubAuthProvider();
            var authService = firebase.auth();

            authService.signInWithPopup(provider).then(function (result) {
                socialService.insertData(result.user.uid, result.user.displayName, result.user.email, result.user.photoURL);
            })
                .catch(function (error) {
                    var errorCode = error.code;
                    console.log(errorCode);
                    var errorMessage = error.message;
                    console.log(errorMessage);
                    var email = error.email;
                    console.log(email);
                    var credential = error.credential;
                    console.log(credential);

                    toastr.error('Inicio de sesion incorrecto', 'Error', {
                        closeButton: true
                    });
                    $timeout(function () {
                        location.href = '.';
                    }, 3000)
                });
        };

    }]);

mastersport.factory("googleService", ['$rootScope', 'services', 'socialService',
    function ($rootScope, services, socialService) {
        var service = {};
        service.login = login;
        return service;

        function login() {
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('email');

            var authService = firebase.auth();

            authService.signInWithPopup(provider).then(function (result) {
                socialService.insertData(result.user.uid, result.user.displayName, result.user.email, result.user.photoURL);
            })
                .catch(function (error) {
                    console.log('Se ha encontrado un error:', error);
                });
        };

    }]);
