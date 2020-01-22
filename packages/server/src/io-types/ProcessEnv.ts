import t, { TypeOf } from '@monorepo/io-types'
import { NodeEnv } from '@monorepo/dictionary'
import {
    TypeormConnectionIO,
    TypeormHostIO,
    TypeormUsernameIO,
    TypeormPasswordIO,
    TypeormDatabaseIO,
    TypeormPortIO,
    TypeormMigrationsRunIO,
    TypeormSynchronizeIO,
    TypeormLoggingIO,
    TypeormEntitiesIO,
    TypeormMigrationsIO,
    TypeormEntitiesDirIO,
    TypeormMigrationsDirIO,
} from './Typeorm'

export const NodeEnvIO = t.union([
    t.literal(NodeEnv.PROD),
    t.literal(NodeEnv.DEV),
], 'NodeEnv')

export type TNodeEnv = TypeOf<typeof NodeEnvIO>

export const ProcessEnvIO = t.type({
    NODE_ENV: NodeEnvIO,
    TYPEORM_CONNECTION: TypeormConnectionIO,
    TYPEORM_HOST: TypeormHostIO,
    TYPEORM_USERNAME: TypeormUsernameIO,
    TYPEORM_PASSWORD: TypeormPasswordIO,
    TYPEORM_DATABASE: TypeormDatabaseIO,
    TYPEORM_PORT: TypeormPortIO,
    TYPEORM_MIGRATIONS_RUN: TypeormMigrationsRunIO,
    TYPEORM_SYNCHRONIZE: TypeormSynchronizeIO,
    TYPEORM_LOGGING: TypeormLoggingIO,
    TYPEORM_ENTITIES: TypeormEntitiesIO,
    TYPEORM_MIGRATIONS: TypeormMigrationsIO,
    TYPEORM_ENTITIES_DIR: TypeormEntitiesDirIO,
    TYPEORM_MIGRATIONS_DIR: TypeormMigrationsDirIO,
}, 'ProcessEnv')

export type TProcessEnv = TypeOf<typeof ProcessEnvIO>
