'use strict';

Advertisements.controller('AdsController', function ($scope, $location, authentication, adServices) {

    $scope.publishAd = function () {
        adServices.PublishAd($scope.adData, authentication.getHeaders(), function() {
                $location.path('/user/ads');
        })
    };

    $scope.deactivateAd = function (adId) {
        adServices.DeactivateAd(adId, authentication.getHeaders(), function () {
            getUserAds();
        })
    };

    var getUserAds = function () {
        adServices.GetUserAds(authentication.getHeaders(), function (resp) {
            $scope.userAds = resp;
        });
    }

    getUserAds();
});