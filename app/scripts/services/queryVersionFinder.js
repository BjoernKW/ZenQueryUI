'use strict';

angular.module('zenQueryServices')
	.factory('QueryVersionFinder', function($resource, configuration) {
		return $resource(configuration.apiRootURL + 'api/v1/queryVersions/:action/:queryId',
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
	});
	