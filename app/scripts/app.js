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
      .when('/queries/:databaseConnectionId', {
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
      'RESULT_SET_PREVIEW': 'Result set preview',
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
      'PREVIOUS_VERSION': 'Previous version',
      'SNAPSHOTS': 'Snapshots',
      'SNAPSHOT': 'Snapshot',
      'ARGUMENTS': 'Arguments',
      'HTML_LIST': 'HTML list',
      'STYLED_HTML_LIST': 'styled HTML list',
      'HTML_TABLE': 'HTML table',
      'STYLED_HTML_TABLE': 'styled HTML table',
      'FOR_ALL_RESULTS': 'for all results please click on one of the links above or below this table'
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
      'RESULT_SET_PREVIEW': 'Vorschau des Abfrageergebnisses',
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
      'PREVIOUS_VERSION': 'Vorherige Version',
      'SNAPSHOTS': 'Snapshots',
      'SNAPSHOT': 'Snapshot',
      'ARGUMENTS': 'Argumente',
      'HTML_LIST': 'HTML Liste',
      'STYLED_HTML_LIST': 'HTML Liste mit Layout',
      'HTML_TABLE': 'HTML Tabelle',
      'STYLED_HTML_TABLE': 'HTML Tabelle mit Layout',
      'FOR_ALL_RESULTS': 'für alle Ergebnisse klicken Sie bitte auf einen der Links ober- oder unterhalb dieser Tabelle'
    });
    $translateProvider.preferredLanguage('en_UK');
  });
