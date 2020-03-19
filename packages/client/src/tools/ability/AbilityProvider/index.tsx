import React, { useState, useMemo } from 'react'

import { TAbilityProvider } from './AbilityProvider.types'
import { AbilityContext } from './AbilityProvider.constants'

const AbilityProvider: TAbilityProvider = ({children, ability}) => {
    const [value, setAbility] = useState(ability)
    const abilityProviderValue = useMemo(() => ({value, setAbility}), [value])

    return (
        <AbilityContext.Provider value={abilityProviderValue}>
            {children}
        </AbilityContext.Provider>
    )
}

export default AbilityProvider
