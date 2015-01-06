'use strict';

Advertisements.factory('adServices', function ($http, $log) {
    var adService = {};

    adService.PublishAd = function (adData, headers, callback) {
        $http.post('http://softuni-ads.azurewebsites.net/api/user/ads', adData, {headers: headers})
            .success(function (data, status, headers, config) {
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            });
    };

    adService.DeactivateAd = function (adId, headers, callback) {
        $http.put('http://softuni-ads.azurewebsites.net/api/user/ads/deactivate/' + adId, {headers: headers})
            .success(function (data, status, headers, config) {
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            });
    };

    adService.GetUserAds = function (headers, callback) {
        $http.get('http://softuni-ads.azurewebsites.net/api/user/ads', {headers: headers})
            .success(function (data, status, headers, config) {
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            });
    };

    return adService;
});