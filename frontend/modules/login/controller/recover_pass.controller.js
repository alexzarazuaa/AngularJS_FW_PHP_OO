mastersport.controller('recoverCtrl', function ($scope, services, toastr,$route,$timeout) {

    $scope.recoverPassword = function(){//functionSendMail

        var mail = $scope.recoverData.email
        services.post('login','recover_mail',{'data':mail})
            .then(function (response) {
            if (response  ===  "ERROR") {
                toastr.error("THIS USER NAME IS ALREADY IN USE", "Email was not sent.");
            }else{
                toastr.success('Revisa tu Correo Electrónico', 'Mensaje Enviado');
                    location.href = '#/';
            
            }
        });

    }//end_sendmail

    $scope.changePassword  = function(){   //functionChangePassword
        console.log("entra cambio password")

        console.log($scope.changedata.password);
        // console.log(JSON.stringify($scope.changedata.password));
        services.put('login','change_password',
        {'data':{'newpassword':$scope.changedata.password,'token':$route.current.params.token}})
		.then(function (response) {
            console.log(response);
			if (response) {
					toastr.success('Contraseña cambiada correctamente', 'Perfecto')
                $timeout( function(){
		            location.href = '#/';
		        }, 3000 );
			}else{
				toastr.error('Error al cambiar la contraseña', 'Error',{
                	closeButton: true
            	});
			}
        });
        


    }//end_changepassword

 


  
})