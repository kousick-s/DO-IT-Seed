'use strict';

/* Services */
var module=angular.module('myApp.services',[]);

// Demonstrate how to register services
// In this case it is a simple value service.
module.service('ProjectsService',
  function(){
	
	
	var projectdet = [{
        
		"id":"123",
		"name":"Success1",
		"collaborator": [{"name":"Kousick","desig":"dev","img":"./img/kousick.jpg"},{"name":"Saurav","desig":"dev","img":"./img/kousick.jpg"}],
        
        "description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
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
"collaborator": [{"name":"Kousick","desig":"dev","img":"./img/kousick.jpg"},{"name":"Saurav","desig":"dev","img":"./img/kousick.jpg"}],

"description": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
"name":"Success1",
"tasks": [{
"title":"HU-Assignment",
"desc":"Carrying Tasks that can train Freshers and convert them into professinal Hashers !!",
"assignedto":"kousick",
"createdate":"27/06/2014",
"duedate":"2014-06-27",
"completed":"False",
"priority":"showstopper"},

{	
"title":"HU-Assignment",
"desc":"Carrying Tasks that can train Freshers and convert them into professinal Hashers !!",
"assignedto":"Saurav",
"createdate":"27/06/2014",
"duedate":"2014-06-28",
"completed":"False",
"priority":"high"}],
"assigned":[{"name":"Kousick","desig":"dev","img":"./img/kousick.jpg"},{"name":"Saurav","desig":"dev","img":"./img/kousick.jpg"}]
},


		];
	
	this.list=function(){
		return projectdet;
	};
	
	this.projdet=function(){
		return projectdet;
	};
	this.save=function(newproject){
		newproject.id=projectdet.length+1;
		projectdet.push(newproject);
		
	};
	
	this.savetask=function(paramid,newtask){
		var json2 = [];
		for (var i = 0; i < projectdet.length; i++) {
			var id = projectdet[i].id;
			if (id === paramid) {
				//json2.push(projectdet[i]);
				projectdet[i].tasks.push(newtask);
			}
		}
	};
	
	
	
	
	
});