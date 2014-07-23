angular.module('app', [
  'app.services',
  'ui-router'
])

.config(function($stateProvider) {
  $stateProvider
    .state('signin', {
      url: '/signin',
      templateUrl: 'app/signin/singin.html',
      controller: 'SigninController'
    })
    .state('map', {
      url: '/map',
      templateUrl: 'app/map/map.html',
      controller: 'MapController'
    });
});