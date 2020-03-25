import { types } from 'mobx-state-tree'
import { IType } from 'mobx-state-tree/dist/internal'
import { Instance } from 'mobx-state-tree/dist/core/type/type'
import { History, Location } from 'history'

export type NavigationStoreGetEnv = {
    history: History<undefined>;
}

export const location: IType<Location | null | undefined, Location, Location> = types.frozen({
    pathname: '',
    search: '',
    state: undefined,
    hash: '',
    key: '' as string | undefined,
})

export const MSTNavigationRoute = types.model({
    $mst_route_name: types.identifier,
    path: types.string,
})

export type TMSTNavigationRoute = Instance<typeof MSTNavigationRoute>
