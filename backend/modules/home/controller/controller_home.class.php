<?php
@session_start();
	class controller_home {
	    function __construct() {
	        $_SESSION['module'] = "home";
	    }

	
		function data_carousel (){// function para la imagenes del carousel
			//print_r("entra function prueba carousel");
			$json = array();
			$json = loadModel(MODEL_HOME, "home_model", "data_carousel",$_POST['data']);
			echo json_encode($json);
	
		}
		function data_categories (){// function para la imagenes del carousel
			//print_r("entra function prueba cateogires");
			$json = array();
			$json = loadModel(MODEL_HOME, "home_model", "data_categories",$_POST['data']);
			echo json_encode($json);
		
		}

		function count_categoria (){//FUNCTION COUNT VIEW CATEGORIAS HOME
				//print_r("entra function  count");
				$json = array();
				$json = loadModel(MODEL_HOME, "home_model", "count_categoria",$_POST['data']);
				echo json_encode($json);
				
			
		}

		function active_user(){
			//echo json_encode($_POST['data']);

			// print_r("active user jaja loco");
			// die();
	
			//data variabke with name module,namefunction and the token to check and activate
			
				$token = $_POST['token'];
				print_r($token);
				loadModel(MODEL_HOME, "home_model", "active_user",$token);
				
			
		}
		

    }