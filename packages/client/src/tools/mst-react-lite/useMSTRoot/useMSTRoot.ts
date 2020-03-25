/* tslint:disable:no-if-statement no-throw */
import { useObserver } from 'mobx-react-lite'
import { UseStoreError } from '@client/services'
import { useMST } from '../useMST'
import { TUseMSTRoot } from './useMSTRoot.types'

const useMSTRoot: TUseMSTRoot = options => {
    const { rootStore } = useMST()

    if (!rootStore) {
        throw UseStoreError('Root stores is empty.')
    }

    return useObserver(() => rootStore, undefined, options)
}

export default useMSTRoot
