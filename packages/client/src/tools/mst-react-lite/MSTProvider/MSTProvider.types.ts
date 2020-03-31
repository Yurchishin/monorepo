import { Context, FC } from 'react'
import { MstStore } from '@client/stores'

export type RootStore = MstStore
export type NavigationStoreName = /*$Keys<RootStore>*/ 'navigationStore'

export type TMSTProviderProps = {
    rootStore: RootStore;
}

export type TMSTProvider = FC<TMSTProviderProps>

export type TMobStateTreeContextValue = {
    rootStore: RootStore;
    navigationStoreName?: NavigationStoreName;
}

export type TMobStateTreeContext = Context<TMobStateTreeContextValue>
