require('../config/env/env.setup')

process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

const isInteractive = process.stdout.isTTY

const chalk = require('react-dev-utils/chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const clearConsole = require('react-dev-utils/clearConsole')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const openBrowser = require('react-dev-utils/openBrowser')
const {
  choosePort,
  createCompiler,
  prepareProxy,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils')
const PROCESS = require('../config/constants/process')
const PATHS = require('../config/constants/paths')
const ENV = require('../config/constants/env')
const { checkBrowsers } = require('react-dev-utils/browsersHelper')
const createDevServerConfig = require('../config/webpack/webpack.devserver.config')
const configFactory = require('../config/webpack/webpack.config')

// setup
if (!checkRequiredFiles([PATHS.APP_HTML, PATHS.APP_INDEX_JS])) {
  process.exit(1)
}

if (PROCESS.ENV.HOST) {
  console.log(
    chalk.cyan(
      `Attempting to bind to HOST environment variable: ${chalk.yellow(
        chalk.bold(PROCESS.ENV.HOST),
      )}`,
    ),
  )
  console.log(`If this was unintentional, check that you haven't mistakenly set it in your shell.`)
  console.log()
}

checkBrowsers(PATHS.APP_PATH, isInteractive)
  .then(() => choosePort(PROCESS.HOST, PROCESS.PORT))
  .then(port => {
    if (port == null) {
      return
    }

    const config = configFactory(ENV.DEVELOPMENT)
    const appName = require(PATHS.APP_PACKAGE_JSON).name
    const tscCompileOnError = PROCESS.TSC_COMPILE_ON_ERROR
    const urls = prepareUrls(
      PROCESS.PROTOCOL,
      PROCESS.HOST,
      PROCESS.PORT,
      PATHS.PUBLIC_URL_OR_PATH.slice(0, -1),
    )
    const devSocket = {
      warnings: warnings => devServer.sockWrite(devServer.sockets, 'warnings', warnings),
      errors: errors => devServer.sockWrite(devServer.sockets, 'errors', errors),
    }
    const compiler = createCompiler({
      appName,
      config,
      devSocket,
      urls,
      useYarn: false,
      useTypeScript: true,
      tscCompileOnError,
      webpack,
    })

    const proxySetting = require(PATHS.APP_PACKAGE_JSON).proxy
    const proxyConfig = prepareProxy(
      proxySetting,
      PATHS.APP_PUBLIC,
      PATHS.PUBLIC_URL_OR_PATH,
    )

    const serverConfig = createDevServerConfig(
      proxyConfig,
      urls.lanUrlForConfig,
    )

    const devServer = new WebpackDevServer(compiler, serverConfig)

    devServer.listen(port, PROCESS.HOST, err => {
      if (err) {
        return console.log(err)
      }
      if (isInteractive) {
        clearConsole()
      }

      console.log(chalk.cyan('Starting the development server...\n'))
      openBrowser(urls.localUrlForBrowser)
    });

    ['SIGINT', 'SIGTERM'].forEach(function (sig) {
      process.on(sig, function () {
        devServer.close()
        process.exit()
      })
    })
  })
  .catch(err => {
    if (err && err.message) console.log(err.message)
    process.exit(1)
  })

