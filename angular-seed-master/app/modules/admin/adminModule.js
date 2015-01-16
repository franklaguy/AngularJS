angular.module('admin',[
	'admin.filters',
	'admin.services',
	'admin.controllers',
	'admin.directives',
	'ui.router.compat'])
	.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			$stateProvider.state('admin', {
				url: '/admin',
				abstract: true,
				templateUrl: 'modules/admin/views/admin-home.html',
				controller: 'AdminController'
			})
			.state('admin.postNew', {
				url: '/posts/new',
				templateUrl: 'modules/admin/views/admin-new-post.html',
				controller: 'PostCreationController'
			})
			.state('admin.postUpdate', {
				url: '/posts/:id/edit',
				templateUrl: 'modules/admin/views/admin-update-post.html',
				controller: 'PostUpdateController'
			})
			.state('admin.postViewAll', {
				url: '',
				templateUrl: 'modules/admin/views/admin-all-post.html',
				controller: 'PostListController'
			});
			$urlRouterProvider.otherwise('/admin');
	}]);
