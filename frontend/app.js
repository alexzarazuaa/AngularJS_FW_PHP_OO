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
                                        },                                        
                                        detailsprod : function(services){
                                                return services.get('shop','data_one_product');
                                        },
                                        filters : function (services){
                                                return services.get('shop','select_filter'  , {'data': $route.current.params.filters} );
                                        }
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
                        .when("/contact", { templateUrl: "frontend/modules/contact/view/contact.view.html", controller: "contactCtrl" })



                        .otherwise("/", { templateUrl: "frontend/modules/home/view/inicio.view.html", controller: "homeCtrl" });
        }]);
