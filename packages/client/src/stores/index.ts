import { RootStore, ROOT_STORE_INITIAL_STATE } from './RootStore'
import { Instance } from 'mobx-state-tree/dist/core/type/type'

const mstStore = RootStore.create(ROOT_STORE_INITIAL_STATE)

export * from './ThemeStore'
export * from './RootStore'

export type MstStore = Instance<typeof RootStore> & {
    navigationStore: any;
}

export default mstStore
