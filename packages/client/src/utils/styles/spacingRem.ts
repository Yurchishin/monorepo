import { REM_UNIT } from '@client/constants'
import {
    spacingMultiplySimpleParser,
    spacingMultiplySquishParser,
    spacingMultiplyStretchParser,
    spacingSizeFactory,
} from './spacing'

const spacingSizeRemFactory = spacingSizeFactory(REM_UNIT)

export const spacingSimpleSizeRem = spacingSizeRemFactory(spacingMultiplySimpleParser)
export const spacingSquishSizeRem = spacingSizeRemFactory(spacingMultiplySquishParser)
export const spacingStretchSizeRem = spacingSizeRemFactory(spacingMultiplyStretchParser)
