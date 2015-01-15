'use strict';

Advertisements.factory('adminServices', function ($http, baseServiceUrl) {
    var adminService = {};

    adminService.params = {};

    var adminServiceUrl = baseServiceUrl + "/admin";

    adminService.GetAds = function (headers, success) {
        $http.get(adminServiceUrl + '/ads',
            {
                params: this.params,
                headers: headers
            })
            .success(function (data, status, headers, config) {
                success(data);
            });
    };

    adminService.GetAdById = function (adId, headers, success) {
        $http.get(adminServiceUrl + '/ads/' + adId,
            {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            });
    };

    adminService.ApproveAd = function (adId, headers, success, error) {
        $http.put(adminServiceUrl + '/ads/approve/' + adId, {}, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    adminService.RejectAd = function (adId, headers, success, error) {
        $http.put(adminServiceUrl + '/ads/reject/' + adId, {}, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    adminService.EditAd = function (currentAd, headers, success, error) {
        $http.put(adminServiceUrl + '/ads/' + currentAd.id, currentAd, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    adminService.DeleteAd = function (adId, headers, success, error) {
        $http.delete(adminServiceUrl + '/ads/' + adId, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    adminService.clearParams = function () {
        adminService.params.status = null;
        adminService.params.categoryId = null;
        adminService.params.townId = null;
        adminService.params.startPage = 1;
    };

    adminService.clearParams();
    adminService.params.pageSize = 5;

    return adminService;
});