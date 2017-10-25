const buble = require('rollup-plugin-buble');
const tapSpec = require('tap-spec');

module.exports = (config) => {
  config.set({
    autoWatch: true,
    // client: { captureConsole: false },
    browsers: [ 'Chrome', 'Firefox' ],
    browserConsoleLogOptions: {
      level: 'error',
      format: '%b %T: %m',
      terminal: false
    },
    colors: true,
    files: [
      'build/tape.js',
      'test.js'
    ],
    frameworks: ['tap'],
    // logLevel: 'LOG_DEBUG',
    logLevel: config.LOG_ERROR,
    plugins: [
      'karma-rollup-preprocessor',
      'karma-tap',
      'karma-tap-pretty-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ],
    preprocessors: {
      'test.js': [ 'rollup' ]
    },
    reporters: ['tap-pretty'],
    rollupPreprocessor: {
      // context: 'this',
      external: ['tape'],
      format: 'iife',
      globals: {
        'tape': 'tape'
      },
      plugins: [
        buble()
      ],
      sourcemap: false // 'inline'
    },
    singleRun: true,
    tapReporter: {
      prettify: tapSpec
    }
  });
};
