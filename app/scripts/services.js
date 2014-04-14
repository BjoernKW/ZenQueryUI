var zenQueryServices = angular.module('zenQueryServices', ['ngResource']);
 
zenQueryServices.factory('Database connection', ['$resource',
  function($resource){
    return $resource('http://localhost:8080/api/v1/databaseConnections/:databaseConnectionId',
    	{ },
    	{
	      query: {
	      	method: 'GET',
	      	params: { phoneId: '1'},
	      	isArray: true
	      }
    	}
    );
  }
]);