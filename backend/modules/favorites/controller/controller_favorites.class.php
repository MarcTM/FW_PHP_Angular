<?php
	class controller_favorites {
	    function __construct() {
	        $_SESSION['module'] = "favorites";
	    }


		function checkfav() {
			$json = loadModel(MODEL_FAVORITES, "favorites_model", "checkfav");
			echo json_encode($json);
		}
		
		function addfav() {
			$json = loadModel(MODEL_FAVORITES, "favorites_model", "addfav");
			echo json_encode($json);
		}
		
		function delfav() {
			$json = loadModel(MODEL_FAVORITES, "favorites_model", "delfav");
			echo json_encode($json);
	    }

	}