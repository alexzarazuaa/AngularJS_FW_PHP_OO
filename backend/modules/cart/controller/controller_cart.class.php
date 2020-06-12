<?php
@session_start();
class controller_cart
{
	function __construct()
	{
		$_SESSION['module'] = "cart";
	}

	function show_cart (){

		$json = array();
		$json = loadModel('cart_model','show_cart_model',$_POST['data']);
		echo json_encode($json);

	}//end_showCart
	



}
