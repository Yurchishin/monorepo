import { types } from 'mobx-state-tree'
import { ITypeUnion } from 'mobx-state-tree/dist/types/utility-types/union'
import { EM_UNIT, PX_UNIT, REM_UNIT, PERCENT_UNIT } from '@client/constants'
import { StyleUnit } from '@client/types'

export const rem = types.literal(REM_UNIT)
export const em = types.literal(EM_UNIT)
export const px = types.literal(PX_UNIT)
export const percent = types.literal(PERCENT_UNIT)

export const styleUnit: ITypeUnion<StyleUnit, StyleUnit, StyleUnit> = types.union(rem, px, em, percent)
