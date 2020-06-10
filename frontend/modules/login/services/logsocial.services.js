marcangular.factory("socialService", ['$rootScope', 'services','toastr','$timeout',
function ($rootScope, services, toastr, $timeout) {

	var service = {};
	service.initialize = initialize;
    return service;

    function initialize() {
        var config = {
            apiKey: apikey_firebase,
            authDomain: "social-login-d7b12.firebaseapp.com",
            databaseURL: "https://social-login-d7b12.firebaseio.com",
            projectId: "social-login-d7b12",
            storageBucket: "social-login-d7b12.appspot.com",
            messagingSenderId: "580198600095"
        };
         
        firebase.initializeApp(config);
    };

}]);



marcangular.factory("GitHubService", ['$rootScope','services','toastr','$timeout','toastr','$timeout','loginService',
function ($rootScope,services,toastr,$timeout,loginService) {

	var service = {};
	service.login = login;
    return service;

    function login() {
        var provider = new firebase.auth.GithubAuthProvider();
        var authService = firebase.auth();

        authService.signInWithPopup(provider)
        .then(function(result) {
			services.post('login','check_user_social',{'user':result.additionalUserInfo.username, 'email':result.user.email, 'avatar':result.user.photoURL, 'iduser':result.additionalUserInfo.username}).then(function (user) {
				if(user==="no"){
					services.post('login','insert_user_social',{'user':result.additionalUserInfo.username, 'email':result.user.email, 'avatar':result.user.photoURL, 'iduser':result.additionalUserInfo.username}).then(function (data) {
						localStorage.setItem('id_token', data);
						location.href = '#/';
					});
				}else{
					localStorage.setItem('id_token', user.token);
					toastr.success("You have successfully loged in", "LOGGING IN");
					$timeout( function(){
						loginService.login();
						location.href = '#/';
					}, 2000 );
				}
			});
		});
    };

}]);



marcangular.factory("googleService", ['$rootScope','services','toastr','$timeout','loginService',
function ($rootScope,services,toastr,$timeout,loginService) {

	var service = {};
	service.login = login;
    return service;

    function login() {
    	var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('email');
        var authService = firebase.auth();

        authService.signInWithPopup(provider)
        .then(function(result) {
			services.post('login','check_user_social',{'user':result.user.displayName, 'avatar':result.user.photoURL, 'iduser':result.user.uid}).then(function (user) {
				if(user==="no"){
					services.post('login','insert_user_social',{'user':result.user.displayName, 'email':result.user.email, 'avatar':result.user.photoURL, 'iduser':result.user.uid}).then(function (data) {
						localStorage.setItem('id_token', data);
						location.href = '#/';
					});
				}else{
					localStorage.setItem('id_token', user.token);
					toastr.success("You have successfully loged in", "LOGGING IN");
					$timeout( function(){
						loginService.login();
						location.href = '#/';
					}, 2000 );
				}
			});
		});
    };

}]);
