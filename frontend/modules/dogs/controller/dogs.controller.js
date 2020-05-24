ohanadogs.controller('dogsCtrl', function($scope,services,provinces,toastr,localstorageService) {
	//return services.get('ubication', 'load_prov');
	console.log(provinces);
	$scope.provinces = 	provinces.provinces;
	$scope.showProv = false;
	$scope.showCity = false;
	$scope.formV = true;
	$scope.resultV = false;

	$scope.changeProv = function (){
		if ($scope.dogs.selectProvincia.id) {
			services.get('dogs', 'load_cities', $scope.dogs.selectProvincia.id).then(function (response) {
				$scope.city = response.cities;
        	});
		}
	}

	$scope.dropzoneConfig = {
        'options': {
            'url': 'backend/index.php?module=dogs&function=upload_dog',
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
                    services.post("dogs", "delete_dog", JSON.stringify({'filename': data.data}));
                }
            }
    }};

	$scope.submitDogs = function (){
		if ($scope.dogs.radioSex && $scope.dogs.radioStature && $scope.dogs.inputBirthday && $scope.dogs.selectCity.poblacion ) {
			var data = {"dname": $scope.dogs.inputName, "dchip": $scope.dogs.inputChip, "breed": $scope.dogs.inputBreed, 
			"dtlp": $scope.dogs.inputTlp, "sex": $scope.dogs.radioSex, "stature": $scope.dogs.radioStature, 
			"province": $scope.dogs.selectProvincia.nombre, "city": $scope.dogs.selectCity.poblacion, 
			"date_birth": $scope.dogs.inputBirthday, "dinfo": $scope.dogs.inputMessage,"token":localstorageService.getUsers()};
	        var data_dog_json = JSON.stringify(data);
	        
	        services.post('dogs', 'json_dog', {json_dog:data_dog_json}).then(function (response) {
	        	//console.log(response);
	        	// response = JSON.parse(response);
	        	// console.log(response);
				if (response.success) {
					$scope.data_dog = response.dogs;
					toastr.success('Registrado correctamente', 'Perfecto',{
	                    closeButton: true
	                });
	                $scope.formV = false;
	                $scope.resultV = true;
				}else{
					if (response.error.dchip) {
							toastr.error(response.error.dchip, 'Error',{
	                    	closeButton: true
	                	});	
					}else if(response.error.date_birth){
							toastr.error(response.error.date_birth, 'Error',{
	                    	closeButton: true
	                	});
					}else{
							toastr.error('El mensaje no se ha enviado', 'Error',{
		                    closeButton: true
		                });
					}
				}
	    	});
		}
	}
});
