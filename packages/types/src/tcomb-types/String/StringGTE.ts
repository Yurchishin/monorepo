import t from 'tcomb-validation'
import { StringGT } from './StringGT'
import { StringEqualLength } from './StringEqualLength'

export const StringGTE = (min: number) => t.union([
    StringGT(min),
    StringEqualLength(min),
], 'StringGTE')
