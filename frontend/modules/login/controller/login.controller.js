ohanadogs.controller('loginCtrl', function($scope,services,toastr,$timeout,localstorageService,
	loginService,socialService,GitHubService,googleService,$rootScope) {
	$scope.recpassV = false;
	$scope.butpassV = true;
	if (!$rootScope.cont) {
		$rootScope.cont=0;
	}
	if ($rootScope.cont === 0) {
		socialService.initialize();
		$rootScope.cont=1;
	}

	$scope.submitLogin = function(){
		services.put('login','validate_login',
		{'total_data':JSON.stringify({'luser':$scope.login.inputUser,'lpasswd':$scope.login.inputPassword})})
		.then(function (response) {
			if (response.success) {
					localstorageService.setUsers(response.tokenlog);
					toastr.success('Inicio de sesion correcto', 'Perfecto',{
                    closeButton: true
                });
                $timeout( function(){
                	loginService.login();
		            location.href = '.';
		        }, 3000 );
			}else{
				if (response.error.luser) {
					toastr.error(response.error.luser, 'Error',{
	                	closeButton: true
	            	});
				}else if(response.error.lpasswd){
					toastr.error(response.error.lpasswd, 'Error',{
	                	closeButton: true
	            	});
				}else{
					toastr.error('Error', 'Error',{
	                	closeButton: true
	            	});
				}
			}
		});
	};
	
	$scope.submitRegister = function(){
		var data = {'ruser':$scope.register.inputUser,'remail':$scope.register.inputEmail,'rpasswd':$scope.register.inputPassword};
		services.post('login','validate_register',{'total_data':JSON.stringify(data)}).then(function (response) {
			if (response.success) {
					toastr.success('Revisa tu correo electronico', 'Perfecto',{
                    closeButton: true
                });
                $timeout( function(){
		            location.href = '#/';
		        }, 3000 );
			}else{
				toastr.error(response.error.ruser, 'Error',{
                	closeButton: true
            	});
			}
		});
	}
	
	$scope.showRpass = function(){
		$scope.butpassV = false;
		$scope.recpassV = true;
	}
	
	$scope.recPass = function(){
		var user = $scope.recover.inputUser
		services.post('login','send_mail_rec',{'rpuser':JSON.stringify(user)}).then(function (response) {
			if (response.success) {
				toastr.success('Revisa tu correo electronico', 'Perfecto',{
                    closeButton: true
                });
                $timeout( function(){
		            location.href = '#/';
		        }, 3000 );
			}else{
				toastr.error(response.error.rpuser, 'Error',{
                	closeButton: true
            	});
			}
		});
	}
	
	$scope.logGoogle = function(){
		googleService.login();
	};
	
	$scope.logGitHub = function(){
		GitHubService.login();
	};
});

ohanadogs.controller('changepassCtrl', function($scope,services,$route,toastr,$timeout) {
	$scope.submitRecPass = function(){
		services.put('login','update_passwd',
		{'rec_pass':JSON.stringify({'recpass':$scope.recpass.inputPassword,'token':$route.current.params.token})})
		.then(function (response) {
			if (response) {
					toastr.success('Contraseña cambiada correctamente', 'Perfecto',{
                    closeButton: true
                });
                $timeout( function(){
		            location.href = '#/';
		        }, 3000 );
			}else{
				toastr.error('Error al cambiar la contraseña', 'Error',{
                	closeButton: true
            	});
			}
		});
	}
});

