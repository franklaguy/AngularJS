'use strict';

/* jasmine specs for controllers go here */

describe('PostController Test\n', function(){
	  beforeEach(module('spBlogger.posts.controllers'));
	  beforeEach(module('spBlogger.posts.services'));

	  it('Should inititalize controller with 4 posts',
		  inject(function($rootScope,$controller,postService) {
			  var $scope = $rootScope.$new();
			  $controller('PostController', {$scope:$scope, postService:postService});
			  expect($scope.post.length).toBe(4);
		  }));
});

describe('PostDetailsController Test\n', function(){
	  beforeEach(module('spBlogger.posts.controllers'));
	  beforeEach(module('sui.router'));
	  beforeEach(module('spBlogger.posts.services'));

	  it('Should inititalize controller with 1 post',
		  inject(function($state,$stateParams,$rootScope,$controller,postService) {
			  var $scope = $rootScope.$new();
			  $stateParams.id = 2;
			  $controller('PostDetailsController', {$scope:$scope,$stateParams:$stateParams,$state:$state,postService:postService});
			  expect($scope.singlePost).not.toBe(undefined);
		  }));
});
