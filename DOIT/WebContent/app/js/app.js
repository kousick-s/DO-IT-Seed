'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'ui.bootstrap',
  'myApp.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 // $locationProvider.html5Mode(true);
  $routeProvider
  .when('/view1', {templateUrl: 'partials/projectlist.html', controller: 'ProjectListCtrl'})
  .when('/projectdetails/:id', {templateUrl: 'partials/projectdetails.html', controller: 'ProjectDetailCtrl'})
  .otherwise({
      redirectTo: '/view1'
    });
  
}]);

angular.module('myApp').constant('appSettings', {
  AppURI: 'http://127.0.0.1:9080/'
});
