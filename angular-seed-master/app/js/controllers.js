'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('DemoController', ['$rootScope','$scope','$http', function($rootScope,$scope,$http){ }])
	.controller('FinanceController', function($scope) {
		$scope.salary = 0;
		$scope.percentage = 0;
		$scope.result = function (){
			return $scope.salary * $scope.percentage * 0.01;
		};
	})
	.controller('GreetingController', function($scope) {
		  $scope.now = new Date();
		  $scope.helloMessages = ['Hello','Bonjour','Hola','Ciao','Hallo'];
		  $scope.greeting = $scope.helloMessages[0];
		  $scope.getRandomHelloMessage = function(){
			  $scope.greeting = $scope.helloMessages[parseInt((Math.random() * $scope.helloMessages.length))];
		  }
	})
	.controller('SiteController', function($scope) {
		$scope.publisher = 'SitePoint';
		$scope.type = "Web Development";
		$scope.name = "Scope for SiteController";
	})
	.controller('BookController', function($scope) {
		$scope.books = ['Jump Start HTML5','Jump Start CSS','Jump Start Responsive Design'];
		$scope.name = "Scope for BookController";
		$scope.addToWishList = function(book){
			$scope.wishListCount++;
		};
		$scope.wishListCount = 0;
		$scope.$watch('wishListCount', function(newValue, oldValue){
			console.log('called '+newValue+' times');
			if(newValue == 2){ alert('Go to Cart?'); }
		});
	})
	.controller('TimeoutController', function($scope, $timeout) {
		$scope.scheduleTask = function(){
			$timeout(function(){
				$scope.message = 'Fetched after 3 secs';
				console.log('message='+$scope.message);
			}, 3000);
		}
	})
	.controller('MessageController', function($scope, $timeout){
		$scope.messages = [{ sender:'user1', text:'Message1' }];
		var timer, count = 0;
		$scope.loadMessages = function(){
			count++;
			$scope.messages.push({ sender:'user1', text:'Random message'+count });
			timer = $timeout($scope.loadMessages, 3000);
			if(count==3){
				$scope.$broadcast('EVENT_NO_DATA', 'Not Connected');
				$timeout.cancel(timer);
			}
		};
		timer = $timeout($scope.loadMessages, 3000);
		$scope.$on('EVENT_RECEIVED', function(){ console.log('Received emitted event'); });
	})
	.controller('StatsController', function($scope) {
		$scope.name = 'World';
		$scope.status = 'Connected';
		$scope.statusColor = 'green';
		$scope.$on('EVENT_NO_DATA', function(event, data) {
			console.log('Received broadcasted event');
			$scope.status = data;
			$scope.statusColor = 'red';
			$scope.$emit('EVENT_RECEIVED');
		});
	})
	.controller('Controller1Controller', function($scope, $location, $state){
		$scope.message = "Hello World";
		$scope.loadView2 = function(){
			$state.go('view2', {
				firstname: $scope.firstname,
				lastname: $scope.lastname
			});
		}
	})
	.controller('Controller2Controller', function($scope, $stateParams, names){
		$scope.now = new Date();
		$scope.firstname = $stateParams.firstname;
		$scope.lastname = $stateParams.lastname;
		$scope.names = names;
	})
	.controller('GreetController', function(greet){
		greet('Va-Lor');
	})
	.controller('LogController', function($scope, $log){ // example
		$scope.data = 'Sample data';
		$log.postInfoToURI('Added some data to scope');
	});

