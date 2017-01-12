let addctl = angular.module('addInListController', []);

addctl.directive('myDirective', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) { //mCtrl is the ngModelController,
      function myValidation(value) {
        if (angular.equals(value.charAt(0),value.charAt(0).toUpperCase())) {
          mCtrl.$setValidity('charUp', true);
        } else {
          mCtrl.$setValidity('charUp', false);
        }
        return value;
      }
      mCtrl.$parsers.push(myValidation);
    }
  };
});

addctl.controller('addInListController', ['$scope','$http', function($scope,$http) {
    $scope.list;
    
    $http.get('/categories').then(function(categResponse) {
            $scope.categories = categResponse.data;
    });
    
    $scope.submit=function(){
        $http.post('/lists',$scope.list).
        success(function(data) {
            console.log("success");
        }).error(function(data) {
            console.error("error in posting");
        })
        
        $scope.list="";
    }
}]);