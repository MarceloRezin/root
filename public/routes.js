app.config(['$stateProvider', function($stateProvider) {

    $stateProvider
        .state('index', {
            url: 'index',
            templateUrl: 'index-partial.html'
        })

        .state('view1', {
            url: 'view1',
            templateUrl: 'views/view1/view1.html'
        })

        ;
}]);