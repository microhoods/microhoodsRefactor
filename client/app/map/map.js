angular.module('app.map', [])

.controller('MapController', function($scope) {
  $scope.map = {
    center: {
        latitude: 37.7696,
        longitude: -122.4468
    },
    zoom: 13
  };
  console.log($scope.map);
});