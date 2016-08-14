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

    // var promise = myWork.getWork();
    // promise.then(function (data){
    //   $scope.myWork = data.data;
    //   // console.log($scope.myWork);
    // });
    var myWorkAry = new myWork();
    $scope.myWork = myWorkAry.getWork();

    console.log($scope.myWork);

    var myHeaderAry = new myWork();
    $scope.myHeader = myHeaderAry.getHeader();

    console.log($scope.myHeader);

    // $scope.header = {
    //   name: "Cory Pierson",
    //   role: "Front-End Developer"
    // };

  });
