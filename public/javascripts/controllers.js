function SearchController($scope, $http, $location) {

    $scope.submitToken = function() {

        var token = $scope.token;
        var email = $scope.email;

        // See if this entrant exists..
        var entrant = $http.get('api/entrant', {params : {token: token, email: email}}).
                            success(function(data, status, headers, config){
                                console.log ("Retrieved : " + data.name);
                            }).
                            error(function(data,status, headers,config) {
                                console.log("WTF! : " + data);
                            });
    };
}