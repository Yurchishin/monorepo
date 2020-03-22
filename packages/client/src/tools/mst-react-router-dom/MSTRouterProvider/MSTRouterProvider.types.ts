import { Context, FC } from 'react'
import { RootStore } from 'mst-react-lite'
import { $Keys } from 'utility-types'
import { BrowserRouterProps } from 'react-router-dom'

export type TMSTRouterContextValue = $Keys<RootStore>

export type TMSTRouterContext = Context<TMSTRouterContextValue>

export type MSTRouterProviderProps = BrowserRouterProps & {
    navigationStoreName: $Keys<RootStore>;
}

export type TMSTRouterProvider = FC<MSTRouterProviderProps>
