'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});

describe('The Single Page Blogger E@E Test', function(){
	browser.get('/');
	protractor = protractor.getInstance();
	
	it('Should have 4 posts', function(){
		var posts = element.all(by.repeater('post in posts'));
		expect(posts.count()).toBe(4);
	});
	it('Should redirect to #.posts/1/sample-title1', function(){
		var posts = element.all(by.repeater('post in posts'));
		posts.first().then(function(postElem){
			postElem.findElement(by.tagName('a')).then(function(a){
				a.click();
				expect(protractor.getCurrentUrl()).toMatch('/posts/1/simple-title1');
			});
		});
	});
});
