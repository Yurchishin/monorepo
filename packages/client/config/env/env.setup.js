const fs = require('fs');
const { config } = require('dotenv')
const PROCESS = require('../constants/process')
const ENV = require('../constants/env')

delete require.cache[require.resolve('../constants/paths')]

if (!PROCESS.NODE_ENV) {
  throw new Error('The \'NODE_ENV\' environment variable is required but was not specified.')
}

if (!fs.existsSync(ENV.FILE)) {
  throw new Error(`The \'${ENV.FILE}\' file does not exist.`)
}

config({ path: ENV.FILE })

process.env.NODE_PATH = PROCESS.NODE_PATH

