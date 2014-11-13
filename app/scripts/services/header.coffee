'use strict'

###*
 # @ngdoc service
 # @name portalApp.header
 # @description
 # # header
 # Factory in the portalApp.
###
angular.module('portalApp')
.factory 'header', ->
  pageHeader = "不服来战"
  navigation = []

  # Public API here
  {
  setHeader: (t)->
    pageHeader = t
  getHeader: ->
    pageHeader
  }
