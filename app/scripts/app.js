'use strict';

/**
 * @ngdoc overview
 * @name fuelLogApp
 * @description
 * # fuelLogApp
 *
 * Main module of the application.
 */
angular
  .module('fuelLogApp', [
    'ngRoute',
    'ui.bootstrap',
    'angular-flot'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/ImportCSV', {
        templateUrl: 'views/importcsv.html',
        controller: 'ImportcsvCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('NavController', function($scope, FuelLog) {
    $scope.FuelLog = FuelLog;
  });

