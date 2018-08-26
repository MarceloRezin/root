'use strict';
var app = angular.module('rootApp', ['ngMaterial', 'ngMessages', 'ui.router']);

app.controller('indexCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.frase = 'Ola mundo!';

	$scope.navigate = function () {
        $state.go('view1');
    };

}]);