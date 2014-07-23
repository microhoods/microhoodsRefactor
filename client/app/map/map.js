angular.module('app.map', [])

.controller('MapController', function($scope) {
  $scope.map = {
    center: {
        latitude: 37.7696,
        longitude: -122.4468
    },
    zoom: 13,
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
});