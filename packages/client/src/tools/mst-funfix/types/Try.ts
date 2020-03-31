/* tslint:disable:no-if-statement newspaper-order no-null-keyword */
import R, { Try as FTry } from '@chat/ramda'
import { types, typecheck, IAnyType, SnapshotOut } from 'mobx-state-tree'

const Try = <T extends IAnyType, V extends SnapshotOut<T>>(type: T) => {
    const name = `Try(${type.name})`

    return types.custom<FTry<V>, FTry<V>>({
        name,
        fromSnapshot: R.identity,
        toSnapshot: R.identity,
        isTargetType: R.F,
        getValidationMessage(snapshot: FTry<V>): string {
            return FTry.of(() => {
                if (snapshot.isSuccess()) {
                    typecheck(type, snapshot.value)
                }

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

export default Try
