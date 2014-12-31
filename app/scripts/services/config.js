'use strict';

angular.module('services.config', [])
  .constant('configuration', {
    apiRootURL: '../',
    deleteAllowed: 'false',
    databaseEditAllowed: 'false'
  });

angular.module('zenQueryServices', ['ngResource', 'services.config']);
