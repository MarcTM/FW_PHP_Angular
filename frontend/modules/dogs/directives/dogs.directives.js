ohanadogs.directive('datepicker', function () {
    return {
        require: 'ngModel',
        link: function (scope, el, attr, ngModel) {
            $(el).datepicker({
                dateFormat: 'mm/dd/yy',
                changeMonth:true,
                changeYear:true,
                yearRange:"2000:2020",
                maxDate:0,
                onSelect: function (dateText) {
                    scope.$apply(function () {
                        ngModel.$setViewValue(dateText);
                    });
                }
            });
        }
    };
});
