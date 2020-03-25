import { useContext } from 'react'
import { useMSTStore, MobStateTreeContext } from 'mst-react-lite'
import { TUseNSTNavigationStore } from './useNSTNavigationStore.types'

const useNSTNavigationStore: TUseNSTNavigationStore = options => {
    const { navigationStoreName } = useContext(MobStateTreeContext)

    if (!navigationStoreName) {
        throw new Error('useNSTNavigationStore')
    }

    const navigationStore = useMSTStore(navigationStoreName, undefined, options)

    return navigationStore
}

export default useNSTNavigationStore
