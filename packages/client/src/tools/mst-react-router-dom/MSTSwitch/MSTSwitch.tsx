/* eslint-disable react/jsx-props-no-spreading */
/* tslint:disable:no-expression-statement no-console no-any */
import React, { Children, useEffect, useMemo } from 'react'
import { Switch } from 'react-router-dom'
import { useNSTNavigationStore } from '../useNSTNavigationStore'
import { TMSTSwitchSwitch } from './MSTSwitch.types'
import { useObserver } from 'mobx-react-lite'
import { isMSTRouteComponent } from './MSTSwitch.utils'

const MSTSwitch: TMSTSwitchSwitch = ({ children, ...switchProps }) => {
    const navigationStore = useNSTNavigationStore()

    const routes = useMemo(() => {
            const mstRouteComponents = Children.toArray(children)
                .filter(isMSTRouteComponent)

            return mstRouteComponents.map(route => {
                const props = route.props

                return {
                    $mst_route_name: props.$mst_route_name,
                    path: props.path,
                    paramsType: props.paramsType,
                    exact: props.exact || false,
                    strict: props.strict || false,
                    sensitive: props.sensitive || false,
                }
            })
        },
        [children],
    )

    useEffect(() => {
        navigationStore.setRoutes(routes)
    }, [navigationStore, routes])

    return useObserver(() => (
        navigationStore.currentRoute ? (
            <Switch {...switchProps}>
                {children}
            </Switch>
        ) : null
    ))
}

export default MSTSwitch
