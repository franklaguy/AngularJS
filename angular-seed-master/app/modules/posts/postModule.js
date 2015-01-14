angular.module('spBlogger.posts',[
                       	 'spBlogger.posts.filters',
                    	 'spBlogger.posts.services',
                    	 'spBlogger.posts.controllers',
                    	 'ui.router.compat'])//.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
                    		.config(function($stateProvider, $urlRouterProvider) {
                    			$stateProvider.state('allPosts', {
                    				url: '/posts',
                    				templateUrl: 'modules/posts/views/posts.html',
                    				controller: 'PostController'
                    			})
                    			.state('singlePost', {
                    				url: '/posts/:id/:permalink',
                    				templateUrl: 'modules/posts/views/singlePost.html',
                    				controller: 'PostDetailsController'
                    			});
                    	});
                    	//}]);
