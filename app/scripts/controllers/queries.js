'use strict';

angular.module('zenQueryUiApp')
	.controller('QueriesCtrl', function ($scope, Query) {
		var findAll = function() {
			$scope.queries = Query.findAll(
				function(queries) {
					$scope.total = queries.length;
				}
			);
		};

		$scope.selectRow = function(row) {
			$scope.selectedRow = row;
		};

		$scope.showDetails = function(queryId) {
			$scope.query = Query.get(
				{
					queryId: queryId
				}
			);
		};

		$scope.new = function() {
			$scope.query = null;
		};

		$scope.create = function() {
			$scope.query = Query.create(
				$scope.query,
				function() {
					findAll();
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
	});
