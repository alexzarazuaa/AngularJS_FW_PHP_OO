<?php
@session_start();
class controller_login
{
	function __construct()
	{
		//print_r("enyra cns");
		$_SESSION['module'] = "login";
	}




	function insert_user()
	{ //function insert_user_manual


		$json = array();
		$json = loadModel(MODEL_LOGIN, "login_model", "insert_user_model", $_POST['data']);
		//echo json_encode($json);

		//sendmail
		$arrArgument = array(

			'type' => 'alta',
			'token' => $json,
			'inputName' =>$_POST['data']['nickname'],
			'inputEmail' =>$_POST['data']['email']
		);
		//print_r($arrArgument);
		//echo json_encode($arrArgument);
		try {
			echo  enviar_email($arrArgument);
			//print_r($arrArgument);
		} catch (Exception $e) {
			echo "<div class='alert alert-error'>Server error. Try later...</div>";
		}
	}

	function exist_user()
	{ //function insert_user_manual

		$json = array();
		$json = loadModel(MODEL_LOGIN, "login_model", "exist_user_model", $_POST['email'], $_POST['nickname']);
		echo json_encode($json);
		//print_r($json);	
	}

	function exist_id()
	{ //function insert_user_manual

		//parse_str($_POST['data'], $array);
	
		//parse_str($_POST['data'], $array);
		$data = array($_POST['data'], $_POST['manual']);
		//echo json_encode($data);

		$json = array();
		$json = loadModel(MODEL_LOGIN, "login_model", "exist_id_model", $data);
		echo json_encode($json);
		//print_r($json);	
	}

	function recover_mail()
	{

			//print_r("recoever mail");
			
		
			//echo  json_encode ($_POST['data']);
			//echo json_encode(parse_str($_POST['data'], $array));
			

			$json = array();
			$json = loadModel(MODEL_LOGIN, "login_model", "mail_recover_model", $_POST['data']);

			//print_r($json);
			//$token = generate_Token_secure(20);

			if ($json === false) {
				echo ("ERROR");
			} else {
				//echo ("TRUE");
				//sendmail
				$arrArgument = array(

					'type' => 'changepass',
					'token' => $json,
					'inputEmail' => $_POST['data']
				);
				//print_r($arrArgument);
				//echo json_encode($arrArgument);
				try {
					echo  enviar_email($arrArgument);
					//print_r($arrArgument);
				} catch (Exception $e) {
					echo "<div class='alert alert-error'>Server error. Try later...</div>";
				}
			

	}
}



	function change_password()
	{


			

			$data = array($_POST['data']['newpassword'],$_POST['data']['token']);
			//echo json_encode($data);
			
			$json = array();
			$json = loadModel(MODEL_LOGIN, "login_model", "update_password_model",$data);
			echo json_encode($json);
	

	}


	function login_user(){

	
		$data = array($_POST['data']['email'],$_POST['data']['password']);

		$json = array();
		$json = loadModel(MODEL_LOGIN, "login_model", "check_usermail_model",$data[0],$data[1]);
		

		if ($json !== true){
		
			if(password_verify($data[1],$json[0]['password'])){
							$jwt_token=generate_token_JWT($data['email']);
							//print_r($jwt_token);
							$response = array(
								'response' => "correct",
								'token_jwt' => $jwt_token
							);
							$_SESSION['nickname'] = $json[0]['nickname'];
							$_SESSION['time'] = time();
							//print_r($_SESSION['nickname']);
							echo json_encode($response);
						}else{
							echo "contraseña incorrecta";
						}

		}
		//echo json_encode ($json);
	}
	
	function type_user(){

		// $token = decode_token($_POST['token']);
		// echo ($token);

		
		$json = array();
		$json = loadModel(MODEL_LOGIN, "login_model", "exist_type_user_model");
		echo json_encode($json);

	}


	function social_login(){

		$matriz=$_POST['data'];

		$json=loadModel(MODEL_LOGIN, "login_model", "check_socialuser_model",$matriz);
		if ($json == null){//Not registered yet
			$json=loadModel(MODEL_LOGIN, "login_model", "insert_social_model",$matriz);
			 echo json_encode("registered");
		}
		$token_jwt=generate_token_JWT($matriz['uid']);
		echo $token_jwt;
	}



	function activity (){
		if (!isset($_SESSION["time"])) {
            echo "active";
        } else {
            if ((time() - $_SESSION["time"]) >= 50000) {
                echo "inactive";
                //exit();
            } else {
                echo "active";
                //exit();
            }
        }
		

	}//end_function


	function session (){

		$json = loadModel(MODEL_LOGIN, "login_model", "user_session_model");
		echo json_encode($json);
	}//END_SESSION

	}


