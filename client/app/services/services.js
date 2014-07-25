angular.module('app.services', [])

.factory('MapFactory', function() {
  $rootScope.$on('$stateChangeStart', 
function(event, toState, toParams, fromState, fromParams){ 
    // do something
});
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
    }
  };
});  