angular.module('app.map', [])

.controller('MapController', function($scope, MapFactory) {
  $scope.quickMarkers = [];
  $scope.map = {
    center: {
      latitude: MapFactory.cache.geolocation.lat,
      longitude: MapFactory.cache.geolocation.long
    },
    zoom: 16
  };

  $scope.markers = [];

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

  $scope.events = {
    dblclick: function(map, event, args) {
      var plot = {
        sentiment: 'Plot',
        geo: [
          args[0].lat,
          args[0].long
        ]
      };
      MapFactory.postMarkers(plot)
        .then(function(data) {
          $scope.markers.push({
            coords: {
              latitude: data.geo[0],
              longitude: data.geo[1]
            }
          });
      });
    }
  };

  $scope.window = {
    coords: {
      latitude: MapFactory.cache.geolocation.lat,
      longitude: MapFactory.cache.geolocation.long
    },
    show: true,
    templateUrl: 'app/map/window.html'
  };

});