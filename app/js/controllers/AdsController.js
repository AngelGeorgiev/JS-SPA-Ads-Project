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
        adServices.params.startPage = 1;
        $scope.userStartPage = 1;
        getUserAds();
    };

    $scope.userPagination = function () {
        adServices.params.startPage = $scope.userStartPage;
        getUserAds();
    };

    var getUserAds = function () {
        adServices.GetUserAds(authentication.getHeaders(), function (resp) {
            $scope.userAds = resp;
        });
    };

    $scope.$on('flow::fileAdded', function (event, $flow, flowFile) {
        var reader = new FileReader();
        reader.onload = function(event) {
            $scope.fileData = event.target.result.substr(event.target.result.indexOf('base64')+7);
            $scope.fileName = flowFile.file.name;
        };
        reader.readAsDataURL(flowFile.file);
    });

    getUserAds();
});