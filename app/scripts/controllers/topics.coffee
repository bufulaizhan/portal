'use strict'

###*
 # @ngdoc function
 # @name portalApp.controller:TopicsCtrl
 # @description
 # # TopicsCtrl
 # Controller of the portalApp
###
angular.module('portalApp')
  .controller 'TopicsCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
