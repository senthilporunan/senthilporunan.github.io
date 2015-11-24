'use strict';

var personalApp = angular.module('personalApp.careers', ['ngRoute']);

personalApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/careers', {
		templateUrl: 'careers/careers.html',
    controller: 'careerCtrl'
	});
}]);

personalApp.controller('careerCtrl', [function($scope) {

}]);