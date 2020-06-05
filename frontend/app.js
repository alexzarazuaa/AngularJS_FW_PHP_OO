var mastersport = angular.module('mastersport', ['ngRoute', 'toastr', 'ui.bootstrap']);
mastersport.config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
                $routeProvider
                        .when("/", {
                                templateUrl: "frontend/modules/home/view/inicio.view.html", controller: "homeCtrl",
                                resolve: {
                                        data_carousel: function (services) {
                                                return services.get('home', 'data_carousel');
                                        },
                                        data_categories: function (services) {
                                                return services.get('home', 'data_categories');
                                        },
                                        count_categoria: function (services) {
                                                return services.get('home', 'count_categoria');
                                        }
                                }
                        })
                        .when("/tienda", {
                                templateUrl: "frontend/modules/shop/view/shop.view.html", controller: "shopCtrl",
                                resolve: {
                                        allproducts: function (services) {
                                                return services.get('shop', 'data_products');
                                        }// },                                        
                                        // filters : function (services){
                                        //         return services.get('shop','select_filter'  , {'data': $route.current.params.filters} );
                                        // }
                                        // count_categoria: function (services) {
                                        //         return services.get('home', 'count_categoria');
                                        // }
                                }

                        })
                        .when('/tienda/:idprod' , {
                                templateUrl: "frontend/modules/shop/view/details.view.html",
                                controller: "detailsCtrl",
                                resolve: {
                                    prod: function(services, $route) {
                                        return services.post('shop', 'data_one_product', {'idprod': $route.current.params.idprod})
                                    }
                                }
                        })// end_resolve
                        .when('/login' , {
                                templateUrl: "frontend/modules/login/view/login.view.html",
                                controller: "loginCtrl"
                        })
                        .when('/recoverPass' , {
                                templateUrl: "frontend/modules/login/view/recover_pass.view.html",
                                controller: "recoverCtrl"
                        })
                        .when('/login/changePass/:token' , {
                                templateUrl: "frontend/modules/login/view/changepass.view.html",
                                controller: "recoverCtrl"
                        })

                        .when('/register' , {
                                templateUrl: "frontend/modules/login/view/register.view.html",
                                controller: "registerCtrl"
                        })
                        .when('/micuenta' , {
                                templateUrl: "frontend/modules/login/view/recover_pass.view.html",
                                controller: "recoverCtrl"
                        })
                        .when ('/home/active_user/:token' , {
                                resolve: {
                                        active_user: function (services, $route,toastr) {
                                            console.log($route.current.params.token);
                                             return services.put('home', 'active_user', {'token': $route.current.params.token})
                                            .then(function(response){
                                                if (response) {
                                                        toastr.success('Thank you for verifing your account.' ,'Account verified..');
                                                    }else {
                                                        toastr.error('The current token is invalid.' ,'Error');
                                                    }// end_else
                                                    location.href = '#/';
                                            });
                                        }
                                    }
                        })

                        
                        .when("/contact", { templateUrl: "frontend/modules/contact/view/contact.view.html", controller: "contactCtrl" })



                        .otherwise("/", { templateUrl: "frontend/modules/home/view/inicio.view.html", controller: "homeCtrl" });
        }]);
