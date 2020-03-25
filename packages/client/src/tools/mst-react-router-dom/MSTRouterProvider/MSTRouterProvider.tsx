/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react'
import { Router } from 'react-router-dom'
import { MobStateTreeContext } from 'mst-react-lite'
import { TMSTRouterProvider } from './MSTRouterProvider.types'
import { MST_DEFAULT_NAVIGATION_STORE_NAME } from './MSTRouterProvider.constants'

const MSTRouterProvider: TMSTRouterProvider = ({ children, history, navigationStoreName }) => {
    const mstContext = useContext(MobStateTreeContext)

    return (
        <MobStateTreeContext.Provider value={{ ...mstContext, navigationStoreName }}>
            <Router history={history}>
                {children}
            </Router>
        </MobStateTreeContext.Provider>
    )
}

MSTRouterProvider.defaultProps = {
    navigationStoreName: MST_DEFAULT_NAVIGATION_STORE_NAME,
}

export default MSTRouterProvider
