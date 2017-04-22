(function(){
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['ApiBasePath', '$http'];
  function MenuDataService(ApiBasePath, $http) {
    var service = this;

    service.getAllCategories = function() {
      var categories = $http.get(ApiBasePath + "/categories.json")
      .then(function(result) {
        return result;
      })
      .catch(function(error) {
        return error;
      });

      return categories;
    }

    service.getItemsForCategory = function(categoryShortName) {
      var params = {
        category: categoryShortName
      }
      var items = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: params
      })
      .then(function(result) {
        return result;
      })
      .catch(function(error) {
        return error;
      });

      return items;
    }

  }

})();
