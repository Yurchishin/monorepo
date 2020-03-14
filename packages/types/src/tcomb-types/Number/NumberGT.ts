import t from 'tcomb-validation'
import R from '@chat/ramda'

export const NumberGT = (min: number) => t.refinement(
    t.Number,
    R.gt(R.__, min),
    'NumberGT',
)
