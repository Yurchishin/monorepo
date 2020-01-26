export * from './brands'
export * from './types'
export * from './io-types/Config'
export { default as tConfig } from './io-types/Config'
export * from './io-types/User'
export { default as tUser } from './io-types/User'

export { TypeOf, Errors } from 'io-ts'
export { PathReporter } from 'io-ts/lib/PathReporter'

import * as IO from 'io-ts'
import { IntFromString as intFromString } from 'io-ts-types/lib/IntFromString'
import { BooleanFromString as booleanFromString } from 'io-ts-types/lib/BooleanFromString'

export default {
    ...IO,
    intFromString,
    booleanFromString,
}
