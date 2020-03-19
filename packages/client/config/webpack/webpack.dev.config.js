const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const resolve = require("resolve");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const postcssNormalize = require("postcss-normalize");
const ManifestPlugin = require("webpack-manifest-plugin");
const InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");
const WatchMissingNodeModulesPlugin = require("react-dev-utils/WatchMissingNodeModulesPlugin");
const ModuleNotFoundPlugin = require("react-dev-utils/ModuleNotFoundPlugin");
const ForkTsCheckerWebpackPlugin = require("react-dev-utils/ForkTsCheckerWebpackPlugin");
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const { webpackResolve, webpackResolveLoader, webpackNode } = require("./webpack.common.config");
const lessToJs = require("less-vars-to-js");
const PROCESS = require("../constants/process");
const PATHS = require("../constants/paths");
const ENV = require("../constants/env");
const FILES = require("../constants/files");
const REG_EXP = require("../constants/regExp");
const { getClientEnvironment } = require("../env/env.utils");

const lessVariables = fs.readFileSync(PATHS.APP_STYLES_VARIABLES, "utf8");
const variables = lessToJs(lessVariables);
const themeVariables = Object.keys(variables);

const appPackageJson = require(PATHS.APP_PACKAGE_JSON);

const env = getClientEnvironment(PATHS.PUBLIC_URL_OR_PATH.slice(0, -1));

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve("style-loader"),
    {
      loader: require.resolve("css-loader"),
      options: cssOptions,
    },
    {
      loader: require.resolve("postcss-loader"),
      options: {
        ident: "postcss",
        plugins: () => [
          require("postcss-flexbugs-fixes"),
          require("postcss-preset-env")({
            autoprefixer: {
              flexbox: "no-2009",
            },
            stage: 3,
          }),
          postcssNormalize(),
        ],
      },
    },
  ];
  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve("resolve-url-loader"),
      },
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: true,
        },
      },
    );
  }

  return loaders;
};

module.exports = {
  mode: ENV.DEVELOPMENT,
  bail: false,
  devtool: "cheap-module-source-map",
  entry: [
    require.resolve("react-dev-utils/webpackHotDevClient"),
    PATHS.APP_INDEX_JS,
  ],
  output: {
    path: undefined,
    pathinfo: true,
    filename: FILES.DEV_FILENAME,
    futureEmitAssets: true,
    chunkFilename: FILES.DEV_CHUNK_FILENAME,
    publicPath: PATHS.PUBLIC_URL_OR_PATH,
    devtoolModuleFilenameTemplate: (info) => path.resolve(info.absoluteResourcePath).replace(
      /\\/g,
      "/",
    ),
    jsonpFunction: `webpackJsonp${appPackageJson.name}`,
    globalObject: "this",
  },
  optimization: {
    minimize: false,
    minimizer: [],
    splitChunks: {
      chunks: "all",
      name: false,
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
  },
  resolve: webpackResolve(),
  resolveLoader: webpackResolveLoader(module),
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        enforce: "pre",
        use: [
          {
            options: {
              formatter: "table",
              eslintPath: require.resolve("eslint"),
              resolvePluginsRelativeTo: __dirname,
            },
            loader: require.resolve("eslint-loader"),
          },
        ],
        include: PATHS.APP_SRC,
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve("url-loader"),
            options: {
              limit: PROCESS.IMAGE_INLINE_SIZE_LIMIT,
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: PATHS.APP_SRC,
            loader: require.resolve("babel-loader"),
            options: {
              customize: require.resolve(
                "babel-preset-react-app/webpack-overrides",
              ),
              plugins: [
                [
                  require.resolve("babel-plugin-named-asset-import"),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent:
                          "@svgr/webpack?-svgo,+titleProp,+ref![path]",
                      },
                    },
                  },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false,
            },
          },
          {
            test: /\.(js|mjs)$/,
            loader: require.resolve("babel-loader"),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                [
                  require.resolve("babel-preset-react-app/dependencies"),
                  { helpers: true },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: false,
              sourceMaps: true,
              inputSourceMap: true,
            },
          },
          {
            test: REG_EXP.CSS,
            exclude: REG_EXP.CSS_MODULE,
            use: getStyleLoaders({
              importLoaders: 1,
            }),
            sideEffects: true,
          },
          {
            test: REG_EXP.SASS,
            exclude: REG_EXP.SASS_MODULE,
            use: getStyleLoaders(
              {
                importLoaders: 3,
              },
              "sass-loader",
            ),
            sideEffects: true,
          },
          {
            test: REG_EXP.LESS,
            exclude: REG_EXP.LESS_MODULE,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
              },
              {
                loader: require.resolve('less-loader'),
                options: {
                  javascriptEnabled: true,
                  modifyVars: variables,
                },
              },
            ],
          },
          {
            loader: require.resolve("file-loader"),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: PATHS.APP_HTML,
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    new ModuleNotFoundPlugin(PATHS.APP_PATH),
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(PATHS.APP_NODE_MODULES),
    new ManifestPlugin({
      fileName: "asset-manifest.json",
      publicPath: PATHS.PUBLIC_URL_OR_PATH,
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;

          return manifest;
        },                                 seed);
        const entrypointFiles = entrypoints.main.filter(
          (fileName) => !fileName.endsWith(".map"),
        );

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        };
      },
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: resolve.sync("typescript", {
        basedir: PATHS.APP_NODE_MODULES,
      }),
      async: true,
      useTypescriptIncrementalApi: true,
      checkSyntacticErrors: true,
      resolveModuleNameModule: process.versions.pnp
        ? `${__dirname}/plugins/pnpTs.js`
        : undefined,
      resolveTypeReferenceDirectiveModule: process.versions.pnp
        ? `${__dirname}/plugins/pnpTs.js`
        : undefined,
      tsconfig: PATHS.APP_TS_CONFIG,
      reportFiles: [
        "**",
        "!**/__tests__/**",
        "!**/?(*.)(spec|test).*",
        "!**/src/setupProxy.*",
        "!**/src/setupTests.*",
      ],
      silent: true,
    }),
    new AntDesignThemePlugin({
      antDir: PATHS.APP_ANTD_MODULE,
      stylesDir: PATHS.APP_STYLES_DIR,
      varFile: PATHS.APP_STYLES_VARIABLES,
      mainLessFile: PATHS.APP_STYLES_INDEX,
      themeVariables,
    }),
  ],
  node: webpackNode(),
  performance: false,
};
