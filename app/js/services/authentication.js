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

    service.GetUserProfile = function (callback) {
        $http.get('http://softuni-ads.azurewebsites.net/api/user/profile', {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                callback(data)
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            });
    };

    service.EditUserProfile = function (editUserData, callback) {
        $http.put('http://softuni-ads.azurewebsites.net/api/user/profile', editUserData, {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                callback(data)
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            });
    };

    service.ChangePassword = function (passwordData, callback) {
        $http.put('http://softuni-ads.azurewebsites.net/api/user/ChangePassword', passwordData, {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                callback(data)
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            });
    };

    service.SetCredentials = function (serverData) {
        localStorage['accessToken'] = serverData.access_token;
        localStorage['username'] = serverData.username;
        localStorage['isAdmin'] = serverData.isAdmin ? serverData.isAdmin : false;
    };

    service.GetUsername = function () {
        return localStorage['username'];
    };

    service.ClearCredentials = function () {
        localStorage.clear();
    };

    service.GetHeaders = function() {
        return {
            Authorization: "Bearer " + localStorage['accessToken']
        };
    };

    service.isLoggedIn = function () {
        return localStorage['accessToken'];
    };

    return service;
});