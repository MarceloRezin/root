'use strict';
var app = angular.module('rootApp', ['ngMaterial', 'ngMessages', 'ui.router']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('dark-red', {
    '50': 'f8e5e5',
    '100': 'eebfbf',
    '200': 'e39494',
    '300': 'd76969',
    '400': 'ef5350',
    '500': 'c62828',
    '600': 'c02424',
    '700': 'b91e1e',
    '800': 'b11818',
    '900': 'a40f0f',
    'A100': 'ffd4d4',
    'A200': 'ffa1a1',
    'A400': 'ff6e6e',
    'A700': 'ff5454',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light

    'contrastDarkColors': undefined,
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('dark-red');

});

app.controller('indexCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.imgSrc = '/img/root_logo.png';

	$scope.navigate = function () {
        $state.go('view1');
    };

}]);