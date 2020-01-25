import t from '@monorepo/io-types'
import {
    TYPEORM_CONNECTION,
    TYPEORM_ENTITIES,
    TYPEORM_ENTITIES_DIR,
    TYPEORM_MIGRATIONS, TYPEORM_MIGRATIONS_DIR
} from '@dictionary'

export const typeormConnection = t.literal(TYPEORM_CONNECTION, 'typeormConnection')

export const typeormUsername = t.string

export const typeormPassword = t.string

export const typeormDatabase = t.string

export const typeormPort = t.intFromString

export const typeormMigrationsRun = t.booleanFromString

export const typeormSynchronize = t.booleanFromString

export const typeormLogging = t.booleanFromString

export const typeormEntities = t.literal(TYPEORM_ENTITIES, 'typeormEntities')

export const typeormMigrations = t.literal(TYPEORM_MIGRATIONS, 'typeormMigrations')

export const typeormEntitiesDir = t.literal(TYPEORM_ENTITIES_DIR, 'typeormEntitiesDir')

export const typeormMigrationsDir = t.literal(TYPEORM_MIGRATIONS_DIR, 'typeormMigrationsDir')

