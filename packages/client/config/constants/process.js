const fs = require('fs')
const path = require('path')

const WORKING_DIRECTORY = fs.realpathSync(process.cwd())

const ENV = process.env

const NODE_ENV = process.env.NODE_ENV || 'development' // development | production | test

const NODE_PATH = (
  process.env.NODE_PATH || ''
)
  .split(path.delimiter)
  .filter(folder => folder && !path.isAbsolute(folder))
  .map(folder => path.resolve(WORKING_DIRECTORY, folder))
  .join(path.delimiter)

const PORT = parseInt(process.env.PORT, 10) || 3000

const HOST = process.env.HOST || '0.0.0.0'

const PROTOCOL = process.env.HTTPS === 'true' ? 'https' : 'http'

const TSC_COMPILE_ON_ERROR = process.env.TSC_COMPILE_ON_ERROR === 'true'

const GENERATE_SOURCEMAP = process.env.GENERATE_SOURCEMAP !== 'false'

const IMAGE_INLINE_SIZE_LIMIT = parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT || '10000', 10)

const DANGEROUSLY_DISABLE_HOST_CHECK = process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true'

const SSL_CRT_FILE = process.env.SSL_CRT_FILE
const SSL_KEY_FILE = process.env.SSL_KEY_FILE
const HTTPS = process.env.HTTPS || 'false'

module.exports = {
  WORKING_DIRECTORY,
  ENV,
  NODE_ENV,
  NODE_PATH,
  PORT,
  HOST,
  PROTOCOL,
  TSC_COMPILE_ON_ERROR,
  GENERATE_SOURCEMAP,
  IMAGE_INLINE_SIZE_LIMIT,
  DANGEROUSLY_DISABLE_HOST_CHECK,
  SSL_CRT_FILE,
  SSL_KEY_FILE,
  HTTPS,
}
