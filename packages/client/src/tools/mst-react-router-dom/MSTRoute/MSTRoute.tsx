/* tslint:disable no-if-statement*/
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, PropsWithChildren, ReactElement, useMemo } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { MSTTypecheck } from 'mst-react-lite'
import { IAnyType } from 'mobx-state-tree/dist/core/type/type'
import { Instance } from 'mobx-state-tree/dist'

export type MSTRouteProps<T extends IAnyType> = PropsWithChildren<RouteProps & {
    $mst_route_name: string;
    path: string;
    paramsType?: T;
    onParamsError?: (params: Instance<IAnyType>, error: Error, props: RouteProps) => void;
    title?: string;
}>

const MSTRoute = <T extends IAnyType>({
    $mst_route_name,
    paramsType: Type,
    onParamsError,
    title,
    ...routeProps
}: MSTRouteProps<T>): ReactElement => {
    const { params } = (routeProps as any).computedMatch

    const error = useMemo(() => {
        if (Type) return MSTTypecheck(Type, params)

        return null
    }, [Type, params])

    useEffect(() => {
        if (error && onParamsError) {
            onParamsError(params, error, routeProps)
        }
    }, [error, onParamsError, params, routeProps])

    useEffect(() => {
        if (title) {
            document.title = title
        }
    }, [title])

    return (
        <Route {...routeProps} />
    )
}

export default MSTRoute
