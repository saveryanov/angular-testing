'use strict';

describe('app.components.request module', function() {

  beforeEach(module('app.components.request'));

  describe('factory: getFactory', function() {
	var factory;

	beforeEach(inject(function(getFactory) {
	  factory = getFactory;
	}));

	it('Should define method get', function() {
	  expect(factory.prototype.get).toBeDefined();
	  expect(factory.prototype.get).toEqual(jasmine.any(Function));
	});
  });
 
  // Factory of interest is called getFactory
  describe('factory: putFactory', function() {
	var factory = null;
	beforeEach(inject(function(putFactory) {
	  factory = putFactory;
	}))
	it('Should define method put', function() {
	  expect(factory.prototype.put).toBeDefined();
	  expect(factory.prototype.put).toEqual(jasmine.any(Function));
	});
  });
 
  // Factory of interest is called getFactory
  describe('factory: deleteFactory', function() {
	var factory = null;
	beforeEach(inject(function(deleteFactory) {
	  factory = deleteFactory;
	}))
	it('Should define method remove', function() {
	  expect(factory.prototype.remove).toBeDefined();
	  expect(factory.prototype.remove).toEqual(jasmine.any(Function));
	});
  });
 
  // Factory of interest is called getFactory
  describe('factory: postFactory', function() {
	var factory = null;
	beforeEach(inject(function(postFactory) {
	  factory = postFactory;
	}))
	it('Should define method post', function() {
	  expect(factory.prototype.post).toBeDefined();
	  expect(factory.prototype.post).toEqual(jasmine.any(Function));
	});
  });

 
});