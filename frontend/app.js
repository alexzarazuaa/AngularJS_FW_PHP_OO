var mastersport = angular.module('mastersport', ['ngRoute', 'toastr', 'ui.bootstrap']);
mastersport.config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
                $routeProvider


                        .when("/contact", { templateUrl: "frontend/modules/contact/view/contact.view.html", controller: "contactCtrl" })



                        .otherwise("/", { templateUrl: "frontend/modules/home/view/home.view.html", controller: "mainCtrl" });
        }]);
