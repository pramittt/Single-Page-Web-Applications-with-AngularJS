( function(){
  'use strict';
    angular.module('Menu',[])
    
    .controller('MenuController', function($scope) {
          $scope.name="";
          $scope.totalValue="";

          $scope.displayNumeric=function(){
            var score = $scope.name;
            $scope.totalValue = calculateNumericForString(score);
          };
          
          function calculateNumericForString(total){

            if(!total)
              return "Please enter data first";
            else
              {
                  total=total.split(",").length;
                  if(total<4)
                     return "Enjoy!";
                  else
                     return "Too much!";
              } 

          }

    });
  })();

