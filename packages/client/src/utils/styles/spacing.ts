import R, { Curry } from '@chat/ramda'
import {
    SPACING_MULTIPLIER_XS,
    SPACING_MULTIPLIER_S,
    SPACING_MULTIPLIER_M,
    SPACING_MULTIPLIER_L,
    SPACING_MULTIPLIER_XL,
} from '@client/constants'
import { RelativeUnit } from '@client/types'

/*********************************************************************************************/

type SpacingSizeMultiply = (a: number, b: number) => number

const spacingSizeMultiply = R.multiply

const spacingSizeDoubleMultiply = R.compose<number, number, number, number>(
    R.double,
    R.multiply,
)

/*********************************************************************************************/

type SizeUnitParser = (unit: RelativeUnit, size: number, _: number) => string

// '1px'
const spacingSimpleSizeUnitParser: SizeUnitParser = (unit, size, _) => `${size}${unit}`

// '1px 2px'
const spacingSquishSizeUnitParser: SizeUnitParser = (unit, size, squishSize) =>
    `${spacingSimpleSizeUnitParser(unit, size, size)} ${spacingSimpleSizeUnitParser(unit, squishSize, squishSize)}`

// '2px 1px'
const spacingStretchSizeUnitParser: SizeUnitParser = (unit, size, squishSize) =>
    `${spacingSimpleSizeUnitParser(unit, squishSize, squishSize)} ${spacingSimpleSizeUnitParser(unit, size, size)}`

/*********************************************************************************************/

type SpacingSizeMultiplier = (unit: RelativeUnit, multiplier: number, size: number) => string

export const spacingMultiplierBuilder = R.curry(
    (
        parser: SizeUnitParser,
        additionalMultiply: SpacingSizeMultiply,
    ): SpacingSizeMultiplier =>
    (
        unit: RelativeUnit,
        multiplier: number,
        size: number,
    ): string => {
        const currentSize = spacingSizeMultiply(multiplier, size)
        const additionalSize = additionalMultiply(multiplier, size)

        return parser(unit, currentSize, additionalSize)
    },
)

export const spacingSimpleSizeMultiplier: SpacingSizeMultiplier = spacingMultiplierBuilder(
    spacingSimpleSizeUnitParser,
    spacingSizeMultiply,
)

export const spacingSquishSizeMultiplier: SpacingSizeMultiplier = spacingMultiplierBuilder(
    spacingSquishSizeUnitParser,
    spacingSizeDoubleMultiply,
)

export const spacingStretchSizeMultiplier: SpacingSizeMultiplier = spacingMultiplierBuilder(
    spacingStretchSizeUnitParser,
    spacingSizeDoubleMultiply,
)

/*********************************************************************************************/

type SpacingSizes = {
    XS: string;
    S: string;
    M: string;
    L: string;
    XL: string;
}

export type SpacingSizeUnitBuilder = Curry<(
    spacingSizeMultiplier: SpacingSizeMultiplier,
    size: number,
) => SpacingSizes>

export const spacingSizeBuilder = R.curry(
    (unit: RelativeUnit, spacingSizeMultiplier: SpacingSizeMultiplier, size: number) => ({
        XS: spacingSizeMultiplier(unit, SPACING_MULTIPLIER_XS, size),
        S: spacingSizeMultiplier(unit, SPACING_MULTIPLIER_S, size),
        M: spacingSizeMultiplier(unit, SPACING_MULTIPLIER_M, size),
        L: spacingSizeMultiplier(unit, SPACING_MULTIPLIER_L, size),
        XL: spacingSizeMultiplier(unit, SPACING_MULTIPLIER_XL, size),
    }),
)
