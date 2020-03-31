import R from '@chat/ramda'
import { IAnyType, IType, SnapshotOut, types } from 'mobx-state-tree'

const thunk = <T extends IAnyType, V extends SnapshotOut<T>>(type: T): IThunkType<T, V> =>
    types.custom<Lazy<V>, Lazy<V>>({
        name: 'thunk',
        fromSnapshot: R.identity,
        toSnapshot: R.identity,
        isTargetType: R.F,
        getValidationMessage(snapshot: Lazy<V>): string {
            return typeof snapshot === 'function'
                ? ''
                : `'${snapshot}' doesn't look like a valid 'thunk'`
        },
    })

export type IThunkType<T extends IAnyType, V extends SnapshotOut<T>> = IType<Lazy<V>, Lazy<V>, Lazy<V>>

export default thunk
