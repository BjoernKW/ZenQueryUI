'use strict';

angular.module('services.config', [])
  .constant('configuration', {
    apiRootURL: '../',
    deleteAllowed: 'true',
    databaseEditAllowed: 'true'
  });
