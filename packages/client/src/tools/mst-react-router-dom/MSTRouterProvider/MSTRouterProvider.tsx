/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MSTRouterContext } from './MSTRouterProvider.constants'
import { TMSTRouterProvider } from './MSTRouterProvider.types'

const MSTRouterProvider: TMSTRouterProvider = ({ children, navigationStoreName, ...routerProps }) => (
    <MSTRouterContext.Provider value={navigationStoreName}>
        <BrowserRouter {...routerProps}>
            {children}
        </BrowserRouter>
    </MSTRouterContext.Provider>
)

export default MSTRouterProvider
