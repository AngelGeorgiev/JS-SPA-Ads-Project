'use strict';

Advertisements.controller('AuthenticationController', function ($scope, $location, $route, authentication, mainData, adServices) {

    var ClearData = function () {
        $scope.loginData = "";
        $scope.registerData = "";
        $scope.userData = "";
        $scope.passwordData = "";
    };

    $scope.login = function () {
        authentication.Login($scope.loginData, function(serverData) {
            authentication.SetCredentials(serverData);
            ClearData();
            $location.path('/user/home');
        });
    };

    $scope.register = function () {
        authentication.Register($scope.registerData, function(serverData) {
            authentication.SetCredentials(serverData);
            ClearData();
            $location.path('/user/home');
        });
    };

    $scope.editUser = function () {
        authentication.EditUserProfile($scope.userData, function(serverData) {
            ClearData();
            $location.path('/user/home');
        });
    };

    $scope.changePassword = function () {
        authentication.ChangePassword($scope.passwordData, function(serverData) {
            ClearData();
            $location.path('/user/home');
        });
    };

    $scope.logout = function () {
        ClearData();
        authentication.ClearCredentials();
        mainData.clearParams();
        $route.reload();
    };

    $scope.clear = function () {
        mainData.clearParams();
        $route.reload();
    };

    $scope.clearStatus = function () {
        adServices.clearParams();
        $route.reload();
    }
});