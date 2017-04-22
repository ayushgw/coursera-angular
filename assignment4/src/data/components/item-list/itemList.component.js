(function() {
  'use strict';

  angular.module('data')
  .component('itemList', {
    templateUrl: 'src/data/components/item-list/itemList.template.html',
    controller: ItemListComponentController,
    bindings: {
      list: '<',
    }
  });

  function ItemListComponentController() {
    var $ctrl = this;
  }

})();
