import * as IO from 'io-ts'
import { IntFromString as intFromString } from 'io-ts-types/lib/IntFromString'
import { BooleanFromString as booleanFromString } from 'io-ts-types/lib/BooleanFromString'
import { localhost, host, guestRole, adminRole, userRole } from './io-types'

export const t = {
    ...IO,
    intFromString,
    booleanFromString,
    localhost,
    host,
    guestRole,
    adminRole,
    userRole,
}

export { TypeOf, Errors } from 'io-ts'
export { PathReporter } from 'io-ts/lib/PathReporter'
export * from './types'

export default t
