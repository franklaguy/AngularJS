'use strict';

/* Directives */


angular.module('spBlogger.admin.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
