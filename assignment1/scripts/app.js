(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController)

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope, $filter){
    $scope.lunchItems = '';

    $scope.checkIfTooMuch = function(){
      var lunchItems = $scope.lunchItems;

      if (!lunchItems) {
        $scope.message = "Please enter data first!";
        $scope.msg_ok = false;
      }
      else {
        var lunch = lunchItems.split(',');
        var n = lunch.length;
        var lunchRefined = [];

        //To filter empty entries
        for(var i=0; i<n; i++){
          if(lunch[i] == "" || lunch[i] == " "){
            //do nothing
          }
          else {
            lunchRefined.push(lunch[i]);
          }
        }

        var noOfItems = lunchRefined.length;
        if (noOfItems > 3) {
          $scope.message = "Too much!";
          $scope.msg_ok = true;
        }
        else if (noOfItems <= 0) {
          $scope.message = "Please enter data first!";
          $scope.msg_ok = false;
        }
        else {
          $scope.message = "Enjoy!";
          $scope.msg_ok = true;
        }
      }
    }

  }

})();
