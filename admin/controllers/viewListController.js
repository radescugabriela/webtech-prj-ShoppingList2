let listc=angular.module('viewListController', []); 

listc.controller('viewListController', ['$scope','$http', function($scope,$http) {
    $scope.readRecords=function(){
        $http.get('/lists').then(function(listResponse) {
            $scope.lists = listResponse.data;
        });
    }
    
    $scope.readCategories=function(){
        $http.get('/categories').then(function(categoriesResponse) {
            $scope.categories = categoriesResponse.data;
        });
    }

    
}]);