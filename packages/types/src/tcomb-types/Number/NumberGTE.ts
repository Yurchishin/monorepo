import t from 'tcomb-validation'
import { NumberGT } from './NumberGT'
import { Numerical } from './Numerical'

export const NumberGTE = (min: number) => t.union([
    Numerical(min),
    NumberGT(min),
], 'NumberGTE')
