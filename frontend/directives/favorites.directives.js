marcangular.directive('favDirective', ['services','toastr', function(services,toastr){
    return {
        restrict: 'A',
        link: function(scope,element,attr){
            element.on('click', function(){
                if(localStorage.getItem('id_token')){
                    if(attr.src==="frontend/assets/img/favorites/corazonblanco.png"){
                        services.post('favorites','addfav',{'id':attr.id, 'token':localStorage.getItem('id_token')});
                        attr.$set("src", "frontend/assets/img/favorites/corazonrojo.png");
                    }else{
                        services.post('favorites','delfav',{'id':attr.id, 'token':localStorage.getItem('id_token')});
                        attr.$set("src", "frontend/assets/img/favorites/corazonblanco.png");
                    }
                }else{
                    toastr.error("You must be loged to add to favorites", "LOG IN");
                }
            })
        }
    };
}])



marcangular.directive('drawfavDirective', ['services', function(services){
    return {
        restrict: 'A',
        link: function(scope,element,attr){
            if(localStorage.getItem('id_token')){
                services.post('favorites','checkfav',{'token':localStorage.getItem('id_token'), 'prod':attr.id}).then(function(data){
                    if(attr.id===data.prod){
                        attr.$set("src", "frontend/assets/img/favorites/corazonrojo.png");

                    }else{
                        attr.$set("src", "frontend/assets/img/favorites/corazonblanco.png");
                    }
                })
            }else{
                attr.$set("src", "frontend/assets/img/favorites/corazonblanco.png");
            }
        }
    };
}])