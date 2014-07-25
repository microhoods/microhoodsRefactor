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
      controller: 'MapController'
    });
  $urlRouterProvider.otherwise('/signin');
})
.run(function(MapFactory, geolocation, $http) {
  // $http.get('/api/tags').then(function(results){
  //   $scope.markers.push(results.results);
  // });

  geolocation.getLocation().then(function(data) {
    MapFactory.updateGeoCache(data.coords.latitude, data.coords.longitude);

  });
});