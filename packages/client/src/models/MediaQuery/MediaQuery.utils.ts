import R from '@chat/ramda'
import { StyleUnit } from '@client/types'
import {
    MEDIA_QUERY_MULTIPLIER_XS,
    MEDIA_QUERY_MULTIPLIER_SM,
    MEDIA_QUERY_MULTIPLIER_MD,
    MEDIA_QUERY_MULTIPLIER_LG,
} from './MediaQuery.constants'

const breakpointParser = (unit: StyleUnit, size: number) => `${size}${unit}`

const breakpointMultiplyParser = (
    unit: StyleUnit,
    multiplier: number,
    size: number,
): string => {
    const correctSize = R.multiply(multiplier, size)

    return breakpointParser(unit, correctSize)
}

export const breakpointFactory =
    (unit: StyleUnit) =>
        (size: number) => ({
            XS: breakpointMultiplyParser(unit, MEDIA_QUERY_MULTIPLIER_XS, size),
            SM: breakpointMultiplyParser(unit, MEDIA_QUERY_MULTIPLIER_SM, size),
            MD: breakpointMultiplyParser(unit, MEDIA_QUERY_MULTIPLIER_MD, size),
            LG: breakpointMultiplyParser(unit, MEDIA_QUERY_MULTIPLIER_LG, size),
        })
