'use strict';

Advertisements.controller('MainController', function ($scope, $location, mainData, authentication) {

    $scope.username = authentication.GetUsername();
    if ($scope.username) {
        authentication.GetUserProfile(function (serverData) {
            $scope.userData = serverData;
        })
    }
    var path = $location.path();
    if ((path.indexOf("user") != -1) && !authentication.isLoggedIn()) {
        $location.path('/');
    }


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
                ad.townName = currentTown[0] ? currentTown[0].name : null;
            }

            $scope.data = resp;
        });
    };

    getAds();

    $scope.townFilter = function (townId) {
        mainData.params.townId = townId;
        mainData.params.startPage = 1;
        $scope.startPage = 1;
        getAds();
    };

    $scope.categoryFilter = function (categoryId) {
        mainData.params.categoryId = categoryId;
        mainData.params.startPage = 1;
        $scope.startPage = 1;
        getAds();
    };

    $scope.pagination = function () {
        mainData.params.startPage = $scope.startPage;
        getAds();
    };
});