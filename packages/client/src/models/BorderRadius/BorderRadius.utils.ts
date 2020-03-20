import R from '@chat/ramda'
import { StyleUnit } from '@client/types'
import { PERCENT_UNIT } from '@client/constants'
import {
    BORDER_ROUND_SIZE,
    BORDER_RADIUS_MULTIPLIER_S,
    BORDER_RADIUS_MULTIPLIER_M,
    BORDER_RADIUS_MULTIPLIER_L,
} from './BorderRadius.constants'

/*********************************************************************************************/

type BorderRadiusParser = (unit: StyleUnit, size: number) => string

// '1px'
export const simpleParser: BorderRadiusParser = (unit, size) => `${size}${unit}`

export const roundParser: BorderRadiusParser = () => `${BORDER_ROUND_SIZE}${PERCENT_UNIT}`

/*********************************************************************************************/

export type BorderRadiusMultiplyParser = (unit: StyleUnit, multiplier: number, size: number) => string

export const borderRadiusMultiplyParserFactory = (
    parser: BorderRadiusParser,
): BorderRadiusMultiplyParser => (
    unit: StyleUnit,
    multiplier: number,
    size: number,
): string => {
    const correctSize = R.multiply(multiplier, size)

    return parser(unit, correctSize)
}

export const borderRadiusSimpleParser: BorderRadiusMultiplyParser = borderRadiusMultiplyParserFactory(
    simpleParser,
)

/*********************************************************************************************/

export const borderRadiusFactory =
    (unit: StyleUnit) =>
        (indentsSizeMultiplier: BorderRadiusMultiplyParser) =>
            (size: number) => ({
                S: indentsSizeMultiplier(unit, BORDER_RADIUS_MULTIPLIER_S, size),
                M: indentsSizeMultiplier(unit, BORDER_RADIUS_MULTIPLIER_M, size),
                L: indentsSizeMultiplier(unit, BORDER_RADIUS_MULTIPLIER_L, size),
            })
