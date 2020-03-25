/* tslint:disable:no-any */
import { isValidElement, ReactElement, ReactNode } from 'react'
import { MSTRouteProps } from '../MSTRoute/MSTRoute'

export const isMSTRouteComponent = (component: ReactNode): component is ReactElement<MSTRouteProps<any>> =>
    isValidElement(component) && component.props.hasOwnProperty('$mst_route_name')
