angular.module('app.services', [])

.factory('MapFactory', function() {
  var cache = {
    geolocation: {
      lat: 37.7836,
      long: -122.4090
    }
  };


  return {
    cache: cache,
    updateGeoCache: function(lat, long) {
      cache.geolocation = {
        lat: lat,
        long: long
      };
      console.log('factory cache => ', cache);
    }
  };
});