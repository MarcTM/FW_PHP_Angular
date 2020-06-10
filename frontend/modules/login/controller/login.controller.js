// LOGIN CONTROLLER
marcangular.controller('loginCtrl', function($scope,services,toastr,$timeout,loginService,socialService,GitHubService,googleService) {

	// Initialize firebase
	socialService.initialize();
	
	// Google login
	$scope.login_google = function(){
		googleService.login();
	}

	// GitHub login
	$scope.login_github = function(){
		GitHubService.login();
	}

	// Normal login
	$scope.validate_login = function(){
		var data = {'email':$scope.login.inputEmail, 'pass':$scope.login.inputPassword};

		services.post('login','validate_login',{'credentials':JSON.stringify(data)}).then(function (cred) {
			if(cred==="not exists"){
				toastr.error("Your email or password is incorrect", "INCORRECT CREDENTIALS");
			}else if(cred==="not activated"){
				toastr.info("Check your email to activate your account", "CHECK YOUR EMAIL");
			}else if(cred==="incorrect"){
				toastr.error("Your email or password is incorrect", "INCORRECT CREDENTIALS");
			}else{
				localStorage.setItem('id_token', cred);
				toastr.success("You have successfully loged in", "LOGGING IN");
				$timeout( function(){
					loginService.login();
					location.href = '#/';
				}, 2000 );
			}
		});
	}
	
});



// REGISTER CONTROLLER
marcangular.controller('registerCtrl', function($scope,services,toastr,$timeout) {

	$scope.validate_register = function(){
		services.get('login','check_register',$scope.register.inputEmail,$scope.register.inputUser).then(function (data) {
			if (data==="false"){
				var data = {'email':$scope.register.inputEmail, 'user':$scope.register.inputUser, 'pass':$scope.register.inputPassword};

				services.post('login','insert_user',{'data':JSON.stringify(data)});

				toastr.success('You have received an email, go and activate your account', 'CHECK YOUR EMAIL',{
					closeButton: true
				});
				$timeout( function(){
					location.href = '#/login';
				}, 3000 );
			}else{
				toastr.warning('This account already exists', 'ACCOUNT EXISTS',{
					closeButton: true
				});	
			}
		});
	}

});



// RECOVER PASSWORD CONTROLLER
marcangular.controller('recoverCtrl', function($scope,services,toastr) {

	$scope.recover_password = function(){
		services.put('login','send_rec_mail',{'email':$scope.recover.inputEmail}).then(function (data) {
			console.log(data);
			if(data==="no"){
				toastr.error("This mail is not registered","ERROR");
			}else{
				toastr.info("Check your email to change your password", "CHECK YOUR EMAIL");
			}
		});
	}

});



// NEW PASSWORD CONTROLLER
marcangular.controller('newpassCtrl', function($route,$scope,services,toastr,$timeout) {

	console.log($route.current.params.token);

	$scope.newPass = function(){
		services.put('login','update_pass',{'rec_pass':JSON.stringify({'recpass':$scope.recpass.inputPassword,'token':$route.current.params.token})}).then(function () {
			toastr.success("Password changed", "NEW PASSWORD");

			$timeout( function(){
				location.href = '#/login';
			}, 2000 );
		});
	}

});