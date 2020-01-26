import t, { TypeOf, tConfig } from '@monorepo/io-types'
import { tTypeorm } from './Typeorm'
import { nodeEnv } from './NodeEnv'

export const processEnv = t.type({
    PORT: t.intFromString,
    HOST: tConfig.host,
    NODE_ENV: nodeEnv,
    TYPEORM_CONNECTION: tTypeorm.connection,
    TYPEORM_HOST: tConfig.localhost,
    TYPEORM_USERNAME: tTypeorm.username,
    TYPEORM_PASSWORD: tTypeorm.password,
    TYPEORM_DATABASE: tTypeorm.database,
    TYPEORM_PORT: tTypeorm.port,
    TYPEORM_MIGRATIONS_RUN: tTypeorm.migrationsRun,
    TYPEORM_SYNCHRONIZE: tTypeorm.synchronize,
    TYPEORM_LOGGING: tTypeorm.logging,
    TYPEORM_ENTITIES: tTypeorm.entities,
    TYPEORM_MIGRATIONS: tTypeorm.migrations,
}, 'processEnv')

export type ProcessEnv = TypeOf<typeof processEnv>
