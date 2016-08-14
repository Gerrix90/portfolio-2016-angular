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
      templateUrl: 'templates/directives/singleWork.html',
      restrict: 'E',
      scope: {
        singleWorkData: '=data'
      },
      controller: function($scope){
        console.log($scope.singleWorkData);
      }
    };
  });