import { isType, types } from 'mobx-state-tree'
import { IAnyType } from 'mobx-state-tree/dist/core/type/type'

export const mstType = types.custom<IAnyType, IAnyType>({
    name: 'MSTType',
    fromSnapshot(snapshot: IAnyType): IAnyType {
        return snapshot
    },
    toSnapshot(value: IAnyType): IAnyType {
        return value
    },
    // eslint-disable-next-line ramda/prefer-ramda-boolean
    isTargetType(): boolean {
        return true
    },
    getValidationMessage(snapshot: IAnyType): string {
        return isType(snapshot) ? '' : `'${snapshot}\' doesn't look like a valid MSTType`
    },
})
