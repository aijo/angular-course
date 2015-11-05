angular.module('myApp', [])
	.controller('formController', function($scope) {
		$scope.formData = {
			name: 'Jo'
		}

		$scope.register = function() {
			alert('Hi' + $scope.formData.name);
		}
	})