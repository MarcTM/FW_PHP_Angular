ohanadogs.controller('mainCtrl', function($scope, names, bbreeds,services,$uibModal,CommonService) {
    cont=2
    $scope.index = 0;
    $scope.names = names;
    $scope.breeds = bbreeds.slice(0,cont);
    
    $scope.showMore = function(){
      cont=cont+2;
      $scope.breeds = bbreeds.slice(0,cont);
      if (cont == 6) {
        var prov = document.querySelector('#click_scroll');
        prov.remove();
      }
    }
    
    $scope.selectSearch = function(){
      if ($scope.nameSelected.name) {
        name = $scope.nameSelected.name;
      }else if($scope.nameSelected){
        name = $scope.nameSelected;
      }else{
        console.log("hola2")
      }
      if (name) {
        services.get('home', 'select_auto_name',name).then(function (response) {
          $scope.dog = response;
        });
      }
    }
    
    $scope.open = function (chip) {
        CommonService.openModal(chip,'home','details_list');
    };

});

ohanadogs.controller('detailsBCtrl', function($scope,selbreed,$uibModal,CommonService) {
  $scope.selbreed = selbreed;
  
  $scope.open = function (chip) {
      CommonService.openModal(chip,'home','details_list');
  };
});

ohanadogs.controller('menuCtrl', function(loginService) {
  loginService.login();
});
