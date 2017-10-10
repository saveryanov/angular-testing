//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
	  'app.js',
      'components/location/location.js',
      'components/location/location-service.js',
      'components/queue/queue.js',
      'components/queue/queue-service.js',
      'components/resources/resources.js',
      'components/resources/resource-service.js',
      'components/request/request.js',
      'components/request/*.js',
      'components/event-system/event-system.js',
      'components/event-system/*.js',
      'components/event-system/callbacks/callbacks.js',
      'components/event-system/callbacks/*.js',
      'components/event-system/events/events.js',
      'components/event-system/events/*.js',
      'components/event-system/handlers/handlers.js',
      'components/event-system/handlers/*.js',
      'components/mvvm/mvvm.js',
      'components/mvvm/*.js',
      'components/promise/promise.js',
      'components/promise/*.js',
      'elements/elements.js',
      'elements/element-controller.js',
      'elements/*.js',
	  
      'alarm-log/alarm-log.js',
      'alarm-log/alarm-log-controller.js',
      'alarm-log/alarm-log-service.js',
      'alarm-log/*.js',
	  
      'bar/bar.js',
      'bar/*.js',
	  
      'tests/*.js',
    ],

    autoWatch: true,
	frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
