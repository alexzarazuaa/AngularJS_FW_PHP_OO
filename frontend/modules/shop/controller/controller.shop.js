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
    prods = {};
    if ($scope.selectProds.brands) {
      brands = $scope.selectProds.brands;
    } else if ($scope.selectProds) {
      brands = $scope.selectProds;
    }

    products = products.toLowerCase();//para convertir la cadena en minúsculas.

    brands.forEach(function (data) {
      console.log(data)
      if (data.products.toLowerCase().indexOf(products) !== -1) {
        prods.push(data);
      }
    })

    if (prods.length === 1) {
      $scope.data = prods;
      $scope.products = prods.slice(0, 4)
      $scope.pages = false;
      $scope.OneSearch = true;
      $scope.allprod = false;

    } else if (prods.length > 1) {
      $scope.brands = prods;
      $scope.products = prods.slice(0, 4);
      $scope.pages = true;
      $scope.OneSearch = false;
      $scope.allprod = true;


    } else {
      toastr.error('No hay coincidencias con la busqueda', 'Sin resultados')
    }





  }//end_search








  // /// filtros 
  // function filtros() {



  //   var filters = "";
  //   var click_an = 0;
  //   var click_su = 0;
  //   var click_ca = 0;
  //   var click_ch = 0;
  //   var click_p1 = 0;
  //   var click_p2 = 0;
  //   var click_p3 = 0;
  //   var click_p4 = 0;
  //   var click_fav = 0;

  //   $('#camisetas').click(function () {
  //     console.log("click_an= " + click_an)


  //     if ((click_an % 2) == 0) {
  //       console.log("click_an para filtrar")
  //       click_an = click_an + 1
  //       if (filters === "") {
  //         console.log("cadena vacia")
  //         filters = "where categoria = 'CAMISETAS'" + filters;
  //       } else {
  //         console.log("cadena escrita")
  //         filters = filters + " OR categoria = 'CAMISETAS'";
  //         console.log(CAMISETAS);
  //       }

  //     } else {
  //       console.log("click_an para desfiltrar")
  //       click_an = click_an + 1
  //       CAMISETAS = '';
  //       filters = filters.replace("categoria = 'CAMISETAS' OR ", "");
  //       filters = filters.replace(" OR categoria = 'CAMISETAS'", "");
  //       filters = filters.replace("where categoria = 'CAMISETAS'", "");


  //     }
  //     allfilters(filters);
  //     console.log("click_an= " + click_an);
  //   });
  //   // sudaderas
  //   $('#sudaderas').click(function () {
  //     console.log("click_an= " + click_su)

  //     if ((click_su % 2) == 0) {
  //       console.log("click_su para filtrar")
  //       click_su = click_su + 1
  //       if (filters === "") {
  //         console.log("cadena vacia")
  //         filters = "where categoria = 'SUDADERAS'" + filters;
  //       } else {
  //         console.log("cadena escrita")
  //         filters = filters + " OR categoria = 'SUDADERAS'";
  //         console.log(SUDADERAS);
  //       }
  //     } else {
  //       console.log("click_su para desfiltrar")
  //       click_su = click_su + 1
  //       SUDADERAS = '';
  //       filters = filters.replace("categoria = 'SUDADERAS' OR ", "");
  //       filters = filters.replace(" OR categoria = 'SUDADERAS'", "");
  //       filters = filters.replace("where categoria = 'SUDADERAS'", "");
  //     }
  //     allfilters(filters);
  //     console.log("click_an= " + click_an);
  //   });
  //   //calzado
  //   $('#calzado').click(function () {
  //     console.log("click_ca= " + click_ca)

  //     if ((click_ca % 2) == 0) {
  //       console.log("click_ca para filtrar")
  //       click_ca = click_ca + 1
  //       if (filters === "") {
  //         console.log("cadena vacia")
  //         filters = "where categoria = 'CALZADO'" + filters;
  //       } else {
  //         console.log("cadena escrita")
  //         filters = filters + " OR categoria = 'CALZADO'";
  //         console.log(CALZADO);
  //       }
  //     } else {
  //       console.log("click_ca para desfiltrar")
  //       click_ca = click_ca + 1
  //       CALZADO = '';
  //       filters = filters.replace("categoria = 'CALZADO' OR ", "");
  //       filters = filters.replace(" OR categoria = 'CALZADO'", "");
  //       filters = filters.replace("where categoria = 'CALZADO'", "");
  //     }
  //     allfilters(filters);
  //     console.log("click_an= " + click_an);
  //   });
  //   //chandals
  //   $('#chandal').click(function () {
  //     console.log("click_ch= " + click_ch)

  //     if ((click_ch % 2) == 0) {
  //       console.log("click_ch para filtrar")
  //       click_ch = click_ch + 1
  //       if (filters === "") {
  //         console.log("cadena vacia")
  //         filters = "where categoria = 'CHANDALS'" + filters;
  //       } else {
  //         console.log("cadena escrita")
  //         filters = filters + " OR categoria = 'CHANDALS'";
  //         console.log(CHANDALS);
  //       }
  //     } else {
  //       console.log("click_ch para desfiltrar")
  //       click_ch = click_ch + 1
  //       CHANDALS = '';
  //       filters = filters.replace("categoria = 'CHANDALS' OR ", "");
  //       filters = filters.replace(" OR categoria = 'CHANDALS'", "");
  //       filters = filters.replace("where categoria = 'CHANDALS'", "");
  //     }
  //     allfilters(filters);
  //     console.log("click_ch= " + click_ch);
  //   });

  //   //precios
  //   $('#050').click(function () {
  //     console.log("click_p1= " + click_p1)

  //     if ((click_p1 % 2) == 0) {
  //       console.log("click_p1 para filtrar")
  //       click_p1 = click_p1 + 1
  //       if (filters === "") {
  //         console.log("cadena vacia")
  //         filters = "where precio between 0 and 50" + filters;
  //       } else {
  //         console.log("cadena escrita")
  //         filters = filters + " and precio between 0 and 50";
  //         console.log(CHANDALS);
  //       }
  //     } else {
  //       console.log("click_p1 para desfiltrar")
  //       click_p1 = click_p1 + 1
  //       precio = '';
  //       filters = filters.replace("precio between 0 and 50 and ", "");
  //       filters = filters.replace(" and precio between 0 and 50", "");
  //       filters = filters.replace("where precio between 0 and 50", "");

  //     }
  //     allfilters(filters);
  //     console.log("click_p1= " + click_p1);
  //   });
  //   //
  //   $('#508').click(function () {
  //     console.log("click_p2= " + click_p2)

  //     if ((click_p2 % 2) == 0) {
  //       console.log("click_p2 para filtrar")
  //       click_p2 = click_p2 + 1
  //       if (filters === "") {
  //         console.log("cadena vacia")
  //         filters = "where precio between 50 and 80" + filters;
  //       } else {
  //         console.log("cadena escrita")
  //         filters = filters + " and precio between 50 and 80";
  //         console.log(CHANDALS);
  //       }
  //     } else {
  //       console.log("click_p2 para desfiltrar")
  //       click_p2 = click_p2 + 1
  //       precio = '';
  //       filters = filters.replace("precio between 50 and 80 and ", "");
  //       filters = filters.replace(" and precio between 50 and 80", "");
  //       filters = filters.replace("where precio between 50 and 80", "");

  //     }
  //     allfilters(filters);
  //     console.log("click_p2= " + click_p2);
  //   });
  //   //
  //   $('#8012').click(function () {
  //     console.log("click_p3= " + click_p3)

  //     if ((click_p3 % 2) == 0) {
  //       console.log("click_p3 para filtrar")
  //       click_p3 = click_p3 + 1
  //       if (filters === "") {
  //         console.log("cadena vacia")
  //         filters = "where precio between 80 and 120" + filters;
  //       } else {
  //         console.log("cadena escrita")
  //         filters = filters + " and precio between 80 and 120";
  //         console.log(CHANDALS);
  //       }
  //     } else {
  //       console.log("click_p3 para desfiltrar")
  //       click_p3 = click_p3 + 1
  //       precio = '';
  //       filters = filters.replace("precio between 80 and 120 and ", "");
  //       filters = filters.replace(" and precio between 80 and 120", "");
  //       filters = filters.replace("where precio between 80 and 120", "");

  //     }
  //     allfilters(filters);
  //     console.log("click_p3= " + click_p3);
  //   });
  //   //
  //   $('#12020').click(function () {
  //     console.log("click_p4= " + click_p4)

  //     if ((click_p4 % 2) == 0) {
  //       console.log("click_p4 para filtrar")
  //       click_p4 = click_p4 + 1
  //       if (filters === "") {
  //         console.log("cadena vacia")
  //         filters = "where precio between 120 and 200" + filters;
  //       } else {
  //         console.log("cadena escrita")
  //         filters = filters + " and precio between 120 and 200";
  //         console.log(CHANDALS);
  //       }
  //     } else {
  //       console.log("click_p4 para desfiltrar")
  //       click_p4 = click_p4 + 1
  //       precio = '';
  //       filters = filters.replace("precio between 120 and 200 and ", "");
  //       filters = filters.replace(" and precio between 120 and 200", "");
  //       filters = filters.replace("where precio between 120 and 200", "");

  //     }
  //     allfilters(filters);
  //     console.log("click_p4= " + click_p4);
  //   });
  //   //click filter favorite
  //   $('#like').click(function () {
  //     console.log("click_fav= " + click_fav)

  //     //le decimos a la promesa general que obtenga el nombre del usuario logueado
  //     fav('module/shop/controller/controller_shop.php?op=check_fav')
  //       .then(function (info) {
  //         console.log(info)

  //         //si hay algun usuario conectado entra
  //         if (info !== "") {
  //           console.log('entra if')
  //           console.log(info)

  //           ///si es la primera vez o alguna  vez par ya que el contador empieza en 0 fitrara
  //           if ((click_fav % 2) == 0) {
  //             console.log("click_fav para filtrar")
  //             click_fav = click_fav + 1

  //             ///comprobara si la cadena esta vacia o llena
  //             if (filters === "") {
  //               //console.log("cadena vacia")
  //               filters = "Where idprod in (SELECT product_code from likes where user_ID='" + info + "')";
  //               console.log(filters)
  //             } else {
  //               console.log("cadena escrita")
  //               filters = filters + " AND idprod in (SELECT product_code from likes where user_ID='" + info + "')";

  //             }


  //             ///entrara si esta clickando para desfiltrar y borrara la cadena
  //           } else {
  //             console.log("like para desfiltrar")
  //             like = like + 1
  //             filters = filters.replace(" AND idprod in (SELECT product_code from likes where user_ID='" + info + "')", "");
  //             filters = filters.replace("WHERE idprod in (SELECT product_code from likes where user_ID='" + info + "')", "");


  //           }
  //           allfilters(filters)
  //           console.log("click_fav= " + click_fav)

  //           //si no esta logueado lo mandara a loguearse
  //         } else {
  //           redirect_login();
  //         }
  //       })

  //   })


  // }// end_function_filtros

  // function allfilters(filters) {
  //   //click de todos 
  //   console.log("filter");
  //   $('#list_products').empty();
  //   console.log(filters);
  //   var info_data = { module: 'shop', function: 'select_filter', data: filters }
  //   ajaxForSearch(amigable("?"), info_data)

  //   //end_click_checked
  // }



})//end_contorller