'use strict';

angular.module('zenQueryUiApp')
	.controller('MainCtrl', function ($scope, DatabaseConnection) {
		var today = new Date();
    	$scope.currentYear = today.getFullYear();

		$scope.databaseConnections = DatabaseConnection.findAll(
			function(databaseConnections) {
				$scope.total = databaseConnections.length;
			}
		);

		$scope.showDetails = function(databaseConnectionId) {
			$scope.databaseConnection = DatabaseConnection.get(
				{ databaseConnectionId: databaseConnectionId }
			);
		}
	}
);
