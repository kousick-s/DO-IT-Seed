'use strict';

/* Controllers */

var projectcontroller = angular.module('myApp.controllers', []);

projectcontroller.controller('ProjectListCtrl', ['$scope',
  function($scope) {
	$scope.projects = [
	                    	    {
	                    	        "name": "Success", 
	                    	        "id": "GOod",
	                    	        "collaborator": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
	                    	        
	                    	        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
	                    	    }, 
	                    	{
	                    	        "name": "Success1", 
	                    	        "id": "GOod1",
	                    	        "collaborator": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
	                    	        
	                    	        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
	                    	    }
	                    	    
	                    	];
    $scope.orderProp = 'age';
  }]);
projectcontroller.controller('ProjectDetailCtrl', ['$scope',
                                                 function($scope) {
                                               	
                                                 }]);