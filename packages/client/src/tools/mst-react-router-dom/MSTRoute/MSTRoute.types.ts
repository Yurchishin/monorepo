import { FC } from 'react'
import { RouteProps } from 'react-router-dom'
import { IAnyType } from 'mobx-state-tree/dist/core/type/type'

export type MSTRouteProps = RouteProps & {
    $mst_route_name: string;
    path: string;
    paramsType?: IAnyType;
    onParamsError?: (error: Error) => void;
}

export type TMSTRoute = FC<MSTRouteProps>
