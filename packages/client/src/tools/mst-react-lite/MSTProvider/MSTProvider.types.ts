import { Context, FC } from 'react'
import { MstStore } from '@client/stores'
import { $Keys } from 'utility-types'

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
