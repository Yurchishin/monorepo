import R from '@chat/ramda'
import { StyleUnit } from '@client/types'
import {
    INDENT_MULTIPLIER_XS,
    INDENT_MULTIPLIER_S,
    INDENT_MULTIPLIER_M,
    INDENT_MULTIPLIER_L,
    INDENT_MULTIPLIER_XL,
} from './Indents.constants'

const space = (a: string, b: string) => `${a} ${b}`

/*********************************************************************************************/

type SpacingParser = (unit: StyleUnit, size: number) => string

// '1px'
export const simpleParser: SpacingParser = (unit, size) => `${size}${unit}`

// '2px'
export const simpleDoubleParser: SpacingParser = (unit, size) => `${R.double(size)}${unit}`

// '1px 2px'
export const squishParser: SpacingParser = (unit, size) =>
    space(
        simpleParser(unit, size),
        simpleDoubleParser(unit, size),
    )

// '2px 1px'
export const stretchParser: SpacingParser = (unit, size) =>
    space(
        simpleDoubleParser(unit, size),
        simpleParser(unit, size),
    )

/*********************************************************************************************/

export type IndentsMultiplyParser = (unit: StyleUnit, multiplier: number, size: number) => string

export const indentsMultiplyParserFactory = (
    parser: SpacingParser,
): IndentsMultiplyParser => (
    unit: StyleUnit,
    multiplier: number,
    size: number,
): string => {
    const correctSize = R.multiply(multiplier, size)

    return parser(unit, correctSize)
}

export const indentSimpleParser: IndentsMultiplyParser = indentsMultiplyParserFactory(
    simpleParser,
)

export const indentSquishParser: IndentsMultiplyParser = indentsMultiplyParserFactory(
    squishParser,
)

export const indentStretchParser: IndentsMultiplyParser = indentsMultiplyParserFactory(
    stretchParser,
)

/*********************************************************************************************/

export const indentsFactory =
    (unit: StyleUnit) =>
        (indentsSizeMultiplier: IndentsMultiplyParser) =>
            (size: number) => ({
                XS: indentsSizeMultiplier(unit, INDENT_MULTIPLIER_XS, size),
                S: indentsSizeMultiplier(unit, INDENT_MULTIPLIER_S, size),
                M: indentsSizeMultiplier(unit, INDENT_MULTIPLIER_M, size),
                L: indentsSizeMultiplier(unit, INDENT_MULTIPLIER_L, size),
                XL: indentsSizeMultiplier(unit, INDENT_MULTIPLIER_XL, size),
            })
