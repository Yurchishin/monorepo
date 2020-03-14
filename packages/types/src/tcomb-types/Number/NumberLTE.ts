import t from 'tcomb-validation'
import { NumberLT } from './NumberLT'
import { Numerical } from './Numerical'

export const NumberLTE = (min: number) => t.union([
    Numerical(min),
    NumberLT(min),
], 'NumberLTE')
