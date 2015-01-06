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

    $scope.editAd = function (adId) {
        adServices.EditAd(adId, authentication.getHeaders(), function () {
            getUserAds();
        })
    };

    $scope.deleteAd = function (adId) {
        adServices.DeleteAd(adId, authentication.getHeaders(), function () {
            getUserAds();
        })
    };

    $scope.republishAd = function (adId) {
        adServices.RepublishAd(adId, authentication.getHeaders(), function () {
            getUserAds();
        })
    };

    $scope.statusFilter = function (status) {
        adServices.params.status = status;
        getUserAds();
    };

    var getUserAds = function () {
        adServices.GetUserAds(authentication.getHeaders(), function (resp) {
            $scope.userAds = resp;
        });
    };

    getUserAds();
});