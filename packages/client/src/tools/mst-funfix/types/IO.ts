import R, { IO as FIO } from '@chat/ramda'
import { types, IAnyType, SnapshotOut } from 'mobx-state-tree'

const IO = <T extends IAnyType, V extends SnapshotOut<T>>(type: T) => {
    const name = `IO(${type.name})`

    return types.custom<FIO<V>, FIO<V>>({
        name,
        fromSnapshot: R.identity,
        toSnapshot: R.identity,
        isTargetType: R.F,
        getValidationMessage(snapshot: FIO<V>): string {
            return snapshot instanceof FIO
                ? ''
                : `'${snapshot}' doesn't look like a valid '${name}'`
        },
    })
}

export default IO
