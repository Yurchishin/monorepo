import R from '@chat/ramda'
import {
    SPACING_MULTIPLIER_XS,
    SPACING_MULTIPLIER_S,
    SPACING_MULTIPLIER_M,
    SPACING_MULTIPLIER_L,
    SPACING_MULTIPLIER_XL,
} from '@client/constants'
import { RelativeUnit } from '@client/types'

const space = (a: string, b: string) => `${a} ${b}`

/*********************************************************************************************/

type SpacingParser = (unit: RelativeUnit, size: number) => string

// '1px'
const spacingSimpleParser: SpacingParser = (unit, size) => `${size}${unit}`

// '2px'
const spacingSimpleDoubleParser: SpacingParser = (unit, size) => `${size}${R.double(size)}`

// '1px 2px'
const spacingSquishParser: SpacingParser = (unit, size) =>
    space(
        spacingSimpleParser(unit, size),
        spacingSimpleDoubleParser(unit, size),
    )

// '2px 1px'
const spacingStretchParser: SpacingParser = (unit, size) =>
    space(
        spacingSimpleDoubleParser(unit, size),
        spacingSimpleParser(unit, size),
    )

/*********************************************************************************************/

type SpacingMultiplyParser = (unit: RelativeUnit, multiplier: number, size: number) => string

export const spacingMultiplyParserFactory = (
        parser: SpacingParser,
    ): SpacingMultiplyParser => (
        unit: RelativeUnit,
        multiplier: number,
        size: number,
    ): string => {
        const correctSize = R.multiply(multiplier, size)

        return parser(unit, correctSize)
    }

export const spacingMultiplySimpleParser: SpacingMultiplyParser = spacingMultiplyParserFactory(
    spacingSimpleParser,
)

export const spacingMultiplySquishParser: SpacingMultiplyParser = spacingMultiplyParserFactory(
    spacingSquishParser,
)

export const spacingMultiplyStretchParser: SpacingMultiplyParser = spacingMultiplyParserFactory(
    spacingStretchParser,
)

/*********************************************************************************************/

export const spacingSizeFactory = R.curry(
    (unit: RelativeUnit, spacingSizeMultiplier: SpacingMultiplyParser, size: number) => ({
        XS: spacingSizeMultiplier(unit, SPACING_MULTIPLIER_XS, size),
        S: spacingSizeMultiplier(unit, SPACING_MULTIPLIER_S, size),
        M: spacingSizeMultiplier(unit, SPACING_MULTIPLIER_M, size),
        L: spacingSizeMultiplier(unit, SPACING_MULTIPLIER_L, size),
        XL: spacingSizeMultiplier(unit, SPACING_MULTIPLIER_XL, size),
    }),
)
