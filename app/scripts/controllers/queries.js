'use strict';

angular.module('zenQueryUiApp')
	.controller('QueriesCtrl', function (
		$scope,
		$routeParams,
		Query,
		QueryFinder,
		QueryVersion,
		QueryVersionFinder,
		DatabaseConnection,
		ResultSet,
		configuration
	) {
		var filter = function(queries) {
			var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
			var end = begin + $scope.itemsPerPage;

			queries.sort(function(a, b) {
				return a.id - b.id;
			});

			$scope.filteredQueries = queries.slice(begin, end);
		};

		var findAll = function() {
			if ($routeParams.databaseConnectionId) {
				$scope.queries = QueryFinder.findByDatabaseConnectionId(
					{
						databaseConnectionId: $routeParams.databaseConnectionId
					},
					function(queries) {
						$scope.total = queries.length;
						filter(queries);
					}
				);
			} else {
				$scope.queries = Query.findAll(
					function(queries) {
						$scope.total = queries.length;
						filter(queries);
					}
				);
			}
		};

		var findAllDatabaseConnections = function() {
			$scope.databaseConnections = DatabaseConnection.findAll();
		};

		var showVariables = function(query) {
			var matches = query.content.match(/\?/g);
			var variableCount = matches !== null ? matches.length : 0;
			var variables = [ ];
			for (var i = 0; i < variableCount; i++) {
				variables.push( { id: i } );
			}
			$scope.variables = variables;
			$scope.variableValues = new Array(variableCount);
		};

		$scope.selectRow = function(row) {
			$scope.selectedRow = row;
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

					showVariables($scope.query);

					$scope.execute();
				}
			);
		};

		$scope.execute = function() {
			$scope.joinedVariables = '';
			if ($scope.variableValues) {
				if ($scope.variableValues.length > 0) {
					$scope.joinedVariables = $scope.variableValues.join(',');
				}
			}

			$scope.resultSet = ResultSet.get(
				{
					queryId: $scope.query.id,
					variables: $scope.joinedVariables,
					size: $scope.maxSize
				},
				function() {
					var currentContent = $scope.queryVersion.content;
					$scope.queryVersions = QueryVersionFinder.findPreviousVersionsByQueryId(
						{
							queryId: $scope.query.id
						},
						function() {
							$scope.queryVersion.content = currentContent;

							$scope.queryVersions.sort(function(a, b) {
								return b.id - a.id;
							});
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
			$scope.variables = null;
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
								showVariables($scope.query);
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
							showVariables($scope.query);
							$scope.execute();
						}
					);
				}
			}
		};

		$scope.delete = function(queryId) {
			Query.delete(
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
