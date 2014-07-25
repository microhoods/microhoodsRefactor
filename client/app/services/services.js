angular.module('app.services', [])

.factory('MapFactory', function($http) {
  var cache = {
    geolocation: {
      lat: 37.7836,
      long: -122.4090
    },
    plots: []
  };

  return {
    cache: cache,
    updateGeoCache: function(lat, long) {
      cache.geolocation = {
        lat: lat,
        long: long
      };
    },
    getMarkers: function() {
      return $http({
        method: 'GET',
        url: '/api/tags'
      }).then(function(data) {
        cache.plots.push(data.results);
        return data.results;
      });
    },
    postMarkers: function(obj) {
      return $http({
        method: "POST",
        url: "/api/tags",
        data: obj
      }).then(function(data) {
        return data.config.data;
      });
    }
  };
});