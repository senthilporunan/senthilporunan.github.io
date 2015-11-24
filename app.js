'use strict';

// Declare app level module which depends on views, and components

var personalApp = angular.module('personalApp', [
  'ngRoute',
  'personalApp.home',
  'personalApp.profile',
  'personalApp.careers',
	'personalApp.projects',
	'personalApp.proficiency',
  'personalApp.contact' 
]);

personalApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

personalApp.factory('skillListService', ["$http", function($http){
	return {
		getSkillList: function() {
			return $http.get('skillList.json');
		},
		getToolList: function() {
			return $http.get('toolList.json');
		}
	}
}]); 
