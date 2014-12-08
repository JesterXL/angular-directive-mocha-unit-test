(function () {
    'use strict';

    angular
        .module('app')
        .factory('nameModel', nameModel);

    function nameModel()
    {
        var nameModel = {
            name: "Jesse Warden"
        };
        return nameModel;
    }



})();
