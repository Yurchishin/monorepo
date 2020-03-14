import t from 'tcomb-validation'
import R from '@chat/ramda'

export const StringGT = (min: number) => t.refinement(
    t.String,
    R.gtLength(R.__, min),
    'StringGT',
)
