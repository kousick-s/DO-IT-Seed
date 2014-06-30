'use strict';

/* Controllers */

var projectcontroller = angular.module('myApp.controllers', []);

projectcontroller.controller('ProjectListCtrl', function($scope,
		ProjectsService) {
	$scope.projects = ProjectsService.list();
	$scope.SaveNew = function(){
		var sendjson={name:$scope.newProject.name};
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
					assignedvar = projectdet[i].assigned;
				}
			}

			$scope.assigned = assignedvar;
			$scope.projectdets = json;
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
