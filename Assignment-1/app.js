( function(){
  'use strict';
    angular.module('Menu',[])
    
    .controller('MenuController', function($scope) {
          $scope.name="";
          $scope.totalValue="";

          $scope.displayNumeric=function(){
            var score = $scope.name.split(",").length;
            $scope.totalValue = calculateNumericForString(score);
          };
          
          function calculateNumericForString(total){

            if(total>3)
              return "Too much";
            else
              return "Enjoy!"; 

          }

    });
  })();

