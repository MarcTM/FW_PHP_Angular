marcangular.controller('shopCtrl', function($scope,services,shop_type,$uibModal,CommonService,toastr) {

    // Shop
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    $scope.products = shop_type;

    // if(shop_type.length===0){
    //     console.log("no");
    //     $scope.searchResult = "true";
    // }else{
    //     console.log("si");
    //     $scope.searchResult = "false";
    //     $scope.products = shop_type;
    // }
    


    // Select product
    $scope.select_product = function(event){
        var id = event.target.id;
        localStorage.setItem('infoprod', id);

        location.href = '#/details';
    }

});