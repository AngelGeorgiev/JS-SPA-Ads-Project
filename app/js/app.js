'use strict';

var Advertisements = angular.module('Advertisements', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl:'templates/login.html',
                controller:'MainController'
            })
            .when('/register', {
                templateUrl:'templates/register.html',
                controller:'MainController'
            })
            .when('/', {
                templateUrl:'templates/all-ads.html',
                controller:'MainController'
            })
            .when('/user/home', {
                templateUrl:'templates/all-ads.html',
                controller:'MainController'
            })
            .when('/user/ads', {
                templateUrl:'templates/user-ads.html',
                controller:'MainController'
            })
            .when('/user/ads/publish', {
                templateUrl:'templates/publish-ad.html',
                controller:'MainController'
            })
            .otherwise({redirectTo: '/'})

    });
angular.module('Authentication', []);