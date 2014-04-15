'use strict';

angular
  .module('zenQueryUiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'pascalprecht.translate',
    'ui.select2',
    'zenQueryServices'
  ])
  .config(function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
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
      'DETAILS': 'Details',
      'CREATE': 'Create',
      'UPDATE': 'Update',
      'DELETE': 'Delete'
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
      'DETAILS': 'Details',
      'CREATE': 'Erstellen',
      'UPDATE': 'Aktualisieren',
      'DELETE': 'Löschen'
    });
    $translateProvider.preferredLanguage('en_UK');
  });
