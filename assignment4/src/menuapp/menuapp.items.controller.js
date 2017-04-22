(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['itemsData'];
  function ItemsController(itemsData) {
    var items = this;

    var data = itemsData.data;
    items.category = data.category.name;
    items.list = data.menu_items;
  }

})();
