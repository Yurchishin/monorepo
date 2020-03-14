import t from 'tcomb-validation'
import R from '@chat/ramda'

export const Numerical = (value: number) => t.refinement(
    t.Number,
    R.equals(value),
    'Numerical',
)
