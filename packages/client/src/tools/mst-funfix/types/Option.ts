/* tslint:disable:no-if-statement newspaper-order no-null-keyword */
import R, { Option as FOption, Try } from '@chat/ramda'
import { IAnyType, SnapshotOut, types, typecheck } from 'mobx-state-tree'

const Option = <T extends IAnyType, V extends SnapshotOut<T>>(type: T) => {
    const name = `Option(${type.name})`

    return types.custom<FOption<V>, FOption<V>>({
        name,
        fromSnapshot: R.identity,
        toSnapshot: R.identity,
        isTargetType: R.F,
        getValidationMessage(snapshot: FOption<V>): string {
            return Try.of(() => {
                typecheck(
                    types.union(types.undefined, type),
                    snapshot.value,
                )

                return ''
            })
                .getOrElseL(
                    R.always(
                        `'${snapshot.value}' doesn't look like a valid '${name}'`,
                    ),
                )
        },
    })
}

export default Option
