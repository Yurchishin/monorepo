import { compose, curry, equals, length, not } from 'ramda'

const eqByLast = <T1, T2, R>(f: (x: T1 | T2) => R, a: T1, b: T1) => equals(a, f(b))

const EL = <T1, T2>(a: T1, b: T1) => eqByLast<T1, T2, number>(length, a, b)
const NEL = <T1, T2>(a: T1, b: T2) => compose<T1 | T2, T1 | T2, boolean, boolean>(not, EL)(a, b)

export const equalsLength = curry(EL)
export const notEqualsLength = curry(NEL)
