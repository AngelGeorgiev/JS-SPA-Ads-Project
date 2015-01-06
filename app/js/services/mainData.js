'use strict';

Advertisements.factory('mainData', function ($http, $log) {
    var data = {};

    data.params = {};

    data.getAllAdds = function (success) {
        $http.get('http://softuni-ads.azurewebsites.net/api/ads', {params: this.params})
            .success(function (data, status, headers, config) {
                success(data)
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            });
    };

    data.getAllTowns = function (success) {
        $http.get('http://softuni-ads.azurewebsites.net/api/towns')
            .success(function (data, status, headers, config) {
                success(data)
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            })
    };

    data.getAllCategories = function (success) {
        $http.get('http://softuni-ads.azurewebsites.net/api/categories')
            .success(function (data, status, headers, config) {
                success(data)
            })
            .error(function (data, status, headers, config) {
                $log.warn(data)
            })
    };

    data.clearParams = function () {
        data.params.categoryId = null;
        data.params.townId = null;
        data.params.pageId = null;
    }

    data.clearParams();
    data.params.pageSize = 5;

    return data;
});