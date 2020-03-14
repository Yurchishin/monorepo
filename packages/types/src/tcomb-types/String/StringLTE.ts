import t from 'tcomb-validation'
import { StringLT } from './StringLT'
import { StringEqualLength } from './StringEqualLength'

export const StringLTE = (min: number) => t.union([
    StringLT(min),
    StringEqualLength(min),
], 'StringLTE')
