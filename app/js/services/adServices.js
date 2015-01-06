'use strict';

Advertisements.factory('adServices', function ($http, $log) {
    var adService = {};

    adService.params = {};

    adService.GetUserAds = function (headers, callback) {
        $http.get('http://softuni-ads.azurewebsites.net/api/user/ads',
            {
                params: this.params,
                headers: headers
            })
            .success(function (data, status, headers, config) {
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            });
    };

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
        $http.put('http://softuni-ads.azurewebsites.net/api/user/ads/deactivate/' + adId, {}, {headers: headers})
            .success(function (data, status, headers, config) {
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            });
    };

    adService.EditAd = function (adId, headers, callback) {
        $http.put('http://softuni-ads.azurewebsites.net/api/user/ads/' + adId, {}, {headers: headers})
            .success(function (data, status, headers, config) {
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            });
    };

    adService.DeleteAd = function (adId, headers, callback) {
        $http.delete('http://softuni-ads.azurewebsites.net/api/user/ads/' + adId, {headers: headers})
            .success(function (data, status, headers, config) {
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            });
    };

    adService.RepublishAd = function (adId, headers, callback) {
        $http.put('http://softuni-ads.azurewebsites.net/api/user/ads/publishagain/' + adId, {}, {headers: headers})
            .success(function (data, status, headers, config) {
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            });
    };

    adService.clearParams = function () {
        adService.params.status = null;
        adService.params.pageId = null;
    };

    adService.clearParams();
    adService.params.pageSize = 5;

    return adService;
});