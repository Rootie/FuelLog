'use strict';

describe('Controller: ImportcsvCtrl', function () {

  // load the controller's module
  beforeEach(module('fuelLogApp'));

  var ImportcsvCtrl,
    scope;
  var fuelLog;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, FuelLog) {
    scope = $rootScope.$new();
    fuelLog = FuelLog;
    ImportcsvCtrl = $controller('ImportcsvCtrl', {
      $scope: scope
    });
  }));

  it('should add entries to the FuelLog service', function () {
    expect(fuelLog.getEntries().length).toBe(0);
  });
});
