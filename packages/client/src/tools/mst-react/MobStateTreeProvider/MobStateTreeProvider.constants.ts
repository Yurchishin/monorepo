import { createContext } from 'react'
import { TMobStateTreeContext, RootStore } from './MobStateTreeProvider.types'

export const MobStateTreeProviderContext: TMobStateTreeContext = createContext<RootStore | null>(null)
