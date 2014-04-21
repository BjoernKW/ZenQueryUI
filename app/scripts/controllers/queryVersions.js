'use strict';

angular.module('zenQueryUiApp')
	.controller('QueryVersionCtrl', function (
		$scope,
		QueryVersion
	) {
		var findAll = function() {
			$scope.queryVersions = QueryVersion.findAll(
				function(queryVersions) {
					$scope.total = queryVersions.length;
				}
			);
		};

		$scope.selectRow = function(row) {
			$scope.selectedRow = row;
		};

		$scope.showDetails = function(queryVersionId) {
			$scope.queryVersion = QueryVersion.get(
				{
					queryVersionId: queryVersionId
				}
			);
		};

		$scope.new = function() {
			$scope.queryVersion = null;
		};

		$scope.create = function() {
			$scope.queryVersion = QueryVersion.create(
				$scope.queryVersion,
				function() {
					findAll();
				}
			);
		};

		$scope.update = function() {
			QueryVersion.update(
				$scope.queryVersion,
				function() {
					findAll();
				}
			);
		};

		$scope.delete = function(queryVersionId) {
			$scope.queryVersion = QueryVersion.delete(
				{
					queryVersionId: queryVersionId
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
