marcangular.controller('shopCtrl', function($scope,shop_type) {

    if(shop_type.length>0){

        $scope.yesShop = true;
        $scope.noShop = false;
        
        if(shop_type.length<6){
            $scope.showPag = false;
            $scope.products = shop_type;
        }else{
            $scope.showPag = true;
            $scope.pageSize = 5;
            $scope.currentPage = 1;
            $scope.products = shop_type;
        }

    }else{

        $scope.yesShop = false;
        $scope.noShop = true;
        $scope.showPag = false;

    }
    


    // Select product
    $scope.select_product = function(event){
        var id = event.target.id;
        localStorage.setItem('infoprod', id);

        location.href = '#/details';
    }

});