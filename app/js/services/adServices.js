'use strict';

Advertisements.factory('adServices', function ($http) {
    var adService = {};

    adService.params = {};

    adService.GetUserAds = function (headers, success, error) {
        $http.get('http://softuni-ads.azurewebsites.net/api/user/ads',
            {
                params: this.params,
                headers: headers
            })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    adService.PublishAd = function (adData, headers, success, error) {
        $http.post('http://softuni-ads.azurewebsites.net/api/user/ads', adData, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    adService.DeactivateAd = function (adId, headers, success, error) {
        $http.put('http://softuni-ads.azurewebsites.net/api/user/ads/deactivate/' + adId, {}, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    adService.GetUserAdById = function (adId, headers, success, error) {
        $http.get('http://softuni-ads.azurewebsites.net/api/user/ads/' + adId,
            {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    adService.EditAd = function (currentAd, headers, success, error) {
        $http.put('http://softuni-ads.azurewebsites.net/api/user/ads/' + currentAd.id, currentAd, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    adService.DeleteAd = function (adId, headers, success, error) {
        $http.delete('http://softuni-ads.azurewebsites.net/api/user/ads/' + adId, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    adService.RepublishAd = function (adId, headers, success, error) {
        $http.put('http://softuni-ads.azurewebsites.net/api/user/ads/publishAgain/' + adId, {}, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    adService.clearParams = function () {
        adService.params.status = null;
        adService.params.startPage = 1;
    };

    adService.clearParams();
    adService.params.pageSize = 5;

    return adService;
});