ohanadogs.controller('profileCtrl', function($scope,services,toastr,loginService,$timeout,infoUser,CommonService,$uibModal) {
	$scope.sprofV = true;
	$scope.eprofV = false;
	$scope.cprofileV = false;
	$scope.avatar = infoUser[0].avatar;
	$scope.userInfo = infoUser[0];
	
	$scope.showSprof = function(){
		$scope.sprofV = true;
		$scope.eprofV = false;
		$scope.cprofileV = false;
	}
	$scope.showEprof = function(){
		$scope.sprofV = false;
		$scope.eprofV = true;
		$scope.cprofileV = false;
	}
	$scope.showCdogs = function(){
		$scope.sprofV = false;
		$scope.eprofV = false;
		$scope.cprofileV = true;
		$scope.infoDogs = infoUser.dog;
	}
	$scope.showAdogs = function(){
		$scope.sprofV = false;
		$scope.eprofV = false;
		$scope.cprofileV = true;
		$scope.infoDogs = infoUser.adoptions;
	}
	$scope.logoutB = function(){
		loginService.logout();
		toastr.success('', 'Cerrando Sesion',{
            closeButton: true
        });
        $timeout( function(){
            location.href = '.';
        }, 2000 );
	}

	$scope.editProfile = function (user) {
		services.put('login','update_profile',
		{'prof_data':JSON.stringify({'pname':$scope.userInfo.name,'psurname':$scope.userInfo.surname,'pbirthday':$scope.userInfo.birthday,'user':user})})
		.then(function (response) {
			if (response.success) {
				toastr.success('Cambios guardados correctamente', 'Perfecto',{
                    closeButton: true
                });
                $scope.sprofV = true;
				$scope.eprofV = false;
				$scope.cprofileV = false;
			}else{
				if (response.error.pbirthday) {
					toastr.error(response.error.pbirthday, 'Error',{
	                	closeButton: true
	            	});
				}else{
					toastr.error('Error', 'Error',{
	                	closeButton: true
	            	});
				}
			}
		});
    };
    
	$scope.open = function (chip) {
        CommonService.openModal(chip,'login','details_list');
    };
    
    $scope.openDrop = function (user) {
        var modalInstance = $uibModal.open({
	        animation: 'true',
	        templateUrl: 'frontend/modules/login/view/dropModal.view.html',
	        controller: 'dropModalCtrl',
	        windowClass : 'show',
	        size: "lg",
	        resolve: {
                   iduser: function () {
                        return user;
                    }
                }
	    });
    };
    
    $scope.concealDog = function (chip) {
    	services.put('login','conceal_dog',{'chip':chip}).then(function (response) {
    		if (response === '1') {
				toastr.success('Perro ocultado correctamente', 'Correcto',{
                	closeButton: true
            	});
            	$timeout( function(){
		            location.href = '#/';
		            location.href = '#/profile';
		        }, 1500 );
			}else{
				toastr.error('Error', 'Error',{
                	closeButton: true
            	});
			}
    	});
    };
    
    $scope.visibleDog = function (chip) {
    	services.put('login','visible_dog',{'chip':chip}).then(function (response) {
    		if (response === '1') {
				toastr.success('Perro visible', 'Correcto',{
                	closeButton: true
            	});
            	$timeout( function(){
		            location.href = '#/';
		            location.href = '#/profile';
		        }, 1500 );
			}else{
				toastr.error('Error', 'Error',{
                	closeButton: true
            	});
			}
    	});
    };
});

ohanadogs.controller('dropModalCtrl', function($scope,services,toastr,$uibModalInstance,$timeout,localstorageService,iduser) {
	$scope.dropzoneConfig = {
        'options': {
            'url': 'backend/index.php?module=login&function=upload_avatar',
            addRemoveLinks: true,
            maxFileSize: 1000,
            dictResponseError: "Ha ocurrido un error en el server",
            acceptedFiles: 'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.rar,application/pdf,.psd'
        },
        'eventHandlers': {
            'sending': function (file, formData, xhr) {},
            'success': function (file, response) {
                response = JSON.parse(response);
                if (response.result) {
                    $(".msg").addClass('msg_ok').removeClass('msg_error').text('Success Upload image!!');
                    $('.msg').animate({'right': '300px'}, 300);
                } else {
                    $(".msg").addClass('msg_error').removeClass('msg_ok').text(response['error']);
                    $('.msg').animate({'right': '300px'}, 300);
                }
            },
            'removedfile': function (file, serverFileName) {
                if (file.xhr.response) {
                    $('.msg').text('').removeClass('msg_ok');
                    $('.msg').text('').removeClass('msg_error');
                    var data = jQuery.parseJSON(file.xhr.response);
                    services.post("login", "delete_avatar", JSON.stringify({'filename': data.data}));
                }
            }
	}};

	$scope.saveAvatar = function () {
		services.put('login','modify_avatar',{'auser':iduser}).then(function (response) {
			if (response === '1') {
				toastr.success('Cambios guardados correctamente', 'Perfecto',{
                    closeButton: true
                });
                $uibModalInstance.dismiss('cancel');
                $timeout( function(){
		            location.href = '#/';
		            location.href = '#/profile';
		        }, 1500 );
			}
		});
    };
    
	$scope.close = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
