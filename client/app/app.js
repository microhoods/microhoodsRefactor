angular.module('app', [
  'app.services',
  'app.signin',
  'app.map',
  'ui.router',
  'google-maps',
  'geolocation'
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
      controller: 'MapController',
      resolve: {
        currentLocation: function(geolocation) {
          return geolocation.getLocation().then(function(data) {
            return data.coords;
          });
        }
      }
    });
  $urlRouterProvider.otherwise('/signin');
});