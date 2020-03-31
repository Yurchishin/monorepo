/* tslint:disable:no-if-statement newspaper-order no-null-keyword */
import R, { Either as FEither, Try } from '@chat/ramda'
import { types, typecheck, IAnyType, SnapshotOut } from 'mobx-state-tree'

const Either = <
    TL extends IAnyType,
    TR extends IAnyType,
    VL extends SnapshotOut<TL>,
    VR extends SnapshotOut<TR>,
>(typeL: TL, typeR: TR) => {
    const name = `Either(${typeL.name}, ${typeR.name})`

    return types.custom<FEither<VL, VR>, FEither<VL, VR>>({
        name,
        fromSnapshot: R.identity,
        toSnapshot: R.identity,
        isTargetType: R.F,
        getValidationMessage(snapshot: FEither<VL, VR>): string {
            return Try.of(() => {
                typecheck(
                    snapshot.fold<IAnyType>(R.always(typeL), R.always(typeR)),
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

export default Either
