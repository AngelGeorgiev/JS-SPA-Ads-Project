'use strict';

var Advertisements = angular.module('Advertisements', ['ngRoute', 'ui.bootstrap', 'angular-loading-bar']);

Advertisements.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api');

Advertisements.config(function ($routeProvider) {
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
        .when('/user/profile', {
            templateUrl:'templates/edit-user.html',
            controller:'MainController'
        })
        .when('/user/ads/publish', {
            templateUrl:'templates/publish-ad.html',
            controller:'MainController'
        })
        .when('/user/ads/edit/:id', {
            templateUrl:'templates/edit-ad.html',
            controller:'MainController'
        })
        .when('/user/ads/delete/:id', {
            templateUrl:'templates/delete-ad.html',
            controller:'MainController'
        })
        .when('/admin/home', {
            templateUrl:'templates/admin-ads.html',
            controller:'MainController'
        })
        .when('/admin/ads', {
            templateUrl:'templates/user-ads.html',
            controller:'MainController'
        })
        .when('/admin/profile', {
            templateUrl:'templates/edit-user.html',
            controller:'MainController'
        })
        .when('/admin/ads/publish', {
            templateUrl:'templates/publish-ad.html',
            controller:'MainController'
        })
        .when('/admin/ads/edit/:id', {
            templateUrl:'templates/edit-ad.html',
            controller:'MainController'
        })
        .when('/admin/ads/delete/:id', {
            templateUrl:'templates/delete-ad.html',
            controller:'MainController'
        })
        .otherwise({redirectTo: '/'})

    });