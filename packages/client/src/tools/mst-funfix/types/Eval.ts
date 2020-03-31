import R, { Eval as FEval } from '@chat/ramda'
import { types, IAnyType, SnapshotOut } from 'mobx-state-tree'

const Eval = <T extends IAnyType, V extends SnapshotOut<T>>(type: T) => {
    const name = `Eval(${type.name})`

    return types.custom<FEval<V>, FEval<V>>({
        name,
        fromSnapshot: R.identity,
        toSnapshot: R.identity,
        isTargetType: R.F,
        getValidationMessage(snapshot: FEval<V>): string {
            return snapshot instanceof FEval
                ? ''
                : `'${snapshot}' doesn't look like a valid '${name}'`
        },
    })
}

export default Eval
