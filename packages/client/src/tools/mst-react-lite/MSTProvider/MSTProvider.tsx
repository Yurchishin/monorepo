import React from 'react'
import { MobStateTreeContext } from './MSTProvider.constants'
import { TMSTProvider } from './MSTProvider.types'

const MSTProvider: TMSTProvider = ({ rootStore,  children }) => (
    <MobStateTreeContext.Provider value={{ rootStore }}>
        {children}
    </MobStateTreeContext.Provider>
)

export default MSTProvider
