import { Context, FC } from 'react'
import { MstStore } from '@client/stores'

export type RootStore = MstStore

export type TMobStateTreeProviderProps = {
    store: RootStore;
}

export type TMobStateTreeProvider = FC<TMobStateTreeProviderProps>

export type TMobStateTreeContext = Context<RootStore>
