'use strict';

describe('Service: myWork', function () {

  // load the service's module
  beforeEach(module('portfolioApp'));

  // instantiate service
  var myWork;
  beforeEach(inject(function (_myWork_) {
    myWork = _myWork_;
  }));

  it('should do something', function () {
    expect(!!myWork).toBe(true);
  });

});
