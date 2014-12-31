'use strict';

angular.module('zenQueryServices')
	.factory('ResultSetFinder', function($resource, configuration) {
		return $resource(configuration.apiRootURL + 'api/v1/resultSetForQuery/:queryId/:version',
			{ },
			{
				get: {
					method: 'GET',
					isArray: true
				}
			}
		);
	});
	