'use strict';

Advertisements.controller('AdsController', function ($scope, $location, $routeParams, authentication, adServices) {

    $scope.publishAd = function () {
        $scope.adData.imageDataUrl = document.getElementById('adImageData').getElementsByTagName('img')[0].currentSrc;
        adServices.PublishAd($scope.adData, authentication.getHeaders(), function() {
            $location.path('/user/ads');
        })
    };

    $scope.deactivateAd = function (adId) {
        adServices.DeactivateAd(adId, authentication.getHeaders(), function () {
            getUserAds();
        })
    };

    $scope.displayAd = function (adId) {
        $location.path('/user/ads/edit/'+adId);
    };

    $scope.editAd = function () {
        $scope.currentAd.imageDataUrl = document.getElementById('adImageData').getElementsByTagName('img')[0].currentSrc;
        adServices.EditAd($scope.currentAd, authentication.getHeaders(), function () {
            $location.path('/user/ads');
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
        adServices.params.startPage = 1;
        $scope.userStartPage = 1;
        getUserAds();
    };

    $scope.userPagination = function () {
        adServices.params.startPage = $scope.userStartPage;
        getUserAds();
    };

    $scope.removeImage = function () {
        $scope.currentAd.imageDataUrl = "";
    }

    var getUserAds = function (adId) {

        if (!adId) {
            adServices.GetUserAds(authentication.getHeaders(), function (resp) {
                $scope.userAds = resp;
            });
        } else {
            adServices.GetUserAdById(adId, authentication.getHeaders(), function (resp) {
                $scope.currentAd = resp;
            })
        }
    };

    getUserAds($routeParams.id);
});