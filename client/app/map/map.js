angular.module('app.map', [
  'ngFx'
])

.controller('MapController', function($scope, MapFactory, $http) {
  
  $scope.myID = function(all){
    if(all) {
      return $scope.userId = '';
    }

    $http({
      method: 'GET',
      url: '/api/tags/myTags'
    }).then(function(res){
      data = JSON.parse(res.data);
      $scope.userId = data;
    }); 
  }

  $scope.map = {
    center: {
      latitude: MapFactory.cache.geolocation.lat,
      longitude: MapFactory.cache.geolocation.long
    },
    zoom: 16,
    options: {
      disableDoubleClickZoom: true
    },
    events: {
      dblclick: function(map, event, args) {
        var plot = {
          _id: 1,
          sentiment: $scope.sentimentValue,
          geo: [
            args[0].latLng.B,
            args[0].latLng.k
          ]
        };
        MapFactory.postMarkers(plot)
          .then(function(data) {
          $scope.markers.push({
            id : data._id,
            sentiment : data.sentiment,
            coords: {
            latitude: data.geo[1],
            longitude: data.geo[0]
            },
            user : data.user
          });
        $scope.sentimentValue = '';
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


  MapFactory.getMarkers()
  .then(function(data){
    for(var i = 0; i < data.data.length; i++){
      var current = data.data[i];
      $scope.markers.push({
        coords: {
          latitude: current.geo[1],
          longitude: current.geo[0]
        },
        sentiment : current.sentiment,
        id : current._id,
        user: current.user
      });
    } 
  console.log($scope.markers)

  });

  $scope.deleteTag = function(id){
    var item = $scope.markers[id];
    $scope.$apply(function(){
      $scope.markers.splice(id, 1);
    });
    $http({
      method : 'DELETE',
      url: '/api/tags/' + item.id,
    });
  };



});