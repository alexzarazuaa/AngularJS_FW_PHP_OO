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
                console.log(response.message);
                if (response.message == 'Queued. Thank you.') {
                    //console.log("dentro")
                    toastr.success("We sent the email, please check your inbox.", "Email sent.");
                    window.setTimeout(function(){
                        document.location.href = "";
                    },2000)
                } else {
                    //console.log("dentro else")
                    toastr.error("We aren't able to send you an email, please check if the contact information is correct.", "Something went wrong");
                }
            });
    };
});
