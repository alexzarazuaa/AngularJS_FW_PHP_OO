mastersport.controller('contactCtrl', function ($scope, services, toastr, $timeout) {
    $scope.contact = {
        inputName: "",
        inputEmail: "",
        inputSubject: "",
        inputMessage: ""
    };

    $scope.SubmitContact = function () {
        console.log("entra en submit");
        var data = {
            "name": $scope.contact.inputName,
            "email": $scope.contact.inputEmail,
            "matter": $scope.contact.inputSubject,
            "message": $scope.contact.inputMessage,
            "token": 'contact_form'
        };

        console.log(data);
        var contact_form = JSON.stringify(data);
        console.log(contact_form);

        services.post('contact', 'send_cont', contact_form)
            .then(function (response) {
                console.log(response);
                if (response == "true") {
                    console.log("dentro")
                    toastr.success('El mensaje ha sido enviado correctamente', 'Mensaje enviado',{
                        closeButton: true
                    });
                } else {
                    console.log("dentro else")
                    toastr.error('El mensaje no se ha enviado', 'Mensaje no enviado', {
                        closeButton: true,

                    });
                }
            });
    };
});
