'use strict';

angular.module('services.config', [])
  .constant('configuration', {
    apiRootURL: 'http://localhost:8080/',
    deleteAllowed: 'false',
    databaseEditAllowed: 'true'
  });
