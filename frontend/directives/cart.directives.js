marcangular.directive('cartDirective', ['services','toastr', function(services,toastr){
    return {
        restrict: 'A',
        link: function(scope,element,attr){
            element.on('click', function(){
                if(localStorage.getItem('id_token')){
                    services.post('cart','addproduct',{'id':attr.id, 'token':localStorage.getItem('id_token')}).then(function(data){
                        if(data==="exists"){
                            toastr.error("You already have this product in your cart", "ERROR");
                        }else{
                            toastr.success("Product added successfully to cart", "PRODUCT ADDED");
                        }
                    });
                }else{
                    toastr.error("You are not loged", "ERROR");
                }
            })
        }
    };
}]);

marcangular.directive('cartDirectiveDelete', ['services','toastr', function(services,toastr){
    return {
        restrict: 'A',
        link: function(scope,element,attr){
            element.on('click', function(){
                services.post('cart', 'delete', {"token":localStorage.getItem('id_token'), "id":attr.id});
                toastr.success("Product deleted successfully from cart. RELOAD THE PAGE", "PRODUCT DELETED");
            })
        }
    };
}])