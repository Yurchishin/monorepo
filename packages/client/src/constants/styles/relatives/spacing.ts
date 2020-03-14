import * as O from 'fp-ts/lib/Option'

const MULTIPLIER_XS = 0.25
const MULTIPLIER_S = 0.5
const MULTIPLIER_M = 1
const MULTIPLIER_L = 2
const MULTIPLIER_XL = 3

export const SPACING_MULTIPLIER_XS = O.some(MULTIPLIER_XS)
export const SPACING_MULTIPLIER_S = O.some(MULTIPLIER_S)
export const SPACING_MULTIPLIER_M = O.some(MULTIPLIER_M)
export const SPACING_MULTIPLIER_L = O.some(MULTIPLIER_L)
export const SPACING_MULTIPLIER_XL = O.some(MULTIPLIER_XL)
