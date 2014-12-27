'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('fuelLogApp'));

  var MainCtrl,
    scope;
  var fuelLog;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, FuelLog) {
    scope = $rootScope.$new();
    fuelLog = FuelLog;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should add a entry to the FuelLog', function () {
    //newDate should be filled automatically
    scope.newFuelAmount = 50;
    scope.newPrice = 100;
    scope.newOdometerReading = 1000;
    scope.addFuelLog();
    expect(fuelLog.getEntries().length).toBe(1);
  });
});
