import t from 'tcomb-validation'
import R from '@chat/ramda'

export const StringLT = (min: number) => t.refinement(
    t.String,
    R.ltLength(R.__, min),
    'StringLT',
)
