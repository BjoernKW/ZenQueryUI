'use strict';

var zenQueryAPIRoot = 'http://localhost:8080';
var zenQueryServices = angular.module('zenQueryServices', ['ngResource']);

zenQueryServices
	.factory("Utility", function() {                                                                                                                                                   
    	return {                                                                                                                                                                                                              
			selectRow: function(row) {
				$scope.selectedRow = row;
    		}
    	}
    })
	.factory('DatabaseConnection', function($resource) {
		return $resource(zenQueryAPIRoot + '/api/v1/databaseConnections/:databaseConnectionId',
			{ },
			{
				findAll: {
					method: 'GET',
					params: { databaseConnectionId: 'findAll' },
					isArray: true
				},
				get: {
					method: 'GET'
				},
				create: {
					method: 'POST'
				},
				update: {
					params: { databaseConnectionId: '@id' },
					method: 'PUT'
				},
				delete: {
					method: 'DELETE'
				}
			}
		);
	})
	.factory('Query', function($resource) {
		return $resource(zenQueryAPIRoot + '/api/v1/queries/:queryId',
			{ },
			{
				findAll: {
					method: 'GET',
					params: { queryId: 'findAll' },
					isArray: true
				},
				get: {
					method: 'GET'
				},
				create: {
					method: 'POST'
				},
				update: {
					params: { queryId: '@id' },
					method: 'PUT'
				},
				delete: {
					method: 'DELETE'
				}
			}
		);
	})
	.factory('QueryVersion', function($resource) {
		return $resource(zenQueryAPIRoot + '/api/v1/queries/:queryVersionId',
			{ },
			{
				findAll: {
					method: 'GET',
					params: { queryVersionId: 'findAll' },
					isArray: true
				},
				get: {
					method: 'GET'
				},
				create: {
					method: 'POST'
				},
				update: {
					params: { queryVersionId: '@id' },
					method: 'PUT'
				},
				delete: {
					method: 'DELETE'
				}
			}
		);
	})
	.factory('ResultSet', function($resource) {
		return $resource(zenQueryAPIRoot + '/api/v1/resultSetForQuery/:queryId/:version',
			{ },
			{
				get: {
					method: 'GET'
				}
			}
		);
	});
