import { string } from 'io-ts'
import { NonEmptyString } from 'io-ts-types/lib/NonEmptyString'
import { stringGreaterThenOrEqual } from './StringGreaterThenOrEqual'
import { stringLessThenOrEqual } from './StringLessThenOrEqual'
import { stringNotEqualLength } from './StringNotEqualLength'
import { stringRegExp } from './StringRegExp'

const tString = {
    string,
    nonEmpty: NonEmptyString,
    greaterThenOrEqual: stringGreaterThenOrEqual,
    lessThenOrEqual: stringLessThenOrEqual,
    notEqualLength: stringNotEqualLength,
    regExp: stringRegExp,
}

export default tString
