'use strict';

describe('Controller: navController', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var navController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    navController = $controller('navController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(navController.awesomeThings.length).toBe(3);
  });
});
