(function () {

    angular.module('app.exampleForm')
        .controller('ExampleFormController', ExampleFormController);

    /* ngInject */
    function ExampleFormController($scope, nameModel)
    {
        console.log("ExampleFormController");
        var vm = this;
        vm.datNameThough = nameModel;
        vm.onDatNameChangeHotAction = function()
        {
            console.log("before:", nameModel.name);
            nameModel.changeToRandomName();
            console.log("after:", nameModel.name);
        };
        
    }
})();
