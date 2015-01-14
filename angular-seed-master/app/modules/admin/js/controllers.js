'use strict';

/* Controllers */

angular.module('spBlogger.admin.controllers', [
                                             	 'spBlogger.admin.filters',
                                            	 'spBlogger.admin.services',
                                            	 'spBlogger.admin.controllers',
                                            	 'ui.router.compat'])
	.controller('AdminController',['$scope', function($scope) {
		
	}])
	.controller('PostCreationController',['$scope', function($scope){
		
	}])
	.controller('PostUpdateController',['$scope', function($scope){

	}])
	.controller('PostListController',['$scope', function($scope){

	}])
	.controller('MainController', ['$scope', '$q', '$interval',function($scope){
	
	}]);