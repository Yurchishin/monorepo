import R, { Future as FFuture } from '@chat/ramda'
import { types, IAnyType, SnapshotOut } from 'mobx-state-tree'

const Future = <T extends IAnyType, V extends SnapshotOut<T>>(type: T) => {
    const name = `Future(${type.name})`

    return types.custom<FFuture<V>, FFuture<V>>({
        name,
        fromSnapshot: R.identity,
        toSnapshot: R.identity,
        isTargetType: R.F,
        getValidationMessage(snapshot: FFuture<V>): string {
            return snapshot instanceof FFuture
                ? ''
                : `'${snapshot}' doesn't look like a valid '${name}'`
        },
    })
}

export default Future
