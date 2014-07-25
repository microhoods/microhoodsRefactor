angular.module('app.map', [])

.controller('MapController', function($scope, MapFactory, $http) {

  $scope.map = {
    center: {
      latitude: MapFactory.cache.geolocation.lat,
      longitude: MapFactory.cache.geolocation.long
    },
    zoom: 16,
    events: {
      dblclick: function(map, event, args) {
        var plot = {
          _id: 1,
          sentiment: 'Plot',
          geo: [
            args[0].latLng.B,
            args[0].latLng.k
          ]
        };
        MapFactory.postMarkers(plot)
          .then(function(data) {
            console.log('this is data posted');
            console.log(data);
          $scope.markers.push({
            coords: {
            latitude: data.geo[1],
            longitude: data.geo[0]
            }
          });
        console.log('Markers');
        console.log($scope.markers);
        });
      }
    }
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

  $scope.window = {
    coords: {
      latitude: MapFactory.cache.geolocation.lat,
      longitude: MapFactory.cache.geolocation.long
    },
    show: true,
    templateUrl: 'app/map/window.html'
  };

  $scope.markerEvents = {
    dblclick: function(map, event, args) {
      console.log(args);
    }
  };

  $scope.tagDetails = function() {
    console.log('yo');
  };

  MapFactory.getMarkers()
  .then(function(data){
    for(var i = 0; i < data.data.length; i++){
      var current = data.data[i];
      $scope.markers.push({
        coords: {
          latitude: current.geo[1],
          longitude: current.geo[0]
        }
      });
    } 
  });
});