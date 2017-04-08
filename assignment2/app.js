(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Controller 1
ToBuyController.$inject = ['ShoppingListCheckOffService']
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.itemsToBuy();

    toBuy.buyItem = function(index) {
        ShoppingListCheckOffService.buyItem(index);
    };
}

// Controller 2
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.itemsBought();

}

// Service
function ShoppingListCheckOffService() {
    var service = this;

    //Array: Items to be bought
    var toBuyItems = [
        { name: "bread", quantity: 1 },
        { name: "eggs", quantity: 12 },
        { name: "batteries", quantity: 2 },
        { name: "cookies", quantity: 10 },
        { name: "chips", quantity: 2 },
        { name: "biscuits", quantity: 5 }
    ];
    service.itemsToBuy = function() {
        return toBuyItems;
    };

    //Array: Items already bought
    var boughtItems = [];
    service.itemsBought = function() {
        return boughtItems;
    };

    //On buyItem
    service.buyItem = function(itemIndex) {
        boughtItems.push(toBuyItems[itemIndex]);
        toBuyItems.splice(itemIndex, 1);
    }
}

})();