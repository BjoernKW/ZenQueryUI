'use strict';

angular.module('services.config', [])
  .constant('configuration', {
    apiRootURL: '@@apiRootURL',
    deleteAllowed: '@@deleteAllowed',
    databaseEditAllowed: '@@databaseEditAllowed'
  });

angular.module('zenQueryServices', ['ngResource', 'services.config']);
