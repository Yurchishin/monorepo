import { ExtractCSTWithSTN, IAnyType } from 'mobx-state-tree/dist/internal'
import { typecheck } from 'mobx-state-tree'

export const booleanTypecheck = <IT extends IAnyType>(type: IT, value: ExtractCSTWithSTN<IT>): boolean => {
    try {
        typecheck(type, value)

        return true
    } catch (error) {
        return false
    }
}
