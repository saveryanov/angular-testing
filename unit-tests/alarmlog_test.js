'use strict';

describe('app.alarmLog module', function() {

  beforeEach(module('app.components.location'));
  beforeEach(module('app.components.resources'));
  beforeEach(module('app.components.queue'));
  beforeEach(module('app.alarmLog'));

  describe('service', function(){
    var mock, alarmLogService;

    beforeEach(function() {
      /*
      mock = {alert: jasmine.createSpy()};

      module(function($provide) {
        $provide.value('$window', mock);
      });*/

      inject(function($injector) {
        alarmLogService = $injector.get('alarmLogService');
      });
    });

    it('should be defined', function() {
      expect(alarmLogService).toBeDefined();
    });

    it('should show event-log', function() {
      alarmLogService.showEventLog();
      expect(window.location.hash).toEqual('#event-log');
    });

    it('should connect and disconnect', function() {
      spyOn(alarmLogService.model, 'on');
      alarmLogService.connect();
      expect(alarmLogService.model.on).toHaveBeenCalled();
    });

    it('should disconnect', function() {
      spyOn(alarmLogService.model, 'off');
      alarmLogService.disconnect();
      expect(alarmLogService.model.off).toHaveBeenCalled();
    });

    it('should have 0 users', function() {
      expect(alarmLogService.model.getUserCounter()).toEqual(0);
    });

    it('should have 1 users after increment', function() {
      alarmLogService.model.incrementUserCounter();
      expect(alarmLogService.model.getUserCounter()).toEqual(1);
    });

    it('should have -1 users after decrement', function() {
      alarmLogService.model.decrementUserCounter();
      expect(alarmLogService.model.getUserCounter()).toEqual(-1);
    });

    it('should have users when userCounter != 0', function() {
      expect(alarmLogService.model.haveUsers()).toBeFalsy();
      alarmLogService.model.incrementUserCounter();
      expect(alarmLogService.model.haveUsers()).toBeTruthy();
      alarmLogService.model.decrementUserCounter();
      expect(alarmLogService.model.haveUsers()).toBeFalsy();
    });
  });

  describe('controller', function(){
    var $scope, alarmLogController;

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      alarmLogController = $controller('alarmLogController', {$scope: $scope});
    }));

    it('should be defined', function() {
      //console.log(alarmLogController);
      //console.log($scope);
      expect(alarmLogController).toBeDefined();
    });
  });
});