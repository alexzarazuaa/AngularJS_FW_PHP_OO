<?php
@session_start();
class controller_cart
{
	function __construct()
	{
		$_SESSION['module'] = "cart";
	}

	
	// function data_products()
	// { //function obtener todos los productos contando con el limit y el count_view
	// 	//print_r($_GET);
	// 	$json = array();
	// 	$json = loadModel(MODEL_SHOP, "shop_model", "data_products", $_POST['data']);
	// 	echo json_encode($json);
	

	// }

	



}
