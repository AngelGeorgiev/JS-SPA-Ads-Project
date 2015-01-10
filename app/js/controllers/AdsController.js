'use strict';

Advertisements.controller('AdsController', function ($scope, $location, $routeParams, authentication, adServices) {

    $scope.publishAd = function () {
        $scope.adData.imageDataUrl = document.getElementById('adImageData').getElementsByTagName('img')[0].currentSrc;
        adServices.PublishAd($scope.adData, authentication.GetHeaders(), function() {
            $location.path('/user/ads');
        })
    };

    $scope.deactivateAd = function (adId) {
        adServices.DeactivateAd(adId, authentication.GetHeaders(), function () {
            getUserAds();
        })
    };

    $scope.displayAd = function (adId) {
        $location.path('/user/ads/edit/'+adId);
    };

    $scope.editAd = function () {
        var imageElement = document.getElementById('adImageData').getElementsByTagName('img')[0];
        if (imageElement) {
            if (imageElement.currentSrc != $scope.currentAd.imageDataUrl) {
                $scope.currentAd.imageDataUrl = imageElement.currentSrc;
                $scope.currentAd.changeImage = true;
            } else {
                $scope.currentAd.changeImage = false;
            }
        } else {
            $scope.currentAd.changeImage = true;
            $scope.currentAd.imageDataUrl = "";
        }
        adServices.EditAd($scope.currentAd, authentication.GetHeaders(), function () {
            $location.path('/user/ads');
        })
    };

    $scope.deleteAd = function (adId) {
        adServices.DeleteAd(adId, authentication.GetHeaders(), function () {
            getUserAds();
        })
    };

    $scope.republishAd = function (adId) {
        adServices.RepublishAd(adId, authentication.GetHeaders(), function () {
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
            adServices.GetUserAds(authentication.GetHeaders(), function (resp) {
                $scope.userAds = resp;
            });
        } else {
            adServices.GetUserAdById(adId, authentication.GetHeaders(), function (resp) {
                $scope.currentAd = resp;
            })
        }
    };

    getUserAds($routeParams.id);
});