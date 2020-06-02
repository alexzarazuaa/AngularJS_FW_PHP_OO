mastersport.controller('registerCtrl', function ($scope, services, toastr) {
    //console.log("Register");

    $scope.register = function (viene) {
        //console.log("Click btn register");

        services.post('login', 'exist_id', { data: $scope.registerdata , viene: 'manual' }).then(function (response) {
            //console.log(response);
            data = JSON.parse(response)
            console.log(data)
            if (data == null) {
                console.log("es null");
                services.post('login', 'insert_user', { data: $scope.registerdata }).then(function (response) {
                    console.log(response);
                    if (response.message == 'Queued. Thank you.') {
                        window.setTimeout(function(){
                            document.location.href = "";
                        },2000)
                    } 
                });
                toastr.success("We have sent a message to confirm your account.","Email sent");
                location.href="#/",3000;
            } else {
                toastr.error("Something went wrong.","Error");
            }

        });





    }

})