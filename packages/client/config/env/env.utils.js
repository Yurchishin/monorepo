const PROCESS = require('../constants/process')
const ENV = require('../constants/env')

const getClientEnvironment = publicUrl => {
  const raw = Object.keys(PROCESS.ENV)
    .filter(key => ENV.PREFIX_REG_EXP.test(key))
    .reduce(
      (env, key) => {
        env[key] = PROCESS.ENV[key]
        return env
      },
      {
        NODE_ENV: PROCESS.NODE_ENV,
        PUBLIC_URL: publicUrl,
        WDS_SOCKET_HOST: PROCESS.ENV.WDS_SOCKET_HOST,
        WDS_SOCKET_PATH: PROCESS.ENV.WDS_SOCKET_PATH,
        WDS_SOCKET_PORT: PROCESS.ENV.WDS_SOCKET_PORT,
      },
    )

  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key])
      return env
    }, {}),
  }

  return { raw, stringified };
}

module.exports = {
  getClientEnvironment,
}
