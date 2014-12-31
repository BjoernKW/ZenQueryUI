'use strict';

angular.module('zenQueryServices')
	.factory('ResultSet', function($resource, configuration) {
		return $resource(configuration.apiRootURL + 'api/v1/resultSetForQuery/:queryId/:variables/size/:size',
			{ },
			{
				get: {
					method: 'GET',
					isArray: true
				}
			}
		);
	});
	