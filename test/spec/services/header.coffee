'use strict'

describe 'Service: header', ->

  # load the service's module
  beforeEach module 'portalApp'

  # instantiate service
  header = {}
  beforeEach inject (_header_) ->
    header = _header_

  it 'should do something', ->
    expect(!!header).toBe true
