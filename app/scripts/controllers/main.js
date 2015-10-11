'use strict';

/**
 * @ngdoc function
 * @name suwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the suwApp
 */
angular.module('suwApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
