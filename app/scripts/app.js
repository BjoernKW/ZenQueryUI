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
    'chieffancypants.loadingBar',
    'ngAnimate',
    'services.config',
    'zenQueryServices'
  ])
  .config(function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/queries.html',
        controller: 'QueriesCtrl'
      })
      .when('/databaseConnections', {
        templateUrl: 'views/databaseConnections.html',
        controller: 'DatabaseConnectionsCtrl'
      })
      .when('/queries', {
        templateUrl: 'views/queries.html',
        controller: 'QueriesCtrl'
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
      'RESULT_SET': 'Result set',
      'DETAILS': 'Details',
      'CREATE': 'Create',
      'UPDATE': 'Update',
      'DELETE': 'Delete',
      'EXECUTE': 'Execute',
      'NEW': 'New',
      'KEY': 'ID',
      'QUERY': 'Query',
      'CONTENT': 'Content',
      'SELECT': 'Please select',
      'DATABASE_CONNECTION': 'Database connection',
      'PREVIOUS_VERSIONS': 'Previous versions',
      'PREVIOUS_VERSION': 'Previous version'
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
      'RESULT_SET': 'Abfrageergebnis',
      'DETAILS': 'Details',
      'CREATE': 'Erstellen',
      'UPDATE': 'Aktualisieren',
      'DELETE': 'Löschen',
      'EXECUTE': 'Ausführen',
      'NEW': 'Neu',
      'KEY': 'ID',
      'QUERY': 'Abfrage',
      'CONTENT': 'Inhalt',
      'SELECT': 'Bitte auswählen',
      'DATABASE_CONNECTION': 'Datenbankverbindung',
      'PREVIOUS_VERSIONS': 'Vorherige Versionen',
      'PREVIOUS_VERSION': 'Vorherige Version'
    });
    $translateProvider.preferredLanguage('en_UK');
  });
