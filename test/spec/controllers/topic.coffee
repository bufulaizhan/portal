'use strict'

describe 'Controller: TopicCtrl', ->

  # load the controller's module
  beforeEach module 'portalApp'

  TopicCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    TopicCtrl = $controller 'TopicCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', ->
    expect(scope.awesomeThings.length).toBe 3
