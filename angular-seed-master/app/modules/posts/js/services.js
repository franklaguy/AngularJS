'use strict';

/* Services */
angular.module('spBlogger.posts.services', [])
	.value('version', 'v0.3')
	.factory('postService', function() {
		return {
			posts: [{
				id: 1,
				title: 'Sample post 1...',
				content: 'Sample post content...',
				permalink: 'simple-post',
				author: 'Indie',
				datePublished: '2012-04-04'
			}, {
				id: 2,
				title: 'Sample post 2...',
				content: 'Sample post content...',
				permalink: 'simple-post2',
				author: 'Indie',
				datePublished: '2012-05-04'
			}, {
				id: 3,
				title: 'Sample post 3...',
				content: 'Sample post content...',
				permalink: 'simple-post3',
				author: 'Indie',
				datePublished: '2012-06-04'
			}, {
				id: 4,
				title: 'Sample post4...',
				content: 'Sample post content...',
				permalink: 'simple-post4',
				author: 'Indie',
				datePublished: '2012-07-04'
			}],
			getAll: function(){
				return this.posts;
			},
			getPostById: function(id){
				for(var i in this.posts){
					if(this.posts[i].id == id){
						return this.posts[i];
					}
				}
			}
		}
	});
