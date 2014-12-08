(function () {
    'use strict';

    angular
        .module('app')
        .factory('nameModel', nameModel);

    function nameModel()
    {

        var nameList = [
                        "Jesse Warden", 
                        "Chad Mott", 
                        "Bruce Campbell", 
                        "Susan Sarandon", 
                        "Julianne Moore"
                        ];

        var getRandomName = function()
        {
            var len = nameList.length;
            var num = Math.round(Math.random() * len);
            return nameList[num];
        };

        var nameModel = {
            name: "Jesse Warden",
            changeToRandomName: function()
            {
                this.name = getRandomName();
            }
        };

        return nameModel;
    }



})();
