marcangular.controller('detailsCtrl', function($scope,services,details_id,$uibModal,CommonService,toastr) {
    
    // Show product
    $scope.idproduct = details_id.idproduct;
    $scope.img = details_id.img;
    $scope.codprod = details_id.codprod;
    $scope.product = details_id.product;
    $scope.ingredients = details_id.ingredients;
    $scope.flavour = details_id.flavour;
    $scope.brand = details_id.brand;
    $scope.kg = details_id.kg;
    $scope.datecaducity = details_id.datecaducity;
    $scope.descr = details_id.descr;
    $scope.price = details_id.price;



    // Add to cart
    $scope.addtocart = function(event){
        var prod = event.target.id;
        console.log(prod);
    }

});