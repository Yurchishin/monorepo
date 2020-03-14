import t, { Irreducible } from 'tcomb-validation'
import R from '@chat/ramda'

export const Literal = <T>(value: T, name?: string): Irreducible<T> => t.irreducible(
    name || 'Literal',
    R.equals(value),
)
