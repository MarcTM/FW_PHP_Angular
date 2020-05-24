<?php
	class controller_contact {
	    function __construct() {
	        $_SESSION['module'] = "contact";
	    }


		// MAILGUN (CONTACT LIST)
		function send_email(){
			$arrArgument = array(
				'inputName' => $_POST['name'],
				'inputEmail' => $_POST['email'],
				'inputSubject' => $_POST['matter'],
				'inputMessage' => $_POST['message']
			);
			
			send_mailgun($arrArgument);
		}

	}