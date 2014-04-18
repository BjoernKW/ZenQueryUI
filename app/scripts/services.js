'use strict';

var zenQueryAPIRoot = 'http://localhost:8080';
var zenQueryServices = angular.module('zenQueryServices', ['ngResource']);

zenQueryServices
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
	.factory('QueryFinder', function($resource) {
		return $resource(zenQueryAPIRoot + '/api/v1/queries/:action/:databaseConnectionId',
			{ },
			{
				findByDatabaseConnectionId: {
					method: 'GET',
					params: { action: 'findByDatabaseConnectionId' },
					isArray: true
				},
			}
		);
	})
	.factory('QueryVersion', function($resource) {
		return $resource(zenQueryAPIRoot + '/api/v1/queryVersions/:queryVersionId',
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
	.factory('QueryVersionFinder', function($resource) {
		return $resource(zenQueryAPIRoot + '/api/v1/queryVersions/:action/:queryId',
			{ },
			{
				findByQueryId: {
					method: 'GET',
					params: { action: 'findByQueryId' },
					isArray: true
				},
				findPreviousVersionsByQueryId: {
					method: 'GET',
					params: { action: 'findPreviousVersionsByQueryId' },
					isArray: true
				},
				findCurrentByQueryId: {
					method: 'GET',
					params: { action: 'findCurrentByQueryId' }
				}
			}
		);
	})
	.factory('ResultSet', function($resource) {
		return $resource(zenQueryAPIRoot + '/api/v1/resultSetForQuery/:queryId',
			{ },
			{
				get: {
					method: 'GET',
					isArray: true
				}
			}
		);
	})
	.factory('ResultSetFinder', function($resource) {
		return $resource(zenQueryAPIRoot + '/api/v1/resultSetForQuery/:queryId/:version',
			{ },
			{
				get: {
					method: 'GET',
					isArray: true
				}
			}
		);
	});
