import { REM_UNIT } from '@client/constants'
import {
    spacingSimpleSizeMultiplier,
    spacingSquishSizeMultiplier,
    spacingStretchSizeMultiplier,
    spacingSizeBuilder,
} from './spacing'

const spacingSizeRemBuilder = spacingSizeBuilder(REM_UNIT)

/*********************************************************************************************/

export const spacingSimpleSizeRem = spacingSizeRemBuilder(spacingSimpleSizeMultiplier)
export const spacingSquishSizeRem = spacingSizeRemBuilder(spacingSquishSizeMultiplier)
export const spacingStretchSizeRem = spacingSizeRemBuilder(spacingStretchSizeMultiplier)

/*********************************************************************************************/
