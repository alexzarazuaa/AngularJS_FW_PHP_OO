mastersport.controller('homeCtrl', function ($scope, data_carousel, data_categories, count_categoria, services, $uibModal, CommonService) {

  cont = 2
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.slides = data_carousel;
  $scope.prods = data_categories.slice(0, cont)
  $scope.index = 0;


  $scope.loadmore = function () {
    cont = cont + 2;
    $scope.prods = data_categories.slice(0, cont)
    if (cont == 8) {
      var prov = document.querySelector('#click_scroll');
      prov.remove();
    }
  }//end_loadmore 





})//END_HOME_CONTROLLER

mastersport.controller('mainController', function ($scope, loginService) {
  loginService.login();
  $scope.logout = function (loginService) {
    location.href = '#/';
    loginService.logout();
  };// endlogOut
});