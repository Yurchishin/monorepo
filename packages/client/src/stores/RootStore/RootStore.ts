import types from 'mst-types'
import { ThemeStore } from '../ThemeStore'

const RootStore = types.model({
    themeStore: ThemeStore,
})

export default RootStore
