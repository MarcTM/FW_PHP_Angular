marcangular.controller('cartCtrl', function($scope,services) {

    if(localStorage.getItem('id_token')){
        
            services.post('cart', 'showcart', {"token":localStorage.getItem('id_token')}).then(function (cart) {
                if(cart.length===0){
                    $scope.cartresults = false;
                    $scope.cartnoresults = true;
                }else{
                    $scope.cartresults = true;
                    $scope.cartnoresults = false;

                    $scope.cartc = cart;
                }
            });

    }else{
            $scope.cartresults = false;
            $scope.cartnoresults = true;
    }

});