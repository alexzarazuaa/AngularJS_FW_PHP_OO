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
		//echo ("SEND_EMAIL");

		if ($_POST['token'] === "contact_form") {

			// parse_str($_POST['data'], $array);
			// echo json_encode($array);

			$arrArgument = array(

				'type' => 'contact',
				'token' => '',
				'inputName' => $_POST['name'],
				'inputEmail' => $_POST['email'],
				'inputSubject' => $_POST['matter'],
				'message' => $_POST['message']
			);


			//echo json_encode($arrArgument);

			try {
				enviar_email($arrArgument);
				echo json_encode("true");
			} catch (Exception $e) {
				//echo "<div class='alert alert-error'>Server error. Try later...</div>";
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
				//echo json_encode("true");
			} catch (Exception $e) {
				//echo "<div class='alert alert-error'>Server error. Try later...</div>";
				//echo json_encode("false");
			}
	}
}


	function shops_map()
	{

		$json = array();
		$json = loadModel(MODEL_CONTACT, "contact_model", "shops_model");
		echo json_encode($json);
	}
}
