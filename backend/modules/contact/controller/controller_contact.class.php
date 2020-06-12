<?php
@session_start();
class controller_contact
{
	function __construct()
	{
		//print_r("enyra cns");
		$_SESSION['module'] = "contact";
	}


	function send_cont()
	{


		$arrArgument = array(

			'type' => 'contact',
			'token' => '',
			'inputName' => $_POST['name'],
			'inputEmail' => $_POST['email'],
			'inputSubject' => $_POST['matter'],
			'message' => $_POST['message']
		);




		try {
			echo enviar_email($arrArgument);
		} catch (Exception $e) {

			echo json_encode("false");
		}




		$arrArgument = array(

			'type' => 'admin',
			'token' => '',
			'inputName' => $_POST['name'],
			'inputEmail' => $_POST['email'],
			'inputSubject' => $_POST['matter'],
			'message' => $_POST['message']
		);

		try {
			enviar_email($arrArgument);
			
		} catch (Exception $e) {

			echo json_encode("false");
		}
	}


	function shops_map()
	{

		$json = array();
		$json = loadModel(MODEL_CONTACT, "contact_model", "shops_model");
		echo json_encode($json);
	}
}
