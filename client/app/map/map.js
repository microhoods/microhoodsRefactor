angular.module('app.map', [])

.controller('MapController', function($scope, currentLocation) {

  $scope.map = {
    center: {
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude
    },
    zoom: 19
  };

  $scope.marker = {
    coords: {
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude
    }
  };

  $scope.circle = {
    center: {
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude
    },
    radius: 100,
    fill: {
      color: 'orange'
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