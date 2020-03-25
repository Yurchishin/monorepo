import { getParent, types } from 'mobx-state-tree'
import { matchPath } from 'react-router'
import { Instance, SnapshotOut } from 'mobx-state-tree/dist/core/type/type'
import { mstType } from '../utils/types'

const MSTNavigationRoute = types.model({
    $mst_route_name: types.identifier,
    path: types.string,
    paramsType: types.maybe(mstType),
    exact: types.boolean,
    strict: types.boolean,
    sensitive: types.boolean,
})
    .views(self => {
        // tslint:disable-next-line:no-magic-numbers
        const { location } = getParent(self, 2)

        return {
            get match() {
                return matchPath(location.pathname, {
                    path: self.path,
                    exact: self.exact,
                    strict: self.strict,
                    sensitive: self.sensitive,
                })
            },
        }
    })

export type TMSTNavigationRoute = Instance<typeof MSTNavigationRoute>
export type TMSTNavigationRouteCreateSnapshotOut = SnapshotOut<typeof MSTNavigationRoute>

export default MSTNavigationRoute
