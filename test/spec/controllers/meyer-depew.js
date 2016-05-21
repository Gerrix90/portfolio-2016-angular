'use strict';

describe('Controller: MeyerDepewCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var MeyerDepewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeyerDepewCtrl = $controller('MeyerDepewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MeyerDepewCtrl.awesomeThings.length).toBe(3);
  });
});
