import {
    spacingSimpleSizeRem,
    spacingSquishSizeRem,
    spacingStretchSizeRem,
} from '@client/utils'

export const spacingSizeRem = (size: number) => ({
    SIMPLE: spacingSimpleSizeRem(size),
    SQUISH: spacingSquishSizeRem(size),
    STRETCH: spacingStretchSizeRem(size),
})
