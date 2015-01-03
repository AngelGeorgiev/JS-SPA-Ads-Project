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

    });