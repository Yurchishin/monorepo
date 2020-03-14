import * as O from 'fp-ts/lib/Option'
import { semigroupProduct, semigroupString } from 'fp-ts/lib/Semigroup'
import { pipe } from 'fp-ts/lib/pipeable'

type Option<A> = O.Option<A>

import {
    SPACING_MULTIPLIER_XS,
    SPACING_MULTIPLIER_S,
    SPACING_MULTIPLIER_M,
    SPACING_MULTIPLIER_L,
    SPACING_MULTIPLIER_XL,
} from '../../../constants/styles/relatives/spacing'
import { REM_UNIT } from '../../../constants/styles/relatives/units'

const OSP = O.getApplySemigroup(semigroupProduct)
const OSS = O.getApplySemigroup(semigroupString)

const sizeString = O.map((size: number) => size.toString())

const spacingSizeMultiply = OSP.concat

export const spacingSizeUnit =
    (unit: Option<string>) =>
        (size: Option<number>): Option<string> =>
            OSS.concat(sizeString(size), unit)


export const spacingSizeMultiplierRem =
    (size: Option<number>, multiplier: Option<number>, unit: Option<string>): Option<string> =>
        pipe(
            spacingSizeMultiply(multiplier, size),
            spacingSizeUnit(unit),
        )

export const spacingSizeRemXS = (size: Option<number>): Option<string> =>
    spacingSizeMultiplierRem(size, SPACING_MULTIPLIER_XS, REM_UNIT)

export const spacingSizeRemS = (size: Option<number>): Option<string> =>
    spacingSizeMultiplierRem(size, SPACING_MULTIPLIER_S, REM_UNIT)

export const spacingSizeRemM = (size: Option<number>): Option<string> =>
    spacingSizeMultiplierRem(size, SPACING_MULTIPLIER_M, REM_UNIT)

export const spacingSizeRemL = (size: Option<number>): Option<string> =>
    spacingSizeMultiplierRem(size, SPACING_MULTIPLIER_L, REM_UNIT)

export const spacingSizeRemXL = (size: Option<number>): Option<string> =>
    spacingSizeMultiplierRem(size, SPACING_MULTIPLIER_XL, REM_UNIT)

