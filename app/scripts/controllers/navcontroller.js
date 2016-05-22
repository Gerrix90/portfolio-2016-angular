'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:navController
 * @description
 * # navController
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('navController', function ($scope, $location) {
    $scope.isActive = function(destination){
      return destination === $location.path();
    };

  });
