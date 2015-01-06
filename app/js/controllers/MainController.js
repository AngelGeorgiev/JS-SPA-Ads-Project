'use strict';

Advertisements.controller('MainController', function ($scope, mainData) {

    var getAds = function () {
        mainData.getAllTowns(function (resp) {
            $scope.towns = resp;
        });

        mainData.getAllCategories(function (resp) {
            $scope.categories = resp;
        });
        
        mainData.getAllAdds(function (resp) {
            for (var key in resp.ads) {
                var ad = resp.ads[key];
                var currentCategory = $scope.categories.filter(function (category) {
                    return category.id == ad.categoryId;
                });
                ad.categoryName = currentCategory[0] ? currentCategory[0].name : null;
                var currentTown = $scope.towns.filter(function (town) {
                    return town.id == ad.townId;
                });
                ad.townName = currentTown[0].name ? currentTown[0].name : null;
            }

            $scope.data = resp;
        });
    };

    $scope.townFilter = function (townId) {
        mainData.params.townId = townId;
        getAds();
    };

    $scope.categoryFilter = function (categoryId) {
        mainData.params.categoryId = categoryId;
        getAds();
    };

    getAds();
});