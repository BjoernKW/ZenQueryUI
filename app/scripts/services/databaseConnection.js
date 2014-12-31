'use strict';

angular.module('zenQueryServices')
	.factory('DatabaseConnection', function($resource, configuration) {
		return $resource(configuration.apiRootURL + 'api/v1/databaseConnections/:databaseConnectionId',
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
	});
	