'use strict';

angular.module('zenQueryServices')
	.factory('Query', function($resource, configuration) {
		return $resource(configuration.apiRootURL + 'api/v1/queries/:queryId',
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
	});
	