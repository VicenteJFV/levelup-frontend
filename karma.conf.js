// Karma configuration for Level-Up Gamer Frontend
// Framework: Jasmine + Karma

module. exports = function(config) {
  config.set({
    // Base path for resolving patterns
    basePath: '',

    // Frameworks to use
    frameworks: ['jasmine'],

    // Files to load in the browser
    files: [
      'src/**/*.spec. js'
    ],

    // Files to exclude
    exclude: [],

    // Preprocess matching files before serving
    preprocessors: {
      'src/**/*.spec.js': ['webpack']
    },

    // Test results reporter
    reporters: ['progress', 'coverage'],

    // Coverage reporter configuration
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // Web server port
    port: 9876,

    // Enable colors in output
    colors: true,

    // Level of logging
    logLevel: config.LOG_INFO,

    // Watch files for changes
    autoWatch: true,

    // Browsers to launch
    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    singleRun: false,

    // Concurrency level
    concurrency: Infinity
  });
};