(function() {
  'use strict';

  angular.module('data')
  .component('categoryList', {
    templateUrl: 'src/data/components/category-list/categoryList.template.html',
    controller: CategoryListComponentController,
    bindings: {
      list: '<'
    }
  });

  function CategoryListComponentController() {
    var $ctrl = this;
  }


})();
