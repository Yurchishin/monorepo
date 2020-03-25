import types from 'mst-types'
import { MSTNavigationStore } from 'mst-react-router-dom'
import { ThemeStore } from '../ThemeStore'

const RootStore = types.model({
    themeStore: ThemeStore,
    navigationStore: MSTNavigationStore,
})

export default RootStore
