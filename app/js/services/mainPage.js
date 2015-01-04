'use strict';

Advertisements.factory('mainData', function ($http, $log) {
   return {
       getAllAdds: function (success, id) {
           $http.get('http://softuni-ads.azurewebsites.net/api/ads?PageSize=5&StartPage='+id)
               .success(function (data, status, headers, config) {
                   success(data)
               })
               .error(function (data, status, headers, config) {
                   $log.warn(data)
               })
       },
       getAllTowns: function (success) {
           $http.get('http://softuni-ads.azurewebsites.net/api/towns')
               .success(function (data, status, headers, config) {
                   success(data)
               })
               .error(function (data, status, headers, config) {
                   $log.warn(data)
               })
       },
       getAllCategories: function (success) {
           $http.get('http://softuni-ads.azurewebsites.net/api/categories')
               .success(function (data, status, headers, config) {
                   success(data)
               })
               .error(function (data, status, headers, config) {
                   $log.warn(data)
               })
       }
   }
});