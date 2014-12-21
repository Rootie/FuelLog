'use strict';

angular.module('FuelLogApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $window, $timeout, FuelLog) {
        $scope.FuelLog = FuelLog;

        $scope.addFuelLog = function() {
            FuelLog.addEntry($scope.newDate, $scope.newFuelAmount, $scope.newPrice, $scope.newOdometerReading);
        };

        $scope.plotData = [[[0, 2], [1,5], [5,1]]];
        $scope.plotOptions = {
            xaxis: {
                mode: "time"
            },
            yaxes: [{}, { position: 'right'}]
        };

        $scope.$watchCollection('FuelLog.getEntries()', function(newVal) {
            var ConsumptionData = [];
            var PricePerFuelAmountData = [];
            if (!newVal)
                return;
            newVal.forEach(function(Entry) {
                var date = new Date(Entry.Date).getTime();
                ConsumptionData.push([date, Entry.Consumption]);
                PricePerFuelAmountData.push([date, Entry.PricePerFuelAmount]);
            });
            $scope.plotData = [
                {
                    label: 'Verbrauch',
                    yaxis: 1,
                    data: ConsumptionData
                },
                {
                    label: 'Preis/l',
                    yaxis: 2,
                    data: PricePerFuelAmountData
                }];
        });

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.newDate = new Date();
        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        var SetPlotParentStyle = function() {
            var row = angular.element('#TopRow').parent();
            var addNewPanel = angular.element('#AddNewPanel');

            if (row.width() > addNewPanel.width() + 100 + 500)
                $scope.PlotParentStyle = {
                    left: '100px',
                    width: (row.width() - addNewPanel.width() - 100 - 15).toString() + 'px'
                };
            else
                $scope.PlotParentStyle = {
                    left: '0',
                    width: '100%'
                };
        };
        $window.addEventListener('resize', function() {
            SetPlotParentStyle();
            $scope.$apply();
        });
        SetPlotParentStyle();
});