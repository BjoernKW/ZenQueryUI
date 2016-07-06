'use strict';

angular.module('services.config', [])
  .constant('configuration', {
    apiRootURL: 'http://localhost:8080/',
    deleteAllowed: 'true',
    databaseEditAllowed: 'true'
  });

angular.module('zenQueryServices', ['ngResource', 'services.config']);
