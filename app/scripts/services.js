'use strict';

var zenQueryAPIRoot = 'http://localhost:8080';
var zenQueryServices = angular.module('zenQueryServices', ['ngResource']);

zenQueryServices.factory('DatabaseConnection', function($resource) {
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
});
