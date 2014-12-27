'use strict';

/**
 * @ngdoc function
 * @name fuelLogApp.controller:ImportcsvCtrl
 * @description
 * # ImportcsvCtrl
 * Controller of the fuelLogApp
 */
angular.module('fuelLogApp')
  .controller('ImportcsvCtrl', function ($scope, $location, FuelLog) {
        $scope.importCSV = function() {
            $('#CSVFile').parse({
                config: {
                    dynamicTyping: true,
                    complete: function(results, file) {
                        for (var i = 1; i < results.data.length; i++) {
                            var row = results.data[i];

                            if (!(row[0] ||row[2]))
			    {
                                continue;
                            }

                            FuelLog.addEntry(row[0], row[1], row[2], row[3]);
                        }
                        $location.path('/');
                        $scope.$apply();

                        //console.log("File done:", file, results);
                    }
                }
            });
        };

  });
