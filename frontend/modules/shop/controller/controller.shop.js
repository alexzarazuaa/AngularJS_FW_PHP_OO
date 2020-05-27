mastersport.controller('shopCtrl', function ($scope, allproducts,detailsprod,services, toastr, $timeout) {
 //console.log("Controller Shop");
 //console.log(allproducts);
 //console.log( allproducts.slice(0,4))

 $scope.currentPage = 1;
 $scope.products = allproducts.slice(0,4);
 $scope.pages = true;
 $scope.itemsPerPage = 4;
 $scope.totalItems = allproducts.length;
 $scope.emptyMap=true;
 $scope.filters = true;
 $scope.all = true;
 $scope.search = false;
 $scope.details = false;


 $scope.pageChanged = function() {
    var startPos = ($scope.currentPage - 1) * 4;
    $scope.products = allproducts.slice(startPos, startPos + 4);
  
  };

  $scope.Details = function(idprod){
    console.log(idprod)
      
      $scope.emptyMap=false;
      $scope.filters = false;
      $scope.all = false;
      $scope.search = false;
      $scope.details = true;
      $scope.pages = false;
      $scope.data = detailsprod;
      $scope.data = {};
      //console.log( $scope.data = detailsprod[0]);
      angular.forEach(detailsprod[0],function(value,key){
        $scope.data[key] = value;
    });



  }















})//end_contorller