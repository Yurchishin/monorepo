import { curry, gt, gte, length, lt, lte } from 'ramda'

type GLTEPrimitives = string | number
type GLTE = typeof gt | typeof gte | typeof lt | typeof lte

const glteByFirst = (fn: GLTE) => curry(
    <T1 extends GLTEPrimitives, T2 extends GLTEPrimitives>
    (f: (x: T1 | T2) => number, a: T1, b: T1) => fn(f(a), b),
)

const gtByFirst = glteByFirst(gt)
const gteByFirst = glteByFirst(gte)
const ltByFirst = glteByFirst(lt)
const lteByFirst = glteByFirst(lte)

export const gtLength = gtByFirst(length)

export const gteLength = gteByFirst(length)

export const ltLength = ltByFirst(length)

export const lteLength = lteByFirst(length)
