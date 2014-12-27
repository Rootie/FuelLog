'use strict';

describe('Service: FuelLog', function () {

  // load the service's module
  beforeEach(module('fuelLogApp'));

  // instantiate service
  var FuelLog;
  beforeEach(inject(function (_FuelLog_) {
    FuelLog = _FuelLog_;
  }));

  it('should do something', function () {
    expect(!!FuelLog).toBe(true);
  });

});
