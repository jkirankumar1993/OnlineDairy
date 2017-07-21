'use strict';

/**
 * @ngdoc overview
 * @name onlineDairyApp
 * @description
 * # onlineDairyApp
 *
 * Main module of the application.
 */
angular
  .module('onlineDairyApp', [
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
      .when('/newuser',{
        templateUrl: 'views/newuser.html',
        controller: 'NewuserController',
        controllerAs: 'newuser'
      })
      .when('/login',{
        templateUrl: 'views/loginform.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginform'
      })
      .when('/userhomepage',{
        templateUrl:'views/userhomepage.html',
        controller: 'UserCtrl',
        controllerAs: 'userhomepage'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
