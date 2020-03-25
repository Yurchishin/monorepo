/* tslint:disable:no-null-keyword no-if-statement */
import { useContext, useMemo } from 'react'
import { __RouterContext as RouterContext } from 'react-router'
import { MSTTypecheck } from 'mst-react-lite'
import { IAnyType } from 'mobx-state-tree/dist/core/type/type'
import { Instance } from 'mobx-state-tree/dist'

const useMSTParams = <T extends IAnyType>(Type?: T): [Instance<typeof Type>, Error | null] => {
    const { params } = useContext(RouterContext).match
    const error = useMemo(() => {
        if (Type) return MSTTypecheck(Type, params)

        return null
    }, [Type, params])

    return [params as Instance<typeof Type>, error]
}

export default useMSTParams
