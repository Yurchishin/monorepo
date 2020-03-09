const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');
const { resolveWorkingDirectoryPath, resolveModule } = require('../utils/path')

const PUBLIC_URL_OR_PATH = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveWorkingDirectoryPath('package.json')).homepage,
  process.env.PUBLIC_URL,
);

module.exports = {
  APP_PATH: resolveWorkingDirectoryPath('.'),
  APP_PUBLIC: resolveWorkingDirectoryPath('public'),
  APP_HTML: resolveWorkingDirectoryPath('public/index.html'),
  APP_SRC: resolveWorkingDirectoryPath('src'),
  APP_INDEX_JS: resolveModule(resolveWorkingDirectoryPath, 'src/index'),
  APP_PACKAGE_JSON: resolveWorkingDirectoryPath('package.json'),
  APP_TS_CONFIG: resolveWorkingDirectoryPath('tsconfig.json'),
  APP_NODE_MODULES: resolveWorkingDirectoryPath('node_modules'),
  PUBLIC_URL_OR_PATH,
}
