'use strict';

angular.module('zenQueryServices')
	.factory('QueryVersion', function($resource, configuration) {
		return $resource(configuration.apiRootURL + 'api/v1/queryVersions/:queryVersionId',
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
	});
	