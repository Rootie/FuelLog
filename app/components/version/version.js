'use strict';

angular.module('FuelLogApp.version', [
  'FuelLogApp.version.interpolate-filter',
  'FuelLogApp.version.version-directive'
])

.value('version', '0.1');
