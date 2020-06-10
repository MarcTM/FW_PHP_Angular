<?php
	class controller_login{
		function __construct(){
			 $_SESSION['module'] = "login";
		}


		function typeuser(){
			$type = loadModel(MODEL_LOGIN, "login_model", "typeuser");
			echo json_encode($type);
		}
		
		function send_rec_mail(){
			$result['token'] = loadModel(MODEL_LOGIN, "login_model", "send_rec_mail");
			$result['email'] = $_POST['email'];

			if($result['token']){
				$mail = send_mail_recover($result);
				echo "si";
			}else{
				echo "no";
			}
		}

		function update_pass(){
			loadModel(MODEL_LOGIN, "login_model", "update_pass");
		}

		function check_register(){
			$json = loadModel(MODEL_LOGIN, "login_model", "check_register");
			echo json_encode($json);
		}

		function insert_user(){
			$data = json_decode($_POST['data'],true);

			$result['token'] = loadModel(MODEL_LOGIN, "login_model", "insert_user");
			$result['email'] = $data['email'];
			mailgun_alta($result);
		}

		////////////
		// GOOGLE AND GITHUB
		//////////////////////
		function check_user_social(){
			$result = loadModel(MODEL_LOGIN, "login_model", "check_user_social");
			if($result){
				$_SESSION['user'] = $_POST['user'];
				$_SESSION['avatar'] = $_POST['avatar'];
				echo json_encode($result);
			}else{
				echo "no";
			}
		}

		function insert_user_social(){
			$token = loadModel(MODEL_LOGIN, "login_model", "insert_user_social");
			
			$_SESSION['user'] = $_POST['user'];
			$_SESSION['avatar'] = $_POST['avatar'];

			echo $token;
		}
		////////////////////
		////////////////////

		function active_user(){
			if (isset($_GET['param'])) {
				loadModel(MODEL_LOGIN, "login_model", "active_user");
			}	
		}	
		
		function validate_login(){
			$result = loadModel(MODEL_LOGIN, "login_model", "validate_login");
			echo $result;
		}	
	
	}