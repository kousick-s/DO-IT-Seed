'use strict';

/* Controllers */

var projectcontroller = angular.module('myApp.controllers', []);

projectcontroller.controller('ProjectListCtrl', ['$scope',
  function($scope) {
	$scope.projects = [
	                    	    {
	                    	        "name": "Success", 
	                    	        "id": "123",
	                    	        "collaborator": [{"cname":"Saurav"},{"cname":"Kousick"}],
	                    	        
	                    	        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
	                    	    }, 
	                    	{
	                    	        "name": "Success1", 
	                    	        "id": "1234",
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
                                    	                    	        
                                                    					"id":"123",
                                                    					"name":"Success1",
                                    	                    	        "tasks": [{
                                    	                    	        	"title":"HU-Assignment",
                                    	                    	        	"desc":"Carrying Tasks that can train Freshers and convert them into professinal Hashers !!",
                                    	                    	        	"assignedto":"kousick",
                                    	                    	        	"createdate":"27/06/2014",
                                    	                    	        	"duedate":"30/06/2014",
                                    	                    	        	"completed":"False",
                                    	                    	        	"priority":"high"},
                                    	                    	        	
                                    	                    	        	{	
                                    	                    	        	"title":"HU-Assignment",
                                    	                    	        	"desc":"Carrying Tasks that can train Freshers and convert them into professinal Hashers !!",
                                    	                    	        	"assignedto":"Saurav",
                                    	                    	        	"createdate":"27/06/2014",
                                    	                    	        	"duedate":"30/06/2014",
                                    	                    	        	"completed":"True",
                                    	                    	        	"priority":"low"}],
                                            	                    	    "assigned":[{"name":"Kousick","desig":"dev","img":"./img/kousick.jpg"},{"name":"Saurav","desig":"dev","img":"./img/kousick.jpg"}]
                                                	                                    },
                                                    
                                                    
                    	                    	        
                                    					
                    	                    	        {
                        	                    	        
                                        					"id":"1234",
                                        					"name":"Success1",
                        	                    	        "tasks": [{
                        	                    	        	"title":"HU-Assignment",
                        	                    	        	"desc":"Carrying Tasks that can train Freshers and convert them into professinal Hashers !!",
                        	                    	        	"assignedto":"kousick",
                        	                    	        	"createdate":"27/06/2014",
                        	                    	        	"duedate":"30/06/2014",
                        	                    	        	"completed":"False",
                        	                    	        	"priority":"showstopper"},
                        	                    	        	
                        	                    	        	{	
                        	                    	        	"title":"HU-Assignment",
                        	                    	        	"desc":"Carrying Tasks that can train Freshers and convert them into professinal Hashers !!",
                        	                    	        	"assignedto":"Saurav",
                        	                    	        	"createdate":"27/06/2014",
                        	                    	        	"duedate":"30/06/2014",
                        	                    	        	"completed":"False",
                        	                    	        	"priority":"high"}],
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
                                                    	 assignedvar = projectdet[i].assigned;
                                                    		}
                                                    	}
                                                   
                                                    $scope.assigned=assignedvar;                                                  
                                                    $scope.projectdets=json;
                                                   }]);

var ModalDemoCtrl = function ($scope, $modal, $log) {

	  $scope.items = ['item1', 'item2', 'item3'];

	  $scope.open = function (size) {

	    var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller: ModalInstanceCtrl,
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };
	};
	
	var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

		  $scope.items = items;
		  $scope.selected = {
		    item: $scope.items[0]
		  };

		  $scope.ok = function () {
		    $modalInstance.close($scope.selected.item);
		  };

		  $scope.cancel = function () {
		    $modalInstance.dismiss('cancel');
		  };
		};
