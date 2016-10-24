const buble = require('rollup-plugin-buble');

module.exports = (config) => {
  config.set({
    autoWatch: false,
    // client: { captureConsole: true },
    browsers: [ 'Chrome' ],
    colors: true,
    files: [
      'build/tape.js',
      'test.js'
    ],
    frameworks: ['tap'],
    // logLevel: 'LOG_DEBUG',
    plugins: [
      'karma-rollup-plugin',
      'karma-tap',
      'karma-tap-pretty-reporter',
      'karma-chrome-launcher'
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
      sourceMap: false // 'inline'
    },
    singleRun: false
    // tapReporter: { prettifier: 'tap-spec' }
  });
};
