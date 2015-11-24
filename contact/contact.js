'use strict';

var personalApp = angular.module('personalApp.contact', ['ngRoute']);

personalApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
		templateUrl: 'contact/contact.html',
    controller: 'contactCtrl'
	});
}]);

personalApp.controller('contactCtrl', [function($scope) {

}]);