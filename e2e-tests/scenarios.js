'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('app', function() {

	beforeEach(function() {
		browser.ignoreSynchronization = true;
	});

	describe('index page', function() {
		beforeEach(function() {
			browser.get('/');
		});
		
		it('should render h3 on index page', function() {
			browser.sleep(5000);
			browser.waitForAngular();
			expect(element.all(by.css('h3.text-center')).first().getText()).toMatch(/Мнемосхема/);
		});
		
		it('should go to elements page', function() {
			browser.sleep(5000);
			browser.waitForAngular();
			element.all(by.css('.btn-group .btn.btn-default')).first().click();
			expect(browser.getLocationAbsUrl()).toMatch("/elements");
		});
	});
		
	describe('elements page', function() {
		
		beforeEach(function() {
			browser.get('/#/elements');
		});
		
		it('should render h3 on elements page', function() {
			browser.sleep(5000);
			browser.waitForAngular();
			expect(element.all(by.css('h3.text-center')).first().getText()).toMatch(/Элементы/);
		});
		
		it('should render elements', function() {
			browser.sleep(5000);
			browser.waitForAngular();
			
			element.all(by.css('div.visible-lg ul li.ng-scope')).count().then(function(count) {
				expect(count).toEqual(21);
				expect(count).not.toEqual(0);
			});
			
		});

	});
	

});
