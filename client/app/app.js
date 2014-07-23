angular.module('app', [
  'app.singin',
  'app.services',
  'ui-router'
])

.config(function($stateProvider) {
  $stateProvider
    .state('signin', {
      url: '/signin',
      templateUrl: 'app/signin/singin.html',
      controller: 'SigninController'
    });
});