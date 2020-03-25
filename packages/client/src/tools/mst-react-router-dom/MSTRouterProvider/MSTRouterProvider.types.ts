import { FC } from 'react'
import { NavigationStoreName } from 'mst-react-lite'
import { History } from 'history'

export type MSTRouterProviderProps = {
    navigationStoreName?: NavigationStoreName;
    history: History;
}

export type TMSTRouterProvider = FC<MSTRouterProviderProps>
