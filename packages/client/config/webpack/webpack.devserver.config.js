const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');
const getHttpsConfig = require('../utils/https');
const PATHS = require('../constants/paths');
const PROCESS = require('../constants/process');

module.exports = (proxy, allowedHost) => {
  return {
    disableHostCheck: !proxy || PROCESS.DANGEROUSLY_DISABLE_HOST_CHECK,
    compress: true,
    clientLogLevel: 'none',
    contentBase: PATHS.APP_PUBLIC,
    contentBasePublicPath: PATHS.PUBLIC_URL_OR_PATH,
    watchContentBase: true,
    hot: true,
    transportMode: 'ws',
    injectClient: false,
    sockHost: PROCESS.ENV.WDS_SOCKET_HOST,
    sockPath: PROCESS.ENV.WDS_SOCKET_PATH,
    sockPort: PROCESS.ENV.WDS_SOCKET_PORT,
    publicPath: PATHS.PUBLIC_URL_OR_PATH.slice(0, -1),
    quiet: true,
    watchOptions: {
      ignored: ignoredFiles(PATHS.APP_SRC),
    },
    https: getHttpsConfig(),
    host: PROCESS.HOST,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
      index: PATHS.PUBLIC_URL_OR_PATH,
    },
    public: allowedHost,
    proxy,
    before(app, server) {
      app.use(evalSourceMapMiddleware(server));
      app.use(errorOverlayMiddleware());
    },
    after(app) {
      app.use(redirectServedPath(PATHS.PUBLIC_URL_OR_PATH));
      app.use(noopServiceWorkerMiddleware(PATHS.PUBLIC_URL_OR_PATH));
    },
  };
};
