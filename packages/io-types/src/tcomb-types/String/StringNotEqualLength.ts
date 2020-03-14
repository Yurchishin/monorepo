import t from 'tcomb-validation'
import R from '@chat/ramda'

export const StringNotEqualLength = (value: number) => t.refinement(
    t.String,
    R.notEqualsLength(value),
    'StringNotEqualLength',
)
