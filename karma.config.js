const chrome = require('karma-chrome-launcher');
const rollup = require('karma-rollup-plugin');
const buble = require('rollup-plugin-buble');
const nodeResolve = require('rollup-plugin-node-resolve');
const nodeGlobals = require('rollup-plugin-node-globals');
const nodeBuiltins = require('rollup-plugin-node-builtins');
const commonjs = require('rollup-plugin-commonjs');

module.exports = (config) => {
  config.set({
    client: {
      captureConsole: true
    },
    files: [
      'test.js'
    ],
    // reporters: [ 'dots' ],
    preprocessors: {
      'test.js': [ 'rollup' ]
    },
    plugins: [ rollup, chrome ],
    browsers: [ 'Chrome' ],
    logLevel: 'LOG_DEBUG',
    singleRun: true,
    autoWatch: false,
    rollupPreprocessor: {
      plugins: [
        nodeResolve({
          jsnext: true,
          main: true,
          browser: true
          // preferBuiltins: false
        }),
        nodeGlobals(),
        nodeBuiltins(),
        commonjs({
          include: ['node_modules/tape/**'],
          namedExports: {
            'node_modules/tape/index.js': [ 'tape' ]
          }
        }),
        buble()
      ],
      // moduleName: 'foo',
      format: 'iife',
      sourceMap: 'inline'
    }
  });
};
