mastersport.controller('shopCtrl', function ($scope, allproducts,services, toastr, $timeout) {
 //console.log("Controller Shop");
 //console.log(allproducts);
 //console.log( allproducts.slice(0,4))

 $scope.currentPage = 1;
 $scope.products = allproducts.slice(0,4);
 $scope.pages = true;
 $scope.itemsPerPage = 4;
 $scope.totalItems = allproducts.length;

 $scope.pageChanged = function() {
    var startPos = ($scope.currentPage - 1) * 4;
    $scope.products = allproducts.slice(startPos, startPos + 4);
  
  };















})//end_contorller