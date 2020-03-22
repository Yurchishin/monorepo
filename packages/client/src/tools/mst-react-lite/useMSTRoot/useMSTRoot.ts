/* tslint:disable:no-if-statement no-throw */
import { useContext } from 'react'
import { useObserver } from 'mobx-react-lite'
import { UseStoreError } from '@client/services'
import { MobStateTreeProviderContext } from '../MobStateTreeProvider'
import { TUseMSTRoot } from './useMSTRoot.types'

const useMSTRoot: TUseMSTRoot = options => {
    const rootStore = useContext(MobStateTreeProviderContext)

    if (!rootStore) {
        throw UseStoreError('Root stores is empty.')
    }

    return useObserver(() => rootStore, undefined, options)
}

export default useMSTRoot
