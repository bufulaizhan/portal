'use strict'

###*
 # @ngdoc function
 # @name portalApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the portalApp
###
angular.module('portalApp')
  .controller 'AboutCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
