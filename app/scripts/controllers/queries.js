'use strict';

angular.module('zenQueryUiApp')
	.controller('QueriesCtrl', function (
		$scope,
		Query,
		QueryVersion,
		QueryVersionFinder,
		DatabaseConnection,
		ResultSet,
		configuration
	) {
		var filter = function(queries) {
			var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
			var end = begin + $scope.itemsPerPage;

			$scope.filteredQueries = queries.slice(begin, end);
		};

		var findAll = function() {
			$scope.queries = Query.findAll(
				function(queries) {
					$scope.total = queries.length;
					filter(queries);
				}
			);
		};

		var findAllDatabaseConnections = function() {
			$scope.databaseConnections = DatabaseConnection.findAll();
		};

		$scope.selectRow = function(row) {
			$scope.selectedRow = row;
		};

		$scope.numberOfPages = function () {
			return Math.ceil($scope.queries.length / $scope.itemsPerPage);
		};

		$scope.selectPage = function (page) {
			$scope.currentPage = page;
			filter($scope.queries);
		};

		$scope.showDetails = function(queryId) {
			$scope.query = Query.get(
				{
					queryId: queryId
				},
				function(query) {
					$scope.queryVersion = { };
					$scope.queryVersion.content = query.content;

					$scope.execute();
				}
			);
		};

		$scope.execute = function() {
			$scope.resultSet = ResultSet.get(
				{
					queryId: $scope.query.id
				},
				function() {
					var currentContent = $scope.queryVersion.content;
					$scope.queryVersions = QueryVersionFinder.findPreviousVersionsByQueryId(
						{
							queryId: $scope.query.id
						},
						function() {
							$scope.queryVersion.content = currentContent;
						}
					);
				}
			);
		};

		$scope.loadPreviousVersion = function(previousQueryVersionContent) {
			if ($scope.queryVersion !== null) {
				$scope.queryVersion.content = previousQueryVersionContent;
			}
		};


		$scope.new = function() {
			$scope.query = null;
			$scope.queryVersion = null;
			$scope.queryVersions = null;
		};

		$scope.create = function() {
			if ($scope.queryVersion !== null) {
				if ($scope.queryVersion.content.length > 0) {
					if ($scope.query !== null) {
						var query = $scope.query;
						query.content = $scope.queryVersion.content;

						$scope.query = Query.create(
							query,
							function() {
								findAll();
								$scope.execute();
							}
						);
					}
				}
			}
		};

		$scope.update = function() {
			if ($scope.queryVersion !== null) {
				if ($scope.queryVersion.content.length > 0) {
					$scope.query.content = $scope.queryVersion.content;
					Query.update(
						$scope.query,
						function() {
							findAll();
							$scope.execute();
						}
					);
				}
			}
		};

		$scope.delete = function(queryId) {
			$scope.query = Query.delete(
				{
					queryId: queryId
				},
				function() {
					$scope.new();
					findAll();
				}
			);
		};

		$scope.configuration = configuration;

		var today = new Date();
		$scope.currentYear = today.getFullYear();

		$scope.filteredQueries = [];
		$scope.currentPage = 1;
		$scope.itemsPerPage = 5;
		$scope.maxSize = 5;

		findAll();
		findAllDatabaseConnections();
	});
