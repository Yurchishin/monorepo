import { createContext } from '@marblejs/core'
import { PathReporter } from '@monorepo/io-types'
import { createConnection } from 'typeorm'
import { pipe } from 'fp-ts/lib/pipeable'
import { error } from 'fp-ts/lib/Console'
import * as E from 'fp-ts/lib/Either'
import * as T from 'fp-ts/lib/Task'
import { tBEConfig } from '@io-types'
import { ProcessEnvIO } from '@types'
import { Server } from '@connection'
import httpListener from './app'

const bootstrap = async (env: ProcessEnvIO) => {
    createConnection()
        .catch(error => console.log('b', error))
//    await Server.create(httpListener.run(createContext()), env)
}

export const run = (env: unknown) => pipe(
    env,
    tBEConfig.processEnv.decode,
    either => pipe(
        either,
        E.fold(
            T.fromIO(error(PathReporter.report(either))),
            bootstrap,
        ),
    ),
)


