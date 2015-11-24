'use strict';

var personalApp = angular.module('personalApp.proficiency', ['ngRoute']);

personalApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/proficiency', {
		templateUrl: 'proficiency/proficiency.html',
    controller: 'proficiencyCtrl'
	});
}]);

personalApp.controller('proficiencyCtrl', ["$scope", "skillListService", function($scope, skillListService) {
	
	function generateRating(value) {
		return {
				rating: value,
				strokeColor: 'black',
				readOnly: true,
				width: 30,
				height: 30,
				strokeWidth: '8px',
				startColor: 'deeppink',
				endColor: 'deeppink'
		}
	}
	
	skillListService.getSkillList().then(function(response) {
		$scope.skills = angular.fromJson(response.data);
		$scope.skillLists = Object.keys(response.data);		
		for (var skill in $scope.skills) {
			angular.element(document).find('#jrate-'+skill).jRate(generateRating($scope.skills[skill]));
		}
	});

	skillListService.getToolList().then(function(response) {
		$scope.tools = angular.fromJson(response.data);
		$scope.toolLists = Object.keys(response.data);		
		for (var tool in $scope.tools) {
			angular.element(document).find('#jrate-'+tool).jRate(generateRating($scope.tools[tool]));
		}
	});


}]);