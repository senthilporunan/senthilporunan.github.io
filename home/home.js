'use strict';

var personalApp = angular.module('personalApp.home', ['ngRoute']);

personalApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
		templateUrl: 'home/home.html',
    controller: 'homeCtrl'
	})
	.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}]);

personalApp.controller('homeCtrl', [function($scope) {

}]);