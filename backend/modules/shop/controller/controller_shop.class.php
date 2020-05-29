<?php
@session_start();
class controller_shop
{
	function __construct()
	{
		$_SESSION['module'] = "shop";
	}



	function data_products()
	{ //function obtener todos los productos contando con el limit y el count_view
		//print_r($_GET);
		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "data_products", $_POST['data']);
		echo json_encode($json);
	}

	function data_one_product()
	{ //function para obetener la info de details de producs
		//print_r($_GET);
		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "data_one_product_model",$_POST['idprod']);
		echo json_encode($json);
	}

	function count_views()
	{
		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "update_countview_prod", $_POST['data']);
		echo json_encode($json);
	}


	function prods_categoria()
	{
		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "obtain_products_categoria", $_POST['data']);
		echo json_encode($json);
	}

	function select_filter()
	{
		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "obtain_filters", $_POST['data']);
		echo json_encode($json);
	}

	function select_btnsearch()
	{
		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "obtain_search", $_POST['data']);
		echo json_encode($json);
	}

	function gmaps()
	{
		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "obtain_gmaps");
		echo json_encode($json);
	}

	function geomaps()
	{
		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "obtain_geomaps");
		echo json_encode($json);
	}

	function geomaps_desc()
	{
		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "obtain_geomaps_desc", $_POST['latitud'], $_POST['longitud']);
		echo json_encode($json);
	}

	function count_pages()
	{
		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "obtain_countpages_model");
		echo json_encode($json);
	}

	function likes()
	{

		// $nickname = $_SESSION['nickname'];

		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "insert_like_model", $_SESSION['nickname'], $_POST['idprod']);
		echo json_encode($json);
	}

	function unlike()
	{
		// $nickname = $_SESSION['nickname'];

		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "unlike_model", $_SESSION['nickname'], $_POST['idprod']);
		echo json_encode($json);
	}


	function paint_likes()
	{
		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "paint_likes_model", $_SESSION['nickname']);
		echo json_encode($json);
	}
}
