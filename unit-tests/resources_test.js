'use strict';

describe('app.components.resources module', function() {

  describe('service', function(){
    var mock, resourceService;

    beforeEach(module('app.components.resources'));

    beforeEach(function() {
      inject(function($injector) {
        resourceService = $injector.get('resourceService');
      });
    });

    it('should be defined', function() {
      expect(resourceService).toBeDefined();
    });

    it('should translate', function() {
      //console.log(resourceService.onOffSelectItems.he);
      expect(resourceService.translate('connecting')).not.toEqual('Не поддерживается');
      expect(resourceService.translate('random string is not in the list')).toEqual('Не поддерживается');
    });
  });
});