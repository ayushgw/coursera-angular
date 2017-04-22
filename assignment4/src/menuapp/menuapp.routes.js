(function() {
  'use strict';

  angular.module('MenuApp')
  .config(MenuAppRoutesConfig);

  MenuAppRoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function MenuAppRoutesConfig($stateProvider, $urlRouterProvider) {

    //Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // ** Setting up UI states **
    $stateProvider

    // home
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })

    // categories
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/categories.template.html',
      controller: 'CategoriesController',
      controllerAs: 'categories',
      resolve: {
        categoriesListData: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    // items
    .state('items', {
      url: '/item-details/{itemShortName}',
      templateUrl: 'src/menuapp/templates/items.template.html',
      controller: 'ItemsController',
      controllerAs: 'items',
      resolve: {
        itemsData: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.itemShortName);
        }]
      }
    })
    ;
  }

})();
