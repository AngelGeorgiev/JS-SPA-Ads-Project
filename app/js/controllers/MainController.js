Advertisements.controller('MainController', function ($scope, mainData) {
    mainData.getAllAdds(function (resp) {
        $scope.data = resp;
    }, 2);
    mainData.getAllTowns(function (resp) {
        $scope.towns = resp;
    })
    mainData.getAllCategories(function (resp) {
        $scope.categories = resp;
    })
});