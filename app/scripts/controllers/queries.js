'use strict';

angular.module('zenQueryUiApp')
	.controller('QueriesCtrl', function ($scope, Query, QueryVersion, DatabaseConnection, ResultSet) {
		var findAll = function() {
			$scope.queries = Query.findAll(
				function(queries) {
					$scope.total = queries.length;
				}
			);
		};

		var findAllDatabaseConnections = function() {
			$scope.databaseConnections = DatabaseConnection.findAll();
		};

		$scope.selectRow = function(row) {
			$scope.selectedRow = row;
		};

		$scope.showDetails = function(queryId) {
			$scope.query = Query.get(
				{
					queryId: queryId
				},
				function(query) {
					$scope.queryVersion = { };
					$scope.queryVersion.content = query.content;
				}
			);
		};

		$scope.execute = function() {
			$scope.resultSet = ResultSet.get(
				{
					queryId: $scope.query.id
				},
				function(resultSet) {
					console.log(resultSet);
				}
			);
		};

		$scope.new = function() {
			$scope.query = null;
			$scope.queryVersion = null;
		};

		$scope.create = function() {
			$scope.query = Query.create(
				$scope.query,
				function(query) {
					$scope.queryVersion.queryId = query.id;
					$scope.queryVersion.version = 1;
					$scope.queryVersion.isCurrentVersion = true;

					$scope.queryVersion = QueryVersion.create(
						$scope.queryVersion,
						function() {
							findAll();
						}
					);
				}
			);
		};

		$scope.update = function() {
			Query.update(
				$scope.query,
				function() {
					findAll();
				}
			);
		};

		$scope.delete = function(queryId) {
			$scope.query = Query.delete(
				{
					queryId: queryId
				},
				function() {
					findAll();
				}
			);
		};

		var today = new Date();

		$scope.currentYear = today.getFullYear();

		findAll();
		findAllDatabaseConnections();
	});
