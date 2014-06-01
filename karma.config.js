// Karma configuration
// Generated on Fri May 09 2014 15:15:49 GMT+0100 (GMT Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	  'Web/src/libs/angularjs/*.js', 
	  'Tests/libs/angular_mocks/*.js',
	  'Web/src/js/*.js',
      'Tests/Specs/*.js',
    ],


    // list of files to exclude
    exclude: [
      'Tests/libs/jasmine/**/jasmine-jsreporter.js',
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors : {'Web/src/js/*.js': ['coverage']},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['PhantomJS'],

    browsers: ['Chrome'],

	// browsers: ['Chrome', 'Firefox', 'PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/'
    }

    //npm install karma-coverage
    //npm install -g istanbul

  });
};
