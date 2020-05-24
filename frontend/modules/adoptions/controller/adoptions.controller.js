ohanadogs.controller('adoptionsCtrl', function($scope,adoptions,breeds,$uibModal,services,toastr,CommonService,localstorageService,$timeout){
	$scope.adoptions = adoptions;
	$scope.currentPage = 1;
    $scope.breeds = breeds;
	$scope.filterDogs = $scope.adoptions.slice(0,6);
    $scope.infoV = true;
    $scope.bootpageV = true;

	$scope.pageChanged = function() {
	  var startPos = ($scope.currentPage - 1) * 6;
	  $scope.filterDogs = $scope.adoptions.slice(startPos, startPos + 6);
	};

	$scope.open = function (chip) {
        CommonService.openModal(chip,'adoptions','details_list');
    };

    $scope.selectSearch = function(){
        breed_dog = [];
        if ($scope.breedSelected.breeds) {
            breed = $scope.breedSelected.breeds;
        }else if($scope.breedSelected){
            breed = $scope.breedSelected;
        }

        breed = breed.toLowerCase();
        adoptions.forEach(function(data){
            if(data.breed.toLowerCase().indexOf(breed) !== -1){
                breed_dog.push(data);
            }
        });
        
            if (breed_dog.length === 1) {
                $scope.data = breed_dog;
                $scope.filterDogs = breed_dog.slice(0,6);
                $scope.infoV = false;
                $scope.detailsV = true;
                $scope.bootpageV = false;
            }else if (breed_dog.length > 1){
                $scope.adoptions = breed_dog;
                $scope.filterDogs = breed_dog.slice(0,6);
                $scope.infoV = true;
                $scope.detailsV = false;
                $scope.bootpageV = true;
            }else{
                toastr.error('No hay coincidencias con la busqueda', 'Sin resultados',{
                    closeButton: true
                });
            }
    }

    $scope.adopDog = function (chip) {
        token = localstorageService.getUsers();
        services.put('adoptions','adoption_dog',{"all_info":JSON.stringify({'chip':chip,'token':token})}).then(function (response) {
            toastr.success('Perro adoptado correctamente', 'Perfecto',{
                    closeButton: true
                });
                $timeout( function(){
                    location.href = '.';
                }, 3000 );
        });
    };
    if (localstorageService.getUsers()) {
        $scope.canAdopt=true;
    }else
        $scope.canAdopt=false;
});

ohanadogs.controller('detailsCtrl', function ($scope,dog,$uibModalInstance) {
    $scope.data = dog[0];

    $scope.close = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
