'use strict';

describe('app.components.queue module', function() {

  describe('service', function(){
    var $httpBackend, $rootScope, createService, requestHandler, queueService;

    beforeEach(module('app.components.queue'));

    beforeEach(inject(function($injector) {

      $httpBackend = $injector.get('$httpBackend');

      $httpBackend
          .when('POST', '_notify/_register', '')
          .respond(201, { data: 'value' }, { 'Q-Name': 'xxx' }, 'OK');

      //requestHandler = $httpBackend.when('GET', '_notify/xxx').respond({'Q-Path': 'xxx'});

      $rootScope = $injector.get('$rootScope');
      var $controller = $injector.get('$controller');

      createService = function() {
        return $injector.get('queueService');
      };
    }));

    afterEach(function() {
      //$httpBackend.verifyNoOutstandingExpectation();
      //$httpBackend.verifyNoOutstandingRequest();
    });

    it('should be defined', function() {

      $httpBackend.expectGET('_notify/xxx').respond(401);
      //$httpBackend.expectPOST('_notify/_register', '').respond(201, { data: 'value' }, { 'Q-Name': 'xxx' }, 'OK');
      var service = createService();
      $httpBackend.flush();
      console.log(service);
    });



  });
});


