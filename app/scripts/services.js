var zenQueryServices = angular.module('zenQueryServices', ['ngResource']);
 
zenQueryServices.factory('DatabaseConnection', ['$resource',
	function($resource) {
		return $resource('http://localhost:8080/api/v1/databaseConnections/:databaseConnectionId',
			{ },
			{
		      findAll: {
		      	method: 'GET',
		      	params: { databaseConnectionId: 'findAll' },
		      	isArray: true
		      },
		      get: {
		      	method: 'GET',
		      	isArray: false
		      }
			}
		);
	}
]);
