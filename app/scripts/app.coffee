'use strict'

###*
 # @ngdoc overview
 # @name portalApp
 # @description
 # # portalApp
 #
 # Main module of the application.
###
angular
  .module('portalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
      .when '/about',
        templateUrl: 'views/about.html'
        controller: 'AboutCtrl'
      .when '/login',
        templateUrl: 'views/login.html'
        controller: 'LoginCtrl'
      .when '/topics',
        templateUrl: 'views/topics.html'
        controller: 'TopicsCtrl'
      .when '/topic/:topic_id',
        templateUrl: 'views/topic.html'
        controller: 'TopicCtrl'
      .otherwise
        redirectTo: '/'

