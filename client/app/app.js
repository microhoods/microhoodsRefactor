angular.module('app', [
  'app.services',
  'app.signin',
  'app.map',
  'ui.router',
  'google-maps'
])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('signin', {
      url: '/signin',
      templateUrl: 'app/signin/signin.html',
      controller: 'SigninController'
    })
    .state('map', {
      url: '/map',
      templateUrl: 'app/map/map.html',
      controller: 'MapController'
    });

    $urlRouterProvider.otherwise('/signin');
});