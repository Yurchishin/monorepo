/* tslint:disable:no-if-statement no-throw */
import React, { useContext } from 'react'
import { useObserver } from 'mobx-react-lite'
import { UseStoreError } from '@client/services'
import { MobStateTreeProviderContext } from '../MobStateTreeProvider/MobStateTreeProvider.constants'
import { TUseMST } from './useMST.types'

const useMST: TUseMST = (
    storeSelector,
    dataSelector,
    baseComponentName,
    options,
) => {
    const rootStore = useContext(MobStateTreeProviderContext)

    if (!rootStore) {
        throw UseStoreError('Stores is empty.')
    }

    const store = typeof storeSelector === 'string'
        ? rootStore[storeSelector]
        : storeSelector(rootStore)

    return useObserver(() => dataSelector(store), baseComponentName, options)
}

export default useMST
