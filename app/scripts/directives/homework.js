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
      templateUrl: 'templates/directives/homeWork.html',
      restrict: 'E',
      scope: {
        homeWorkData: '=data'
      },
      controller: function($scope){
        console.log($scope.homeWorkData);
      }
    };
  });
