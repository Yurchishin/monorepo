import { createBrowserHistory } from 'history'
import { Instance } from 'mobx-state-tree/dist/core/type/type'
import { RootStore, ROOT_STORE_INITIAL_STATE } from './RootStore'

export const MST_ENV = {
    history: createBrowserHistory(),
}

const mstStore = RootStore.create(ROOT_STORE_INITIAL_STATE, MST_ENV)

export type MstStore = Instance<typeof RootStore>

export * from './ThemeStore'
export * from './RootStore'

export default mstStore
