'use strict';

angular.module('zenQueryUiApp')
	.controller('DatabaseConnectionsCtrl', function ($scope, DatabaseConnection) {
		var findAll = function() {
			$scope.databaseConnections = DatabaseConnection.findAll(
				function(databaseConnections) {
					$scope.total = databaseConnections.length;
				}
			);
		};

		$scope.showDetails = function(databaseConnectionId) {
			$scope.databaseConnection = DatabaseConnection.get(
				{
					databaseConnectionId: databaseConnectionId
				}
			);
		};

		$scope.new = function() {
			$scope.databaseConnection = null;
		};

		$scope.create = function() {
			$scope.databaseConnection = DatabaseConnection.create(
				$scope.databaseConnection,
				function() {
					findAll();
				}
			);
		};

		$scope.update = function() {
			DatabaseConnection.update(
				$scope.databaseConnection,
				function() {
					findAll();
				}
			);
		};

		$scope.delete = function(databaseConnectionId) {
			$scope.databaseConnection = DatabaseConnection.delete(
				{
					databaseConnectionId: databaseConnectionId
				},
				function() {
					findAll();
				}
			);
		};

		var today = new Date();

		$scope.currentYear = today.getFullYear();

		findAll();
	}
);
