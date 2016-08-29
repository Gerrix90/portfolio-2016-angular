'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope, myWork) {

    var myWorkAry = new myWork();
    $scope.myWork = myWorkAry.getWork();

    var myHeaderAry = new myWork();
    $scope.myHeader = myHeaderAry.getHeader();

  });
