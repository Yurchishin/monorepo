import t, { TypeOf } from '@monorepo/io-types'
import { NodeEnv } from '@monorepo/dictionary'
import {
    typeormConnection,
    typeormUsername,
    typeormPassword,
    typeormDatabase,
    typeormPort,
    typeormMigrationsRun,
    typeormSynchronize,
    typeormLogging,
    typeormEntities,
    typeormMigrations,
    typeormEntitiesDir,
    typeormMigrationsDir,
} from './Typeorm'

export const nodeEnv = t.union([
    t.literal(NodeEnv.PROD),
    t.literal(NodeEnv.DEV),
], 'nodeEnv')

export const processEnv = t.type({
    PORT: t.intFromString,
    HOST: t.host,
    NODE_ENV: nodeEnv,
    TYPEORM_CONNECTION: typeormConnection,
    TYPEORM_HOST: t.localhost,
    TYPEORM_USERNAME: typeormUsername,
    TYPEORM_PASSWORD: typeormPassword,
    TYPEORM_DATABASE: typeormDatabase,
    TYPEORM_PORT: typeormPort,
    TYPEORM_MIGRATIONS_RUN: typeormMigrationsRun,
    TYPEORM_SYNCHRONIZE: typeormSynchronize,
    TYPEORM_LOGGING: typeormLogging,
    TYPEORM_ENTITIES: typeormEntities,
    TYPEORM_MIGRATIONS: typeormMigrations,
    TYPEORM_ENTITIES_DIR: typeormEntitiesDir,
    TYPEORM_MIGRATIONS_DIR: typeormMigrationsDir,
}, 'processEnv')

export type ProcessEnv = TypeOf<typeof processEnv>
