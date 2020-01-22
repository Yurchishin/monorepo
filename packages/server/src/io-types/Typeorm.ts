import t from '@monorepo/io-types'
import { Hosts } from '@monorepo/dictionary'
import {
    TYPEORM_CONNECTION,
    TYPEORM_ENTITIES,
    TYPEORM_ENTITIES_DIR,
    TYPEORM_MIGRATIONS, TYPEORM_MIGRATIONS_DIR
} from '@dictionary'

export const TypeormConnectionIO = t.literal(TYPEORM_CONNECTION, 'TypeormConnection')

export const TypeormHostIO = t.literal(Hosts.LOCALHOST, 'TypeormHost')

export const TypeormUsernameIO = t.string

export const TypeormPasswordIO = t.string

export const TypeormDatabaseIO = t.string

export const TypeormPortIO = t.intFromString

export const TypeormMigrationsRunIO = t.booleanFromString

export const TypeormSynchronizeIO = t.booleanFromString

export const TypeormLoggingIO = t.booleanFromString

export const TypeormEntitiesIO = t.literal(TYPEORM_ENTITIES, 'TypeormEntities')

export const TypeormMigrationsIO = t.literal(TYPEORM_MIGRATIONS, 'TypeormMigrations')

export const TypeormEntitiesDirIO = t.literal(TYPEORM_ENTITIES_DIR, 'TypeormEntitiesDir')

export const TypeormMigrationsDirIO = t.literal(TYPEORM_MIGRATIONS_DIR, 'TypeormMigrationsDir')

