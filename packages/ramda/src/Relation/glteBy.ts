import { curry, gt , gte , lt , lte } from 'ramda'

type GLTEPrimitives = string | number
type GLTE = typeof gt | typeof gte | typeof lt | typeof lte

const glteBy = (fn: GLTE) => curry(
    <T1 extends GLTEPrimitives, T2 extends GLTEPrimitives>
    (f: (x: T1 | T2) => number, a: T1, b: T2) => fn(f(a), f(b)),
)

export const gtBy = glteBy(gt)

export const gteBy = glteBy(gte)

export const ltBy = glteBy(lt)

export const lteBy = glteBy(lte)
