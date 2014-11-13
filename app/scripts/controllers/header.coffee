'use strict'

###*
 # @ngdoc function
 # @name portalApp.controller:HeaderCtrl
 # @description
 # # HeaderCtrl
 # Controller of the portalApp
###
angular.module('portalApp')
.controller 'HeaderCtrl', ($scope, header) ->
  $scope.header = header
