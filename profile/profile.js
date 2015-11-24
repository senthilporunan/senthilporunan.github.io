'use strict';

var personalApp = angular.module('personalApp.profile', ['ngRoute']);

personalApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
		templateUrl: 'profile/profile.html',
    controller: 'profileCtrl'
	});
}]);

personalApp.controller('profileCtrl', [function($scope) {

}]);