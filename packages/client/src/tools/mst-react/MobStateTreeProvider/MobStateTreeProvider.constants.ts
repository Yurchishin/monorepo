import { createContext } from 'react'
import { TMobStateTreeContext } from './MobStateTreeProvider.types'

export const MobStateTreeProviderContext: TMobStateTreeContext = createContext<object | null>(null)
