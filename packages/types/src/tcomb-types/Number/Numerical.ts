import t, { Irreducible } from 'tcomb-validation'
import R from '@chat/ramda'

export const Numerical = <T>(value: T, name?: string): Irreducible<T> => t.irreducible(
    name || 'Numerical',
    R.equals(value),
)
