import t from '@monorepo/io-types'
import {
    TYPEORM_CONNECTION,
    TYPEORM_ENTITIES,
    TYPEORM_MIGRATIONS,
} from '@dictionary'

const typeormConnection = t.literal(TYPEORM_CONNECTION, 'TypeormConnection')

const typeormUsername = t.string

const typeormPassword = t.string

const typeormDatabase = t.string

const typeormPort = t.intFromString

const typeormMigrationsRun = t.booleanFromString

const typeormSynchronize = t.booleanFromString

const typeormLogging = t.booleanFromString

const typeormEntities = t.literal(TYPEORM_ENTITIES, 'TypeormEntities')

const typeormMigrations = t.literal(TYPEORM_MIGRATIONS, 'TypeormMigrations')


export const tTypeorm = {
    connection: typeormConnection,
    username: typeormUsername,
    password: typeormPassword,
    database: typeormDatabase,
    port: typeormPort,
    migrationsRun: typeormMigrationsRun,
    synchronize: typeormSynchronize,
    logging: typeormLogging,
    entities: typeormEntities,
    migrations: typeormMigrations,
}
