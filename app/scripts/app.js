'use strict';

angular
  .module('zenQueryUiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'pascalprecht.translate',
    'ui.select2'
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
    $translateProvider.translations('de_DE', {
    });
    $translateProvider.preferredLanguage('de_DE');
  });
