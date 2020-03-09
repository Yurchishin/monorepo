const TerserPlugin = require('terser-webpack-plugin');
const PROCESS = require('../../constants/process');

const createTerserPlugin = (options = {}) => new TerserPlugin({
  terserOptions: {
    parse: {
      ecma: 8,
    },
    compress: {
      ecma: 5,
      warnings: false,
      comparisons: false,
      inline: 2,
    },
    mangle: {
      safari10: true,
    },
    keep_classnames: false,
    keep_fnames: false,
    output: {
      ecma: 5,
      comments: false,
      ascii_only: true,
    },
  },
  sourceMap: PROCESS.GENERATE_SOURCEMAP,
  ...options,
})

module.exports = createTerserPlugin
