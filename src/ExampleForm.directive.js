(function() {
    'use strict';

    angular
        .module('app.exampleForm')
		.directive('jxlExampleForm', jxlExampleForm);

    function jxlExampleForm()
    {
        console.log("jxlExampleForm");
        return {
            restrict: 'E',
            scope: {},
            controller: 'ExampleFormController',
            controllerAs: 'vm',
            templateUrl: 'ExampleForm.directive.html'
        };
    }

})();


