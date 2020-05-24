marcangular.controller('contactCtrl', function($scope,services,toastr){
	$scope.contact = {
        inputName: "",
        inputEmail: "",
        inputSubject: "",
        inputMessage: ""
    };
    
    $scope.SubmitContact = function () {
        var data = {"name": $scope.contact.inputName, "email": $scope.contact.inputEmail, 
        "matter": $scope.contact.inputSubject, "message": $scope.contact.inputMessage,"token":'contact_form'};
        var contact_form = JSON.stringify(data);
        
        services.post('contact', 'send_email', contact_form).then(function () {
            toastr.success('El mensaje ha sido enviado correctamente', 'Mensaje enviado',{
            closeButton: true
            });

            // $scope.contact = {
            //     inputName: "",
            //     inputEmail: "",
            //     inputSubject: "",
            //     inputMessage: "",
            // };
        });
    };
});
