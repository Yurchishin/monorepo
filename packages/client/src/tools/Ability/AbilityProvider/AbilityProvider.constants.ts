import { createContext } from 'react'
import { TAbilityContextValue } from './AbilityProvider.types'

export const AbilityContext = createContext<TAbilityContextValue>(null)
