const { NODE_ENV } = require('./process')

const FILE = `.env.${NODE_ENV}`

const PREFIX_REG_EXP = /^CLIENT_/i

const DEVELOPMENT = 'development'
const PRODUCTION = 'production'
const TEST = 'test'

module.exports = {
  FILE,
  PREFIX_REG_EXP,
  DEVELOPMENT,
  PRODUCTION,
  TEST,
}
