'use strict';

angular.module('zenQueryUiApp')
	.controller('DatabaseConnectionsCtrl', function (
		$scope,
		DatabaseConnection,
		configuration
	) {
		var filter = function(databaseConnections) {
			var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
			var end = begin + $scope.itemsPerPage;

			databaseConnections.sort(function(a, b) {
				return a.id - b.id;
			});

			$scope.filteredDatabaseConnections = databaseConnections.slice(begin, end);
		};

		var findAll = function() {
			$scope.databaseConnections = DatabaseConnection.findAll(
				function(databaseConnections) {
					$scope.total = databaseConnections.length;
					filter(databaseConnections);
				}
			);
		};

		$scope.selectRow = function(row) {
			$scope.selectedRow = row;
		};

		$scope.showDetails = function(databaseConnectionId) {
			$scope.databaseConnection = DatabaseConnection.get(
				{
					databaseConnectionId: databaseConnectionId
				}
			);
		};

		$scope.selectPage = function (page) {
			$scope.currentPage = page;
			filter($scope.databaseConnections);
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
			DatabaseConnection.delete(
				{
					databaseConnectionId: databaseConnectionId
				},
				function() {
					findAll();
				}
			);
		};

		$scope.configuration = configuration;

		var today = new Date();
		$scope.currentYear = today.getFullYear();

		$scope.filteredDatabaseConnections = [];
		$scope.currentPage = 1;
		$scope.itemsPerPage = 5;
		$scope.maxSize = 5;

		findAll();
	});
