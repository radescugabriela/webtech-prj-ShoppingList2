var app=angular.module("myApp", ['ngRoute','viewListController','addInListController','editListController']);

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/addInList', {
      templateUrl: 'views/addInList.html', 
      controller: 'addInListController'
   }).
   
   when('/viewList', {
      templateUrl: 'views/viewList.html', 
      controller: 'viewListController'
   }).
   
   when('/home',{
      templateUrl: 'views/homePage.html'
   }).
   
   when('/editList',{
      templateUrl: 'views/editList.html', 
      controller: 'editListController'
   }).

   otherwise({
       redirectTo: '/homePage'
   });
	
}]);