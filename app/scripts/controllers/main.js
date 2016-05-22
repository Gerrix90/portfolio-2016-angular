'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.header = {
      name: "Cory Pierson",
      role: "Front-End Developer"
    };
    $scope.homeWorkInfo = [
      {
        id: 'mbp',
        name: 'Mack Boring',
        agency: 'Delia Associates',
        role: 'Front-End Developer',
        link: 'mack-boring'
      },
      {
        id: 'pfc',
        name: 'Pinnacle FCU',
        agency: 'Delia Associates',
        role: 'Front-End Developer',
        link: 'pinnacle-fcu'
      },
      {
        id: 'mdp',
        name: 'Meyer Depew',
        agency: 'Delia Associates',
        role: 'Front-End Developer',
        link: 'meyer-depew'
      }
    ];
  });
