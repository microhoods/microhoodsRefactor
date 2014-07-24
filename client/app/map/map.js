angular.module('app.map', [])

.controller('MapController', function($scope, MapFactory) {

  $scope.map = {
    center: {
      latitude: MapFactory.cache.geolocation.lat,
      longitude: MapFactory.cache.geolocation.long
    },
    zoom: 16
  };

  $scope.markers = [
    {
      id: 1,
      coords: {
        latitude: 37.7836,
        longitude: -122.4090
      }
    },
    {
      id: 2,
      coords: {
        latitude: 37.786368644391295,
        longitude:  -122.4082088470459
      }
    },
    {
      id: 3,
      coords: {
        latitude:  37.783901211929845,
        longitude: -122.41260766983032
      }
    },
    {
      id: 4,
      coords: {
        latitude: 37.78586414170478,
        longitude: -122.4110466241018
      }
    }
  ];

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
      // var long = args[0].latLng.B;
      // var lat = args[0].latLng.K;
      // $scope.markers.push({
      //   latitude: lat,
      //   long: long
      // });
      console.log(args[0].latLng);
    }
  };

  $scope.tagDetails = function() {
    console.log('YEAH!');
  };

  // navigator.geolocation.getCurrentPosition(success, error);
});