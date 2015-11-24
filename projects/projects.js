'use strict';

var personalApp = angular.module('personalApp.projects', ['ngRoute']);

personalApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
		templateUrl: 'projects/projects.html',
    controller: 'projectsCtrl'
	});
}]);

personalApp.controller('projectsCtrl', [function($scope) {

}]);