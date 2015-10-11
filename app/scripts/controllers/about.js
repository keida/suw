'use strict';

/**
 * @ngdoc function
 * @name suwApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the suwApp
 */
angular.module('suwApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
