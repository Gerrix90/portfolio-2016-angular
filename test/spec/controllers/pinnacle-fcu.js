'use strict';

describe('Controller: PinnacleFcuCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var PinnacleFcuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PinnacleFcuCtrl = $controller('PinnacleFcuCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PinnacleFcuCtrl.awesomeThings.length).toBe(3);
  });
});
