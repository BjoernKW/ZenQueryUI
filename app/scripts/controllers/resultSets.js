'use strict';

angular.module('zenQueryUiApp')
	.controller('ResultSetsCtrl', function ($scope) {
		$scope.selectRow = function(row) {
			$scope.selectedRow = row;
		};

		var today = new Date();

		$scope.currentYear = today.getFullYear();
	});
