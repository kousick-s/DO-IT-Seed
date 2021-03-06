'use strict';

/* Controllers */

var projectcontroller = angular.module('myApp.controllers', []);

projectcontroller.controller('ProjectListCtrl', function($scope,
		ProjectsService) {
	$scope.projects = ProjectsService.list();
	$scope.SaveNew = function(){
		var sendjson={name:$scope.newProject.name,description:$scope.newProject.description,"collaborator": [{"cname":$scope.newProject.collaborator}]};
		ProjectsService.save(sendjson);
	};
});

projectcontroller.controller('ProjectDetailCtrl', [ '$scope', '$routeParams',
		'ProjectsService', function($scope, $routeParams, ProjectsService) {

			var projectdet = ProjectsService.projdet();
			
			var json = [];
			var assignedvar = [];
			for (var i = 0; i < projectdet.length; i++) {
				var id = projectdet[i].id;
				if (id === $routeParams.id) {
					json.push(projectdet[i]);
					assignedvar = projectdet[i].collaborator;
				}
			}

			$scope.assigned = assignedvar;
			$scope.projectdets = json;
			
			$scope.SaveNewTask = function(){
				var newtask={"title":$scope.newTask.title,"desc":$scope.newTask.desc,"assignedto":$scope.newTask.assigned,"priority":$scope.newTask.priority,"completed":$scope.newTask.status,"duedate":$scope.newTask.duedate,"created":new Date()};
				//ProjectsService.savetask($routeParams.id,newtask);
				
				for (var i = 0; i < projectdet.length; i++) {
					
					var id = projectdet[i].id;
					if (id === $routeParams.id) {
						projectdet[i].tasks.push(newtask);
					}
				}
			};
			$scope.SaveNewColl = function(){
				var newcoll={"name":$scope.newCollaborator.name,"desig":$scope.newCollaborator.desig,"img":$scope.newCollaborator.imgurl};
				//ProjectsService.savetask($routeParams.id,newtask);
				
				for (var i = 0; i < projectdet.length; i++) {
					
					var id = projectdet[i].id;
					if (id === $routeParams.id) {
						projectdet[i].collaborator.push(newcoll);
					}
				}
			};
			
			
			
		} ]);

var ModalDemoCtrl = function($scope, $modal, $log) {

	$scope.items = [ 'item1', 'item2', 'item3' ];

	$scope.open = function(size) {

		var modalInstance = $modal.open({
			templateUrl : 'myModalContent.html',
			controller : ModalInstanceCtrl,
			size : size,
			resolve : {
				items : function() {
					return $scope.items;
				}
			}
		});

		modalInstance.result.then(function(selectedItem) {
			$scope.selected = selectedItem;
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};
};
var ModalDemoCtrl1 = function($scope, $modal, $log) {

	$scope.items = [ 'item1', 'item2', 'item3' ];

	$scope.open = function(size) {

		var modalInstance = $modal.open({
			templateUrl : 'myModalContent1.html',
			controller : ModalInstanceCtrl1,
			size : size,
			resolve : {
				items : function() {
					return $scope.items;
				}
			}
		});

		modalInstance.result.then(function(selectedItem) {
			$scope.selected = selectedItem;
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};
};
var ModalDemoCtrl2 = function($scope, $modal, $log) {

	$scope.items = [ 'item1', 'item2', 'item3' ];

	$scope.open = function(size) {

		var modalInstance = $modal.open({
			templateUrl : 'myModalContent2.html',
			controller : ModalInstanceCtrl2,
			size : size,
			resolve : {
				items : function() {
					return $scope.items;
				}
			}
		});

		modalInstance.result.then(function(selectedItem) {
			$scope.selected = selectedItem;
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};
};
var ModalInstanceCtrl1 = function($scope, $modalInstance, items) {

	$scope.items = items;
	$scope.selected = {
		item : $scope.items[0]
	};

	$scope.ok = function() {
		$modalInstance.close($scope.selected.item);
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
};
var ModalInstanceCtrl2 = function($scope, $modalInstance, items) {

	$scope.items = items;
	$scope.selected = {
		item : $scope.items[0]
	};

	$scope.ok = function() {
		$modalInstance.close($scope.selected.item);
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
};

var ModalInstanceCtrl = function($scope, $modalInstance, items) {

	$scope.items = items;
	$scope.selected = {
		item : $scope.items[0]
	};

	$scope.ok = function() {
		$modalInstance.close($scope.selected.item);
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
};
