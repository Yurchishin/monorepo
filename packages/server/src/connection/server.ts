import { warn, info, error } from 'fp-ts/lib/Console'
import { createServer, RequestListener } from 'http'
import chalk from 'chalk'
import { ProcessEnv } from '@io-types'

const onListen = (env: ProcessEnv) => info(`${chalk.green('[server] running')} @ http://${env.HOST}:${env.PORT}/`)

const onClose = warn(chalk.green(`[server] stopped`))

const onError = (e: Error) => error(chalk.red('[server] errored') + e.message)()

export const Server = {
    create: (app: RequestListener, env: ProcessEnv) =>  createServer(app)
        .listen(env.PORT, onListen(env))
        .on('close', onClose)
        .on('error', onError),
}
