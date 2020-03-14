import t from 'tcomb-validation'
import R from '@chat/ramda'

export const StringEqualLength = (value: number) => t.refinement(
    t.String,
    R.equalsLength(value),
    'StringEqualLength',
)
