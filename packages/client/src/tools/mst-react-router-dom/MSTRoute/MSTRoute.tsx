/* tslint:disable no-if-statement*/
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, PropsWithChildren, ReactElement } from 'react'
import { useMSTParams } from 'mst-react-router-dom'
import { Route, RouteProps } from 'react-router-dom'
import { IAnyType } from 'mobx-state-tree/dist/core/type/type'
import { Instance } from 'mobx-state-tree/dist'

export type MSTRouteProps<T extends IAnyType> = PropsWithChildren<RouteProps & {
    $mst_route_name: string;
    path: string;
    paramsType?: T;
    onParamsError?: (params: Instance<IAnyType>, error: Error, props: RouteProps) => void;
}>

const MSTRoute = <T extends IAnyType>({
    $mst_route_name,
    paramsType: Type,
    onParamsError,
    ...routeProps
}: MSTRouteProps<T>): ReactElement => {
    const [params, error] = useMSTParams(Type)

    useEffect(() => {
        if (error && onParamsError) {
            onParamsError(params, error, routeProps)
        }
    }, [onParamsError, error, params, routeProps])

    return (
        <Route {...routeProps} />
    )
}

export default MSTRoute
