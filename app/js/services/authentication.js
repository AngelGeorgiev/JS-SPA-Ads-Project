'use strict';

Advertisements.factory('authentication', function ($http, $log) {
    var service = {};

    service.Login = function (loginData, callback) {
        $http.post('http://softuni-ads.azurewebsites.net/api/user/login', loginData)
            .success(function (data, status, headers, config) {
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            });
    };

    service.Register = function (registerData, callback) {
        $http.post('http://softuni-ads.azurewebsites.net/api/user/register', registerData)
            .success(function (data, status, headers, config) {
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            });
    };

    service.SetCredentials = function (serverData) {
        localStorage['accessToken'] = serverData.access_token;
        localStorage['username'] = serverData.username;
    };

    service.GetCredentials = function () {
        return {
            username: localStorage['username'],
            accessToken: localStorage['accessToken']
        }
    };

    service.ClearCredentials = function () {
        localStorage.clear();
    };

    return service;
});