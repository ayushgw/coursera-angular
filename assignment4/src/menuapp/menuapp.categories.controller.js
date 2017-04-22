(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categoriesListData'];
  function CategoriesController(categoriesListData) {
    var categories = this;

    categories.list = categoriesListData.data;
  }

})();
