mastersport.controller('shopCtrl', function ($scope, allproducts, brands, toastr) {

  $scope.brands = brands;
  $scope.pages = true;
  $scope.OneSearch = false;
  $scope.allprod = true;
  $scope.currentPage = 1;
  $scope.products = allproducts.slice(0, 4);
  $scope.itemsPerPage = 4;
  $scope.totalItems = allproducts.length;

  $scope.pageChanged = function () {
    var startPos = ($scope.currentPage - 1) * 4;
    $scope.products = allproducts.slice(startPos, startPos + 4);

  };//Paginacion




  $scope.search = function () {
    console.log("BUTTON SEACRH");
    console.log($scope.selectProds)

    prods = [];
    if ($scope.selectProds.brands) {
      brand = $scope.selectProds.brands;
    } else if ($scope.selectProds) {
      brand = $scope.selectProds;
    }

    brand = brand.toLowerCase();
    adoptions.forEach(function (data) {
      if (data.brand.toLowerCase().indexOf(brand) !== -1) {
        prods.push(data);
      }
    });

    if (prods.length === 1) {
      $scope.pages = false;
      $scope.products = prods.slice(0, 4);
      $scope.OneSearch = true;
      $scope.allprod = false;
    } else if (prods.length > 1) {
      $scope.pages = true;
      $scope.OneSearch = false;
      $scope.allprod = true;
      $scope.currentPage = 1;
      $scope.products = prods.slice(0, 4);
    } else {
      toastr.error('No hay coincidencias con la busqueda', 'Sin resultados')
    }




  }//end_search






})//end_controller
