import { tTypes, tNumber, tBoolean } from '@monorepo/io-types'
import {
    TYPEORM_CONNECTION,
    TYPEORM_ENTITIES,
    TYPEORM_MIGRATIONS,
} from '@dictionary'

const typeormConnection = tTypes.literal(TYPEORM_CONNECTION, 'TypeormConnection')

const typeormUsername = tTypes.string

const typeormPassword = tTypes.string

const typeormDatabase = tTypes.string

const typeormPort = tNumber.intFromString

const typeormMigrationsRun = tBoolean.booleanFromString

const typeormSynchronize = tBoolean.booleanFromString

const typeormLogging = tBoolean.booleanFromString

const typeormEntities = tTypes.literal(TYPEORM_ENTITIES, 'TypeormEntities')

const typeormMigrations = tTypes.literal(TYPEORM_MIGRATIONS, 'TypeormMigrations')


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
