'use strict';

Advertisements.controller('NavbarController', function ($scope, $location, $route, authentication, mainData, adServices) {
    $scope.username = authentication.GetUsername();

    $scope.logout = function () {
        authentication.ClearCredentials();
        mainData.clearParams();
        $route.reload();
    };

    $scope.clear = function () {
        mainData.clearParams();
        $route.reload();
    }

    $scope.clearStatus = function () {
        adServices.clearParams();
        $route.reload();
    }
});