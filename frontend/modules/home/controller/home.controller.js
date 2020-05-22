mastersport.controller('homeCtrl', function ($scope, data_carousel, data_categories, count_categoria, services, $uibModal, CommonService) {
  console.log("controller home");
  console.log(data_carousel);
  //  console.log(data_categories);
  cont = 2
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.slides=data_carousel;
   console.log(data_categories.slice(0, cont));
  $scope.index = 0;
  //   $scope.breeds = bbreeds.slice(0,cont);

  //   $scope.showMore = function(){
  //     cont=cont+2;
  //     $scope.breeds = bbreeds.slice(0,cont);
  //     if (cont == 6) {
  //       var prov = document.querySelector('#click_scroll');
  //       prov.remove();
  //     }
  // }
})//END_HOME_CONTROLLER