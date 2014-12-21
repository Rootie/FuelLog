'use strict';

// Declare app level module which depends on views, and components
angular.module('FuelLogApp', [
    'ngRoute',
    'FuelLogApp.view1',
    'FuelLogApp.view2',
    'FuelLogApp.viewImportCSV',
    'FuelLogApp.version',
    'FuelLogModule',
    'ui.bootstrap',
    'angular-flot'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller('NavController', function($scope, FuelLog) {
        $scope.FuelLog = FuelLog;
    });