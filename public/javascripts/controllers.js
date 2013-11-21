function SearchController($scope, $location) {
    $scope.currentToken = $location.search().token;

    $scope.submitToken = function() {
        $location.search('token', $scope.currentToken);
        $location.path('/enterrace');
    };
}

function ResultsController($scope, $http, $location) {
    $scope.entrants = [];

    // Populate the entrants from the API
    $http.get('/api/entrants', {params : {token: $scope.token}}).
        success(function(data){
            $scope.entrants = data;
        });
}