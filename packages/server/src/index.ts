import { ProcessEnvIO } from '@io-types'
import { pipe } from 'fp-ts/lib/pipeable'
import * as E from 'fp-ts/lib/Either'

const run = (env: unknown) => pipe(
    env,
    ProcessEnvIO.decode,
    E.fold(e => console.log(e), _ => console.log(_)),
)

run(process.env)
