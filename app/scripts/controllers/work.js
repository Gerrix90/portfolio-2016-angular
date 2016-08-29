'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('WorkCtrl', function ($scope, $routeParams, myWork, $filter) {

    var myWorkAry = new myWork();
    $scope.myWork = myWorkAry.getWork();

    var thisWork;
    $scope.myWork.forEach(function(value){
      if(value.id === $routeParams.id){
        thisWork = value;
      }
    });

    $scope.thisWork = thisWork;

    // pagination

    var items = $scope.myWork;

    var idSearch = $routeParams.id;

    var foundItem = $filter('filter')(items, { id: idSearch  }, true)[0];

    var index = items.indexOf(foundItem);

    var nextPage = index + 1;

    if (nextPage >= items.length){
      $scope.nextPageLink = $scope.myWork[0].id;
    }else{
      $scope.nextPageLink = $scope.myWork[nextPage].id;
    }

    $scope.hi = "hi";

  });
