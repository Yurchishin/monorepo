import t from 'tcomb-validation'
import R from '@chat/ramda'

export const NumberNotEqual = (value: number) => t.refinement(
    t.Number,
    R.notEquals(value),
    'NumberNotEqual',
)
