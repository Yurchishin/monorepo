import { String } from 'tcomb-validation'
import * as tx from 'tcomb-additional-types'
import { Literal } from './Literal'
import { StringGT } from './StringGT'
import { StringGTE } from './StringGTE'
import { StringLT } from './StringLT'
import { StringLTE } from './StringLTE'
import { StringEqualLength } from './StringEqualLength'
import { StringNotEqualLength } from './StringNotEqualLength'
import { StringRegExp } from './StringRegExp'

const tString = {
    String,
    Email: tx.String.Email,
    Literal,
//    nonEmpty: NonEmptyString,
    StringGT,
    StringGTE,
    StringLT,
    StringLTE,
    StringEqualLength,
    StringNotEqualLength,
    StringRegExp,
}

export default tString
