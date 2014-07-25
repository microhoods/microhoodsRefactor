angular.module('app.map', [])

.controller('MapController', function($scope, MapFactory) {

  $scope.map = {
    center: {
      latitude: MapFactory.cache.geolocation.lat,
      longitude: MapFactory.cache.geolocation.long
    },
    zoom: 16
  };

  $scope.marker = {
    coords: {
      latitude: MapFactory.cache.geolocation.lat,
      longitude: MapFactory.cache.geolocation.long
    }
  };

  $scope.circle = {
    center: {
      latitude: MapFactory.cache.geolocation.lat,
      longitude: MapFactory.cache.geolocation.long
    },
    radius: 100,
    fill: {
      color: 'blue'
    },
    stroke: {
      weight: 0.5
    }
  };

  $scope.tagDetails = function() {
    console.log('YEAH!');
  };

  // navigator.geolocation.getCurrentPosition(success, error);
});