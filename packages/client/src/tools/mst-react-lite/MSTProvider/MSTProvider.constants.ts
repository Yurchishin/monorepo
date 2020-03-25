import { createContext } from 'react'
import { TMobStateTreeContext, RootStore } from './MSTProvider.types'

export const MobStateTreeContext: TMobStateTreeContext = createContext({
    rootStore: {} as RootStore,
})
