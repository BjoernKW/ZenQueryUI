'use strict';

var zenQueryServices = angular.module('zenQueryServices', ['ngResource']);
 
zenQueryServices.factory('DatabaseConnection', ['$resource',
	function($resource) {
		var zenQueryAPIRoot = 'http://localhost:8080';

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
					method: 'PUT'
				},
				delete: {
					method: 'DELETE'
				}
			}
		);
	}
]);
