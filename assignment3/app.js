(function(){
  'use strict';


  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownAppController', NarrowItDownAppController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
  .directive('foundItems', FoundItems)
  ;


  function FoundItems() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }


  NarrowItDownAppController.$inject = ['MenuSearchService'];
  function NarrowItDownAppController(MenuSearchService) {
    var ctrl = this;

    ctrl.searchTerm = '';
    ctrl.searchFlag = false;

    ctrl.narrowItDown = function(searchTerm) {
      var getMatchedMenuItems = MenuSearchService.getMatchedMenuItems(searchTerm);

      getMatchedMenuItems.then(function(response){
        console.log(response);
        ctrl.found = response;
        ctrl.found['searchTerm'] = ctrl.searchTerm;

        ctrl.searchTerm = '';
        ctrl.searchFlag = true;
      })
      .catch(function(error){
        console.log(error);
      })
    };

    ctrl.removeItem = function(index) {
      ctrl.found.splice(index, 1);
    };

  }


  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      searchTerm = searchTerm.toLowerCase();

      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      })
      .then(function(result){
        var foundItems = [];

        if(!searchTerm){
          return foundItems;
        }
        else{
          var data = result.data.menu_items;
          for(var i=0; i<data.length; i++){
            if(checkForSearchTerm(data[i].description)){
              foundItems.push(data[i]);
            }
          }
        }

        return foundItems;
      })
      .catch(function(error){
        console.log(error);
        return error;
      });

      function checkForSearchTerm(string) {
        string = string.toLowerCase();

        if(string.indexOf(searchTerm) === -1){
          return false;
        }
        else {
          return true;
        }
      }

      return response;
    }
  }


})();
