import t from 'tcomb-validation'
import R from '@chat/ramda'

export const NumberLT = (max: number) => t.refinement(
    t.Number,
    R.lt(R.__, max),
    'NumberLT',
)
