marcangular.factory("loginService", ['$location', '$rootScope', 'services',
function ($location, $rootScope, services) {
	var service = {};
	service.login = login;
	service.logout = logout;
    return service;

    function login() {
    	var token = localStorage.getItem('id_token');
        if (token){
            $rootScope.userNotLoged = false;
            $rootScope.userLoged = true; 
            services.get('login', 'typeuser',token).then(function (response) {
                if(response.type === "user"){
                    $rootScope.showHome = true;
                    $rootScope.showShop = true;
                    $rootScope.showServices = true;
                    $rootScope.showAboutus = true;
                    $rootScope.showContact = true;
	            }else{
                    $rootScope.showHome = true;
                    $rootScope.showShop = true;
                    $rootScope.showServices = true;
                    $rootScope.showAboutus = true;
                    $rootScope.showContact = true;
	            }
            });
        }else{
            $rootScope.userNotLoged = true;
            $rootScope.userLoged = false;
            
            $rootScope.showHome = true;
            $rootScope.showShop = true;
            $rootScope.showServices = true;
            $rootScope.showAboutus = true;
            $rootScope.showContact = true;
        }
    }

    function logout() {
        localStorage.removeItem('id_token');
    }
}]);