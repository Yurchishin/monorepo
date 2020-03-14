import { REM_UNIT } from '../../constants/styles'
import {
    spacingSimpleSizeMultiplier,
    spacingSquishSizeMultiplier,
    spacingStretchSizeMultiplier,
    spacingSizeBuilder,
    SpacingSizeUnitBuilder,
} from './spacing'

const spacingSizeRemBuilder = spacingSizeBuilder(REM_UNIT)

/*********************************************************************************************/

export const spacingSimpleSizeRem = spacingSizeRemBuilder(spacingSimpleSizeMultiplier)
export const spacingSquishSizeRem = spacingSizeRemBuilder(spacingSquishSizeMultiplier)
export const spacingStretchSizeRem = spacingSizeRemBuilder(spacingStretchSizeMultiplier)

/*********************************************************************************************/
