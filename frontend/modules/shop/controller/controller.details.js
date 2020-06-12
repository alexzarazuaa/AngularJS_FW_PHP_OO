
mastersport.controller('detailsCtrl', function ($scope, prod, services, toastr, $timeout) {

    $scope.details = true;
    $scope.fav = true;
    $scope.disfav = false;
    $scope.product = {};




    angular.forEach(prod[0], function (value, key) {
        $scope.product[key] = value;
    });




    $scope.fav = function (idprod) {
        console.log("fa click fav")
        console.log(idprod)
        console.log(code)

        token = localStorage.getItem('token');

        if (token) {


            services.put('shop', 'likes', { idprod: idprod })
                .then(function (response) {
                    toastr.success('Producto Añadido a  Favoritos', 'Favoritos');
                    $timeout(function () {
                        $scope.fav = false;
                        $scope.disfav = true;
                        location.href = '#/tienda';
                    }, 1000);
                })


        } else {
            toastr.error('Debes estar Registrado', 'Registrate');
            $timeout(function () {
                location.href = '#/login';
            }, 1000);
        }

    }//end_favs



    //DISLIKE
    $scope.disfav = function (idprod) {
        console.log("fa click disfav")
        console.log(idprod)
        $scope.fav = false;
        $scope.disfav = true;
        token = localStorage.getItem('token');

        if (token) {


            services.put('shop', 'unlike', { idprod: idprod })
                .then(function (response) {
                    toastr.success('Producto Eliminado de Favoritos', 'Favoritos');
                    $scope.fav = true;
                    $scope.disfav = false;
                    $timeout(function () {
                        location.href = '#/tienda';

                    }, 1000);
                })


        } else {
            toastr.error('Debes estar Registrado', 'Registrate');
            $timeout(function () {
                location.href = '#/login';
            }, 1000);
        }

    }//end_dislike


    //Function add to cart
    $scope.addcart = function (idprod) {
        console.log("entra add cart")
        console.log(idprod)
        let token = localStorage.getItem('token')
        if (token) {
            console.log("Esta logueado")
            services.put('shop','add_cart',{data:idprod})
            .then(function (response) {
                console.log(response)
                toastr.success('Producto añadido al carrito','Añadido al Carrito')
            })
        } else {
            toastr.error('Debes estar Registrado', 'Registrate');
            $timeout(function () {
                location.href = '#/login';
            }, 1000);
        }

    }//end_function_addCart



});//end_controller