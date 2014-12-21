'use strict';

angular.module('FuelLogApp.viewImportCSV', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/ImportCSV', {
            templateUrl: 'viewImportCSV/viewImportCSV.html',
            controller: 'ViewImportCSVCtrl'
        });
    }])

    .controller('ViewImportCSVCtrl', function($scope, $location, FuelLog) {
        $scope.importCSV = function() {
            $('#CSVFile').parse({
                config: {
                    dynamicTyping: true,
                    complete: function(results, file) {
                        for (var i = 1; i < results.data.length; i++) {
                            var row = results.data[i];

                            if (!(row[0] ||row[2]))
                                continue;

                            FuelLog.addEntry(row[0], row[1], row[2], row[3]);
                        }
                        $location.path('/view1');
                        $scope.$apply();

                        //console.log("File done:", file, results);
                    }
                }
            })
        }
    });