import { curry, compose, not, equals } from 'ramda'

const NE = <T1, T2>(a: T1, b: T2) => compose<T1, T2, boolean, boolean>(not, equals)(a, b)
export const notEquals = curry(NE)
