'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:singlework
 * @description
 * # singlework
 */
angular.module('portfolioApp')
  .directive('singleWork', function () {
    return {
      templateUrl: 'views/singleWork.html',
      restrict: 'E',
      scope: true,
      controller: 'WorkCtrl'
    };
  });
