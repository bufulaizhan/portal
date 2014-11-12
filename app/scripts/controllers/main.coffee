'use strict'

###*
 # @ngdoc function
 # @name portalApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the portalApp
###
angular.module('portalApp')
  .controller 'MainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
