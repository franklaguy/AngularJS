'use strict';

/* Services */


angular.module('spBlogger.posts.services', [])
	.factory('postService', function() {
		return {
			posts: [{
				id: 1,
				title: 'Sample title1...',
				content: 'Sample content...',
				permalink: 'simple-title',
				author: 'Indie',
				dataPublished: '2012-04-04'
			}, {
				id: 2,
				title: 'Sample title2...',
				content: 'Sample content...',
				permalink: 'simple-title2',
				author: 'Indie',
				dataPublished: '2012-05-04'
			}, {
				id: 3,
				title: 'Sample title3...',
				content: 'Sample content...',
				permalink: 'simple-title3',
				author: 'Indie',
				dataPublished: '2012-06-04'
			}, {
				id: 4,
				title: 'Sample title4...',
				content: 'Sample content...',
				permalink: 'simple-title4',
				author: 'Indie',
				dataPublished: '2012-07-04'
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
