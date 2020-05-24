ohanadogs.controller('ubicationCtrl', function($scope,services,ubication_map,ubications,provinces) {
	$scope.markers = [];
	$scope.index = 0;
	$scope.provinces = provinces;
	$scope.ubications = ubications;
	ubication_map.cargarmap($scope.ubications,$scope);

	$scope.searchMarker = function(chip){
		ubication_map.cargarmap($scope.ubications,$scope,chip);
	}
	
	$scope.takeLatLong = function(){
		services.get('ubication', 'get_lat_lng', $scope.provSelected.nombre).then(function (response) {
           	ubication_map.cargarmap($scope.ubications,$scope,false,response[0],$scope.provSelected.nombre);
        });
	}
});
