var app = angular.module('myApp', []);

app.controller('ParentController', function ($scope, $rootScope) {
	this.name = "Parent";

});

app.controller('ChildController', function ($scope, $rootScope) {

	this.name = "Child";

	$scope.reset = function () {
		$rootScope.name = "Reset By Child";
	};

});
