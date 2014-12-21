'use strict';

angular.module('FuelLogModule', [])
.factory('FuelLog', [function() {
        var FuelLogEntries = [];

        var FuelLog = {};

        FuelLog.getEntries = function() {
            return FuelLogEntries;
        };

        FuelLog.addEntry = function(newDate, newFuelAmount, newPrice, newOdometerReading) {
            var newEntry = {
                'Date': newDate,
                'FuelAmount': newFuelAmount,
                'Price': newPrice,
                'OdometerReading': newOdometerReading
            };

            for (var i = FuelLogEntries.length -1; i >= 0; i--) {
                if (FuelLogEntries[i].Date < newEntry.Date)
                    break;

                if (FuelLogEntries[i].Date == newEntry.Date && FuelLogEntries[i].FuelAmount < newEntry.FuelAmount)
                    break;
            }

            var PrevEntry = FuelLogEntries[i];

            if (newEntry.FuelAmount && newEntry.Price)
            {
                newEntry.PricePerFuelAmount = newEntry.Price / newEntry.FuelAmount;
            }
            if (newEntry.OdometerReading && PrevEntry && PrevEntry.OdometerReading)
            {
                newEntry.Distance = newEntry.OdometerReading - PrevEntry.OdometerReading;
            }
            if (newEntry.Distance && newEntry.FuelAmount)
            {
                newEntry.Consumption = newEntry.FuelAmount / newEntry.Distance * 100;
            }

            FuelLogEntries.splice(i+1, 0, newEntry);
        };

        FuelLog.removeEntry = function(FuelLogEntry) {
            var index = FuelLogEntries.indexOf(FuelLogEntry);
            FuelLogEntries.splice(index, 1);
        };

        FuelLog.load = function() {
            FuelLogEntries = angular.fromJson(localStorage["FuelLog"]);
            if (!FuelLogEntries)
                FuelLogEntries = [];
        };

        FuelLog.save = function() {
            localStorage["FuelLog"] = angular.toJson(FuelLogEntries);
        };

        FuelLog.download = function()  {
            var blob = new Blob([angular.toJson(FuelLogEntries)], {type: "text/plain;charset=utf-8"});
            saveAs(blob, "FuelLog.json");
        };

        FuelLog.load();

        return FuelLog;
    }]);