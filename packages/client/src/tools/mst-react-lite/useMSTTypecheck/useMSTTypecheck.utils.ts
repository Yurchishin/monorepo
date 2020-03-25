import { ExtractCSTWithSTN, IAnyType } from 'mobx-state-tree/dist/internal'
import { typecheck } from 'mobx-state-tree'

export const MSTTypecheck = <IT extends IAnyType>(type: IT, value: ExtractCSTWithSTN<IT>): Error | null => {
    try {
        typecheck(type, value)

        return null
    } catch (error) {
        return error
    }
}
