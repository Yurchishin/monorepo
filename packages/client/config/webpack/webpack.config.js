const ENV = require('../constants/env')
const DEV_CONFIG = require('./webpack.dev.config')

const configFactory = env => {
  if(env === ENV.DEVELOPMENT) return DEV_CONFIG

  throw new Error(`Unknown env '${env}'`)
}

module.exports = configFactory
