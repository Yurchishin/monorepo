import { Context, FC } from 'react'

export type RootStore = Record<string, Record<string, object>>

export type TMobStateTreeProviderProps = {
    store: RootStore;
}

export type TMobStateTreeProvider = FC<TMobStateTreeProviderProps>

export type TMobStateTreeContext = Context<RootStore | null>
