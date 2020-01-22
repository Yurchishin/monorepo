import * as IO from 'io-ts'
import { IntFromString } from 'io-ts-types/lib/IntFromString'
import { BooleanFromString } from 'io-ts-types/lib/BooleanFromString'

export const t = {
    ...IO,
    intFromString: IntFromString,
    booleanFromString: BooleanFromString,
}

export { TypeOf } from 'io-ts'

export default t
