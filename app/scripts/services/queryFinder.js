'use strict';

angular.module('zenQueryServices')
	.factory('QueryFinder', function($resource, configuration) {
		return $resource(configuration.apiRootURL + 'api/v1/queries/:action/:databaseConnectionId',
			{ },
			{
				findByDatabaseConnectionId: {
					method: 'GET',
					params: { action: 'findByDatabaseConnectionId' },
					isArray: true
				},
			}
		);
	});
	