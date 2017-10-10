'use strict';

describe('app.bar module', function() {

  beforeEach(module('app.components.resources'));
  beforeEach(module('app.components.location'));
  beforeEach(module('app.alarmLog'));
  beforeEach(module('app.bar'));

  describe('controller', function(){

    var $scope, barController;

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      barController = $controller('barController', {$scope: $scope});
    }));

    it('should be defined', function() {
      //console.log(barController);
      expect(barController).toBeDefined();
    });

    it('should add $watch', function() {
      expect($scope.$watch).toBeDefined();
    });

    it('should add $watchCollection', function() {
      expect($scope.$watchCollection).toBeDefined();
    });
    it('should add $on', function() {
      expect($scope.$on).toBeDefined();
    });


  });
});