<?php
	class controller_details {
	    function __construct() {
	        $_SESSION['module'] = "details";
	    }


		function show_details() {
			$json = loadModel(MODEL_DETAILS, "details_model", "show_details");
			echo json_encode($json);
	    }

	}