angular.module("Primero", [])
	.controller("AlumnoController", ["$scope", "$http", function($scope, $http) {
		$scope.alumno = {
				nombre: "Juan Blanco",
				curso: "3° ESO"
			}
	}]);