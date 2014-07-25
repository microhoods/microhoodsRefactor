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
      $scope.markers.push(args[0])
      console.log(args[0]);
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

  // $scope.tagDetails = function() {
  //   console.log('YEAH!');
  // };

  // navigator.geolocation.getCurrentPosition(success, error);
});