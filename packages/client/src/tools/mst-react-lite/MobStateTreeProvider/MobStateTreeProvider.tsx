import React from 'react'
import { MobStateTreeProviderContext } from './MobStateTreeProvider.constants'
import { TMobStateTreeProvider } from './MobStateTreeProvider.types'

const Index: TMobStateTreeProvider = ({ store,  children }) => (
    <MobStateTreeProviderContext.Provider value={store}>
        {children}
    </MobStateTreeProviderContext.Provider>
)

export default Index
