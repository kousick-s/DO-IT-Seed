'use strict';

/* Controllers */

var projectcontroller = angular.module('myApp.controllers', []);

projectcontroller.controller('ProjectListCtrl', ['$scope',
  function($scope) {
	$scope.projects = [
	                    	    {
	                    	        "name": "Success", 
	                    	        "id": "GOod",
	                    	        "collaborator": [{"cname":"Saurav"},{"cname":"Kousick"}],
	                    	        
	                    	        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
	                    	    }, 
	                    	{
	                    	        "name": "Success1", 
	                    	        "id": "GOod1",
	                    	        "collaborator": [{"cname":"Saurav"},{"cname":"Kousick"}], 
	                    	        
	                    	        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
	                    	    }
	                    	    
	                    	];
    $scope.orderProp = 'age';
  }]);
projectcontroller.controller('ProjectDetailCtrl', ['$scope',
                                                 function($scope) {
                                               	
                                                 }]);

projectcontroller.controller('ProjectDetailCtrl', ['$scope', '$routeParams', 'Project',
                                                   function($scope, $routeParams, Project) {
													
                                                    var projectdet = [{
                                    	                    	        
                                                    					"id":"GOod",
                                                    					"name":"Success1",
                                    	                    	        "tasks": [{
                                    	                    	        	"title":"HU-Assignment",
                                    	                    	        	"desc":"Carrying Tasks that can train Freshers and convert them into professinal Hashers !!",
                                    	                    	        	"assignedto":"kousick",
                                    	                    	        	"createdate":"27/06/2014",
                                    	                    	        	"duedate":"30/06/2014",
                                    	                    	        	"completed":"False"},
                                    	                    	        	
                                    	                    	        	{	
                                    	                    	        	"title":"HU-Assignment",
                                    	                    	        	"desc":"Carrying Tasks that can train Freshers and convert them into professinal Hashers !!",
                                    	                    	        	"assignedto":"Saurav",
                                    	                    	        	"createdate":"27/06/2014",
                                    	                    	        	"duedate":"30/06/2014",
                                    	                    	        	"completed":"False"}],
                                            	                    	    "assigned":[{"name":"Kousick","desig":"dev","img":"./img/kousick.jpg"},{"name":"Saurav","desig":"dev","img":"./img/kousick.jpg"}]
                                                	                                    },
                                                    
                                                    {
                    	                    	        
                                    					"id":"GOod1",
                                    					"name":"Success",
                    	                    	        "tasks": [{
                    	                    	        	"title":"HU-Assignment",
                    	                    	        	"desc":"Carrying Tasks that can train Freshers and convert them into professinal Hashers !!",
                    	                    	        	"assignedto":"kousick",
                    	                    	        	"createdate":"27/06/2014",
                    	                    	        	"duedate":"30/06/2014",
                    	                    	        	"completed":"False"},
                    	                    	        	
                    	                    	        {	
                    	                    	        	"title":"HU-Assignment",
                    	                    	        	"desc":"Carrying Tasks that can train Freshers and convert them into professinal Hashers !!",
                    	                    	        	"assignedto":"Saurav",
                    	                    	        	"createdate":"27/06/2014",
                    	                    	        	"duedate":"30/06/2014",
                    	                    	        	"completed":"False"}],
                            	                    	    "assigned":[{"name":"Kousick","desig":"dev","img":"./img/kousick.jpg"},{"name":"Saurav","desig":"dev","img":"./img/kousick.jpg"}]
                                	                                    },
                    	                    	        {
                        	                    	        
                                        					"id":"GOod1",
                                        					"name":"Success1",
                        	                    	        "tasks": [{
                        	                    	        	"title":"HU-Assignment",
                        	                    	        	"desc":"Carrying Tasks that can train Freshers and convert them into professinal Hashers !!",
                        	                    	        	"assignedto":"kousick",
                        	                    	        	"createdate":"27/06/2014",
                        	                    	        	"duedate":"30/06/2014",
                        	                    	        	"completed":"False"},
                        	                    	        	
                        	                    	        	{	
                        	                    	        	"title":"HU-Assignment",
                        	                    	        	"desc":"Carrying Tasks that can train Freshers and convert them into professinal Hashers !!",
                        	                    	        	"assignedto":"Saurav",
                        	                    	        	"createdate":"27/06/2014",
                        	                    	        	"duedate":"30/06/2014",
                        	                    	        	"completed":"False"}],
                    	                    	    "assigned":[{"name":"Kousick","desig":"dev","img":"./img/kousick.jpg"},{"name":"Saurav","desig":"dev","img":"./img/kousick.jpg"}]
                        	                                    },
                    	                    	        
                                                    
                                                    					];
                                                    
                                                    var json=[];
                                                    var assignedvar=[];
                                                    for(var i=0;i<projectdet.length;i++)
                                                    	{
                                                    	var id=projectdet[i].id;
                                                    	if(id===$routeParams.id)
                                                    		{
                                                    		json.push(projectdet[i]);
                                                    	 assignedvar.push(projectdet[i].assigned);
                                                    		}
                                                    	}
                                                   
                                                    $scope.assigned=assignedvar;                                                  
                                                    $scope.projectdets=json;
                                                   }]);