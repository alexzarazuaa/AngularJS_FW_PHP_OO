mastersport.controller('homeCtrl', function ($scope, data_carousel, data_categories, count_categoria, services, $uibModal, CommonService) {
  // console.log("controller home");
  //console.log(data_carousel);
  //  console.log(data_categories);

  cont = 2
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.slides = data_carousel;
  $scope.prods = data_categories.slice(0, cont)
  $scope.index = 0;
  //console.log($scope.prods);

  $scope.loadmore = function () {
    cont = cont + 2;
    $scope.prods = data_categories.slice(0, cont)
    if (cont == 8) {
      var prov = document.querySelector('#click_scroll');
      prov.remove();
    }
  }//end_loadmore 


  mastersport.controller('menuCtrl', function(loginService) {
    loginService.login();
  });

})//END_HOME_CONTROLLER