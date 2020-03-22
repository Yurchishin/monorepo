import { createContext } from 'react'
import { TMSTRouterContext, TMSTRouterContextValue } from './MSTRouterProvider.types'

export const MSTNavigationStoreName = 'navigationStore'

export const MSTRouterContext: TMSTRouterContext = createContext<TMSTRouterContextValue>(MSTNavigationStoreName)
