angular.module('myApp', ['ngRoute','myApp.services']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/enterrace', {
                templateUrl: 'partials/results',
                controller: ResultsController
            }).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }]);