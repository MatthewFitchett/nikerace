function IndexCtrl($scope, $http) {
    // reset the scope and bind up the handlers..
    $scope.form = {};

    $scope.submitToken = function (form) {

        $http.post('/api/token' , form).
            success(function(data) {
               // $location.path('/');
            });
    };

    // here we need to call the entrants API and retrieve all the entrants
    // then bind them somehow to a collection of data
    // that somehow angular will bind up to a table
    $http.get('/api/entrants').
        success(function(data, status, headers, config) {

            $scope.name = data.name;
        });
    console.log($scope);
}

angular.module('myApp.controllers', []).
    controller('AppCtrl', function ($scope, $http) {

       /* $http({
            method: 'GET',
            url: '/api/name'
        }).
            success(function (data, status, headers, config) {
                $scope.name = data.name;
            }).
            error(function (data, status, headers, config) {
                $scope.name = 'Error!'
            });
*/
    });