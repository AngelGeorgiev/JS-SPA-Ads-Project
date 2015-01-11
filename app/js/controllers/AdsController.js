'use strict';

Advertisements.controller('AdsController', function ($scope, $location, $routeParams, authentication, adServices, notifyService) {

    $scope.publishAd = function () {
        var imageHtml = document.getElementById('adImageData').getElementsByTagName('img')[0];
        $scope.adData.imageDataUrl = imageHtml ? imageHtml.currentSrc : "";
        adServices.PublishAd($scope.adData, authentication.GetHeaders(),
            function() {
                notifyService.showInfo("Successful Ad Publish!");
                $location.path('/user/ads');
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Ad Publish!", serverError)
            })
    };

    $scope.deactivateAd = function (adId) {
        adServices.DeactivateAd(adId, authentication.GetHeaders(),
            function () {
                notifyService.showInfo("Successful Ad Deactivation!");
                getUserAds();
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Ad Deactivation!", serverError)
            })
    };

    $scope.displayAd = function (adId) {
        $location.path('/user/ads/edit/'+adId);
    };

    $scope.displayDeleteAd = function (adId) {
        $location.path('/user/ads/delete/'+adId);
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
        adServices.EditAd($scope.currentAd, authentication.GetHeaders(),
            function () {
                notifyService.showInfo("Successful Ad Edit!");
                $location.path('/user/ads');
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Ad Edit!", serverError)
            })
    };

    $scope.deleteAd = function () {
        adServices.DeleteAd($scope.currentAd.id, authentication.GetHeaders(),
            function () {
                notifyService.showInfo("Successful Ad Deletion!");
                $location.path('/user/ads');
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Ad Deletion!", serverError)
            })
    };

    $scope.republishAd = function (adId) {
        adServices.RepublishAd(adId, authentication.GetHeaders(),
            function () {
                notifyService.showInfo("Successful Ad Republish!");
                getUserAds();
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Ad Republish!", serverError)
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
    };

    var getUserAds = function (adId) {

        if (!adId) {
            adServices.GetUserAds(authentication.GetHeaders(),
                function (resp) {
                    $scope.userAds = resp;
                },
                function () {
                    notifyService.showError("Unsuccessful Connection to Database!")
                });
        } else {
            adServices.GetUserAdById(adId, authentication.GetHeaders(),
                function (resp) {
                    $scope.currentAd = resp;
                },
                function () {
                    notifyService.showError("Unsuccessful Connection to Database!")
                })
        }
    };

    getUserAds($routeParams.id);
});