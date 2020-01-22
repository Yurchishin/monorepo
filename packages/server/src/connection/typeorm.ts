import { Connection, createConnection } from 'typeorm'
import * as RTE from 'fp-ts/lib/ReaderTaskEither'
import * as TE from 'fp-ts/lib/TaskEither'
import ReaderTaskEither = RTE.ReaderTaskEither
import { TProcessEnv } from '@io-types'
import { pipe } from 'fp-ts/lib/pipeable'

export const TypeORM = {
    connect: (): ReaderTaskEither<TProcessEnv, Error, Connection> => pipe(
        TE.tryCatch(createConnection, reason => new Error(String(reason))),
        RTE.fromTaskEither
    )
}
