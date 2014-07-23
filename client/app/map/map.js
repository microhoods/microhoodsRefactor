angular.module('app.map', [])

.controller('MapController', function($scope) {
  $scope.map = {
    center: {
        latitude: 37.7696,
        longitude: -122.4468
    },
    zoom: 15,
    marker: {
      latitude: 37.7696,
      longitude: -122.4468
    }
  };
  $scope.marker = {
    coords: {
      latitude: 37.7696,
      longitude: -122.4468
    }
  };
  $scope.circle = {
    center: {
      latitude: 37.7696,
      longitude: -122.4468
    },
    radius: 100,
    fill: {
      color: 'orange'
    },
    stroke: {
      weight: 0.5
    }
  };
});