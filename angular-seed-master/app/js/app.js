'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.router.compat'
])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider.state('random-math', {url:'/random-math', controller:'Controller1Controller', templateUrl:'partials/random-math.html'})
	.state('percentages', {url:'/percentages', controller:'Controller1Controller', templateUrl:'partials/percentages.html'})
	.state('binding', {url:'/binding', controller:'Controller1Controller', templateUrl:'partials/binding.html'})
	.state('arrays', {url:'/arrays', controller:'Controller1Controller', templateUrl:'partials/arrays.html'})
	.state('timeout', {url:'/timeout', controller:'Controller1Controller', templateUrl:'partials/timeout.html'})
	.state('emit', {url:'/emit', controller:'Controller1Controller', templateUrl:'partials/emit.html'})
	.state('view1', {url:'/view1', controller:'Controller1Controller', templateUrl:'partials/partial1.html'})
	.state('view2', {url:'/view2/:firstname/:lastname', templateUrl: 'partials/partial2.html', controller: 'Controller2Controller',
	  resolve:{
		  names: function(){
			  return ['Misko', 'Vojta', 'Brad']
		  }
	  }
  }).state('forms', {url:'/forms', controller:'Controller1Controller', templateUrl:'partials/forms.html'});
  //$urlRouterProvider.otherwise('/view1');
})
.run(function($rootScope){
	$rootScope.title = 'Nadia';
	$rootScope.name = "Root Scope";
})
.service('helloService', function($timeout){
	this.sayHello = function(name){
		$timeout(function(){
			console.log('Hello '+name+' We\'re running a service that loads in 3 secs');
		}, 3000);
	}
})
.run(function(helloService){ helloService.sayHello('World!'); })
.factory('noteFactory', function($http) { // example
	return {
		addNote: function(note){},
		updateNote: function(note){},
		getNotes: function(){},
		getNote: function(){}
	}
})
.provider('greet', function() {
	this.greeting = 'Hello';
	this.$get = function(){
		var greeting = this.greeting;
		return function(name){ console.log(greeting + ', ' + name); }
	}
	this.setGreeting = function(greeting){ this.greeting = greeting; }
})
.config(function(greetProvider) {
	greetProvider.setGreeting('Hola');
})
.value('appVersion','0.2')
.constant('DATA_SOURCE', 'a string here')
.config(function($provide) {  // example
	$provide.decorator('$log', function($delegate){
		$delegate.postInfoToURI = function(message){
			$delegate.log('Data to post:'+message);
			$delegate.log('Sending data to server');
		}
		return $delegate;
	});
});

angular.module('spBlogger', ['ui.router.compat'])

	//.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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
	})
	//}])
	.run(['state', function(state) {
	$state.go('allPosts');
}]);

