'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:homeWork
 * @description
 * # homeWork
 */
angular.module('portfolioApp')
  .directive('homeWork', function () {
    return {
      templateUrl: 'views/homeWork.html',
      restrict: 'E',
      scope: {
        myWorkData: '=data'
      }
    };
  });
