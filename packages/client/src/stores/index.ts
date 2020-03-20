import { RootStore, ROOT_STORE_INITIAL_STATE } from './RootStore'

const mstStore = RootStore.create(ROOT_STORE_INITIAL_STATE)

export * from './ThemeStore'
export * from './RootStore'

export default mstStore
