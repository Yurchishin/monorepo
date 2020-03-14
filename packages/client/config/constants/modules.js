const fs = require("fs");
const path = require("path");
const chalk = require("react-dev-utils/chalk");
const resolve = require("resolve");
const PATHS = require("../constants/paths");
const PROCESS = require("../constants/process");

const getAdditionalModulePaths = (options = {}) => {
  const baseUrl = options.baseUrl;

  if (!baseUrl) { return PROCESS.NODE_PATH.split(path.delimiter).filter(Boolean); }

  const baseUrlResolved = path.resolve(PATHS.APP_PATH, baseUrl);

  if (path.relative(PATHS.APP_NODE_MODULES, baseUrlResolved) === "") { return null; }

  if (path.relative(PATHS.APP_SRC, baseUrlResolved) === "") { return [PATHS.APP_SRC]; }

  if (path.relative(PATHS.APP_PATH, baseUrlResolved) === "") { return null; }

  throw new Error(
    chalk.red.bold(
      "Your project's `baseUrl` can only be set to `src` or `node_modules`." +
      " Create React App does not support other values at this time.",
    ),
  );
};

const getWebpackAliases = (options = {}) => {
  const baseUrl = options.baseUrl;

  if (!baseUrl) { return {}; }

  const baseUrlResolved = path.resolve(PATHS.APP_PATH, baseUrl);

  const webpackAliasesFromPaths = (paths) => Object.entries(paths)
    .reduce(
      (acc, [name, folder]) => ({ ...acc, [name]: `${baseUrlResolved}/${folder}` }),
      {},
    );

  if (path.relative(PATHS.APP_PATH, baseUrlResolved) === "") {
    return {
      src: PATHS.APP_SRC,
      ...webpackAliasesFromPaths(options.paths),
    };
  }

  return webpackAliasesFromPaths(options.paths);
};

const getJestAliases = (options = {}) => {
  const baseUrl = options.baseUrl;

  if (!baseUrl) { return {}; }

  const baseUrlResolved = path.resolve(PATHS.APP_PATH, baseUrl);

  if (path.relative(PATHS.APP_PATH, baseUrlResolved) === "") {
    return {
      "^src/(.*)$": "<rootDir>/src/$1",
    };
  }
};

const getModules = () => {
  const hasTsConfig = fs.existsSync(PATHS.APP_TS_CONFIG);

  if (!hasTsConfig) {
    throw new Error("Create tsconfig.json file.");
  }

  const ts = require(resolve.sync("typescript", {
    basedir: PATHS.APP_NODE_MODULES,
  }));

  const config = ts.readConfigFile(PATHS.APP_TS_CONFIG, ts.sys.readFile).config || {};

  const options = config.compilerOptions || {};

  return {
    ADDITIONAL_MODULE_PATHS: getAdditionalModulePaths(options),
    WEBPACK_ALIASES: getWebpackAliases(options),
    JEST_ALIASES: getJestAliases(options),
    HAS_TS_CONFIG: hasTsConfig,
  };
};

module.exports = getModules();
