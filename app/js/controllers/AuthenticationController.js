'use strict';

Advertisements.controller('AuthenticationController', function ($scope, $location, authentication) {
    $scope.login = function () {
        authentication.Login($scope.loginData, function(serverData) {
            authentication.SetCredentials(serverData);
            $location.path('/');
        });
    };
    $scope.register = function () {
        authentication.Register($scope.registerData, function(serverData, $scope) {
            authentication.SetCredentials(serverData);
            $location.path('/');
        });
    };
});