'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/meyer-depew', {
        templateUrl: 'views/meyer-depew.html',
        controller: 'MeyerDepewCtrl',
        controllerAs: 'meyerDepew'
      })
      .when('/mack-boring', {
        templateUrl: 'views/mack-boring.html',
        controller: 'MackBoringCtrl',
        controllerAs: 'mackBoring'
      })
      .when('/pinnacle-fcu', {
        templateUrl: 'views/pinnacle-fcu.html',
        controller: 'PinnacleFcuCtrl',
        controllerAs: 'pinnacleFcu'
      })
      .when('/case-mason', {
        templateUrl: 'views/case-mason.html',
        controller: 'CaseMasonCtrl',
        controllerAs: 'caseMason'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
