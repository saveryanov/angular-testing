'use strict';

describe('app.elements module', function() {

  var $scope, elementController;

  beforeEach(module('app.components.queue'));
  beforeEach(module('app.components.resources'));
  beforeEach(module('app.components.location'));
  beforeEach(module('app.elements'));

  describe('controller', function(){

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      elementController = $controller('elementController', {$scope: $scope});
    }));


    it('should be defined', function() {
      expect(elementController).toBeDefined();
    });

  });

});


