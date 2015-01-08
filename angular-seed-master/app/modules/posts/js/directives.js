'use strict';

/* Directives */


angular.module('spBlogger.posts.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
