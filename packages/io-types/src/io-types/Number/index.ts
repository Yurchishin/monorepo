import { number } from 'io-ts'
import { IntFromString } from 'io-ts-types/lib/IntFromString'
import { NumberFromString } from 'io-ts-types/lib/NumberFromString'
import { numberGreaterThenOrEqual } from './NumberGreaterThenOrEqual'
import { numberLessThenOrEqual } from './NumberLessThenOrEqual'
import { numberNotEqual } from './NumberNotEqual'

const tNumber = {
    number,
    intFromString: IntFromString,
    numberFromString: NumberFromString,
    greaterThenOrEqual: numberGreaterThenOrEqual,
    lessThenOrEqual: numberLessThenOrEqual,
    notEqual: numberNotEqual,
}

export default tNumber
