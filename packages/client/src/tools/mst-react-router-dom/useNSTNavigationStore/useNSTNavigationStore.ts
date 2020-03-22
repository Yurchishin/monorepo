import { useContext } from 'react'
import { useMSTStore } from 'mst-react-lite'
import { MSTRouterContext } from '../MSTRouterProvider'
import { NavigationStore } from '../MSTNavigationStore'
import { TUseNSTNavigationStore } from './useNSTNavigationStore.types'

const useNSTNavigationStore: TUseNSTNavigationStore = options => {
    const navigationStoreName = useContext(MSTRouterContext)
    const navigationStore: NavigationStore = useMSTStore(navigationStoreName, undefined, options)

    return navigationStore
}

export default useNSTNavigationStore
