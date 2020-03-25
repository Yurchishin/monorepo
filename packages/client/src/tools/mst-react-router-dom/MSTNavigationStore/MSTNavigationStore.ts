/* tslint:disable:no-null-keyword no-expression-statement no-if-statement */
import { addDisposer, getEnv, types } from 'mobx-state-tree'
import { Location } from 'history'
import { Instance } from 'mobx-state-tree/dist/core/type/type'
import { MSTNavigationRoute, TMSTNavigationRouteCreateSnapshotOut } from '../MSTNavigationRoute'
import { NavigationStoreGetEnv } from './MSTNavigationStore.types'
import { location } from '../utils/types'

const MSTNavigationStore = types.model({
    location: types.maybeNull(location),
    routes: types.map(MSTNavigationRoute),
    currentRoute: types.safeReference(MSTNavigationRoute),
})
    .views(self => ({
        get match() {
            return self.currentRoute ? self.currentRoute.match : null
        },
    }))
    .actions(self => {
        const { history } = getEnv<NavigationStoreGetEnv>(self)

        const setLocation = (location: Location<undefined>) => {
            self.location = location
        }

        return {
            setLocation,
            push: history.push,
            replace: history.replace,
            go: history.go,
            goBack: history.goBack,
            goForward: history.goForward,
            block: history.block,
        }
    })
    .actions(self => {
        const handleLocationChange = (location: Location<undefined>) => {
            self.setLocation(location)

            self.routes.forEach(route => {
                if (route.match) {
                    self.currentRoute = route
                }
            })
        }

        return {
            handleLocationChange,
        }
    })
    .actions(self => {
        const { history } = getEnv<NavigationStoreGetEnv>(self)

        const setRoutes = (routes: TMSTNavigationRouteCreateSnapshotOut[]) => {
            routes.forEach(route => self.routes.set(route.$mst_route_name, route))
            self.handleLocationChange(history.location)
        }

        const afterCreate = () => {
            self.handleLocationChange(history.location)

            const disposer = history.listen(self.handleLocationChange)

            addDisposer(self, disposer)
        }

        return {
            afterCreate,
            setRoutes,
        }
    })

export type NavigationStore = Instance<typeof MSTNavigationStore>

export default MSTNavigationStore

