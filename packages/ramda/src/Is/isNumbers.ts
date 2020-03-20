import { both, lt, gt } from 'ramda'

const isNumber = (n: number) => Object.prototype.toString.call(n) === '[object Number]'

const isPositive = (n: number) => both(isNumber, lt(0))(n)

const isNegative = (n: number) => both(isNumber, gt(0))(n)

export const isInt = Number.isInteger
export const isPositiveInt = (n: number) => both(isInt, isPositive)(n)
export const isNegativeInt = (n: number) => both(isInt, isNegative)(n)

export const isFloat = (n: number) => both(isNumber, (n: number) => Number(n) === n && n % 1 !== 0)(n)
export const isPositiveFloat = (n: number) => both(isFloat, isPositive)(n)
export const isNegativeFloat = (n: number) => both(isFloat, isNegative)(n)
