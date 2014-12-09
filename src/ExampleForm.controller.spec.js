(function () {
/* jshint -W117, -W030 */
'use strict';
describe('app', function()
{
	var $compile, $rootScope, $controller;

	beforeEach(function()
	{
        module('app');
	});

	beforeEach(inject(function(_$compile_, _$rootScope_, _$controller_)
	{
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		$controller = _$controller_;
	}));

	it('should have a basic working unit test', function()
	{
		expect(true).to.equal(true);
	});

	it('should grab reference to nameModel internally ensuring injections worked', function()
	{
		var $scope = $rootScope.$new();
		// you can optionally just make POJO's
		// var $scope = {}; 
		var nameModel = {name: 'test'};
		var controller = $controller('ExampleFormController', { $scope: $scope, nameModel: nameModel });
		
		expect(controller.datNameThough.name).to.equal('test');
	});

	it('should have a basic button ensuring template loaded via template cache', function()
	{
	    var element = $compile("<jxl-example-form></jxl-example-form>")($rootScope);
	    $rootScope.$digest();
	    expect(element.html()).to.contain("<button");
	});
	
});

describe('Advanced Mode: Testing whole enchilada', function()
{
	var $compile, $rootScope, $controller;

	beforeEach(function()
	{
		// we have to mock the Controller. This is made BEFORE injections.
		module('app', function($provide, $controllerProvider)
		{
	        $controllerProvider.register('ExampleFormController', function($scope, nameModel)
	        {
				var vm = this;
        		vm.datNameThough = nameModel;
	        });
	        $provide.factory('nameModel', function()
	        {
	            var nameModel = {
		            name: "Frozen Fish Head"
		    	};
		    	return nameModel;
	        });
	    });
	    module('app');
	});

	beforeEach(inject(function(_$compile_, _$rootScope_, _$controller_)
	{
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		$controller = _$controller_;
	}));

	it('should have a title with specific name in model', function()
	{	
    	var $scope = $rootScope.$new();
    	var element = $compile("<jxl-example-form></jxl-example-form>")($scope);
	    $rootScope.$digest();
	    var datH20GotTheFunkyFlow = element.find('h2');
	    expect(datH20GotTheFunkyFlow.html()).to.equal('Sup Homey: Frozen Fish Head');
	});
});

}());