const PnpWebpackPlugin = require('pnp-webpack-plugin')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const MODULES = require('../constants/modules')
const PATHS = require('../constants/paths')
const FILES = require('../constants/files')

const webpackResolve = (options = {}) => (
  {
    modules: ['node_modules', PATHS.APP_NODE_MODULES].concat(MODULES.ADDITIONAL_MODULE_PATHS
      || []),
    extensions: FILES.FILE_EXTENSIONS
      .map(ext => `.${ext}`),
    alias: MODULES.WEBPACK_ALIASES || {},
    plugins: [
      PnpWebpackPlugin,
      new ModuleScopePlugin(PATHS.APP_SRC, [PATHS.APP_PACKAGE_JSON]),
    ],
    ...options,
  }
)

const webpackResolveLoader = (configModule, options = {}) => (
  {
    plugins: [
      PnpWebpackPlugin.moduleLoader(configModule),
    ],
    ...options,
  }
)

const webpackNode = (options = {}) => (
  {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    http2: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
    ...options,
  }
)

module.exports = {
  webpackResolve,
  webpackResolveLoader,
  webpackNode,
}
