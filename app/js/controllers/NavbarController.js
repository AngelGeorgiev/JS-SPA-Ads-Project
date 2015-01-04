'use strict';

Advertisements.controller('NavbarController', function ($scope, $location, $route, authentication) {
    $scope.userData = authentication.GetCredentials();

    $scope.logout = function () {
        authentication.ClearCredentials();
        $route.reload();
    };
});