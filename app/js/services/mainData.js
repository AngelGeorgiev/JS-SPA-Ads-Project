'use strict';

Advertisements.factory('mainData', function ($http) {
    var data = {};

    data.params = {};

    data.getAllAdds = function (success, error) {
        $http.get('http://softuni-ads.azurewebsites.net/api/ads', {params: this.params})
            .success(function (data) {
                success(data)
            }).error(error);
    };

    data.getAllTowns = function (success, error) {
        $http.get('http://softuni-ads.azurewebsites.net/api/towns')
            .success(function (data) {
                success(data)
            }).error(error);
    };

    data.getAllCategories = function (success, error) {
        $http.get('http://softuni-ads.azurewebsites.net/api/categories')
            .success(function (data) {
                success(data)
            }).error(error);
    };

    data.clearParams = function () {
        data.params.categoryId = null;
        data.params.townId = null;
        data.params.startPage = 1;
    };

    data.clearParams();
    data.params.pageSize = 5;

    return data;
});