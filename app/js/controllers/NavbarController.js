'use strict';

Advertisements.controller('NavbarController', function ($scope, $location, $route, authentication, mainData) {
    $scope.username = authentication.GetUsername();

    $scope.logout = function () {
        authentication.ClearCredentials();
        $route.reload();
    };

    $scope.clear = function () {
        mainData.clearParams();
        $route.reload();
    }
});