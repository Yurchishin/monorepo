/* eslint-disable react/jsx-props-no-spreading */
/* tslint:disable:no-expression-statement */
import React, { Children, isValidElement, useEffect, useMemo } from 'react'
import { Switch } from 'react-router-dom'
import { TMSTNavigationRoute } from '../MSTNavigationStore'
import { useNSTNavigationStore } from '../useNSTNavigationStore'
import { TMSTSwitchSwitch } from './MSTSwitch.types'

const MSTSwitch: TMSTSwitchSwitch = ({ children, ...switchProps }) => {
    const navigationStore = useNSTNavigationStore()

    const routes = useMemo(() =>
        Children.toArray(children)
            .filter(isValidElement)
            .filter(child => (child.props as object).hasOwnProperty('$mst_route_name'))
            .map(route => {
                const props = route.props as TMSTNavigationRoute

                return {
                    $mst_route_name: props.$mst_route_name,
                    path: props.path,
                }
            }),
        [children],
    )

    useEffect(() => {
        navigationStore.setRoutes(routes)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [routes])

    return (
        <Switch {...switchProps}>
            {children}
        </Switch>
    )
}

export default MSTSwitch
