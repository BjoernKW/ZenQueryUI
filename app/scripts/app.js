'use strict';

angular
  .module('zenQueryUiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'pascalprecht.translate',
    'ui.select2',
    'ui.bootstrap',
    'zenQueryServices'
  ])
  .config(function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/databaseConnections.html',
        controller: 'DatabaseConnectionsCtrl'
      })
      .when('/databaseConnections', {
        templateUrl: 'views/databaseConnections.html',
        controller: 'DatabaseConnectionsCtrl'
      })
      .when('/queries', {
        templateUrl: 'views/queries.html',
        controller: 'QueriesCtrl'
      })
      .when('/queryVersions', {
        templateUrl: 'views/queryVersions.html',
        controller: 'QueryVersionsCtrl'
      })
      .when('/resultSets', {
        templateUrl: 'views/resultSets.html',
        controller: 'ResultSetsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $translateProvider.translations('en_UK', {
      'NAME': 'Name',
      'URL': 'URL',
      'USERNAME': 'Username',
      'PASSWORD': 'Password',
      'TOTAL': 'Total',
      'HOME': 'Home',
      'CONTACT': 'Contact',
      'ABOUT': 'About',
      'DATABASE_CONNECTIONS': 'Database connections',
      'QUERIES': 'Queries',
      'VERSIONS': 'Versions',
      'RESULT_SETS': 'Result sets',
      'DETAILS': 'Details',
      'CREATE': 'Create',
      'UPDATE': 'Update',
      'DELETE': 'Delete',
      'NEW': 'New'
    });
    $translateProvider.translations('de_DE', {
      'NAME': 'Name',
      'URL': 'URL',
      'USERNAME': 'Nutzername',
      'PASSWORD': 'Passwort',
      'TOTAL': 'Gesamt',
      'HOME': 'Home',
      'CONTACT': 'Impressum',
      'ABOUT': 'Infos',
      'DATABASE_CONNECTIONS': 'Datenbankverbindungen',
      'QUERIES': 'Abfragen',
      'VERSIONS': 'Versionen',
      'RESULT_SETS': 'Abfrageergebnisse',
      'DETAILS': 'Details',
      'CREATE': 'Erstellen',
      'UPDATE': 'Aktualisieren',
      'DELETE': 'Löschen',
      'NEW': 'Neu'
    });
    $translateProvider.preferredLanguage('en_UK');
  });
