angular.module('app.signin', [])

.controller('SigninController', function($scope, $http) {
  $scope.login = function() {
    $http({
      method: 'GET',
      url: 'microhood.azurewebsites.net/api/auth/google'
    }).then(function(data) {
      console.log(data.results);
    });
  };
});