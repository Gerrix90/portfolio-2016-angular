'use strict';

describe('Controller: CaseMasonCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var CaseMasonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CaseMasonCtrl = $controller('CaseMasonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CaseMasonCtrl.awesomeThings.length).toBe(3);
  });
});
