'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var projectServices = angular.module('myApp.services',['ngResource']);

projectServices.factory('Project',
  function(){
	var projects=[
	    {
	        "name": "Success", 
	        "id": "GOod",
	        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
	        
	        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
	    }, 
	{
	        "name": "Success1", 
	        "id": "GOod1",
	        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
	        
	        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
	    }
	    
	];
	
	return projects;
});