/* tslint:disable:no-null-keyword no-expression-statement no-if-statement no-let */
import { addDisposer, getEnv, types } from 'mobx-state-tree'
import { Location } from 'history'
import { Instance } from 'mobx-state-tree/dist/core/type/type'
import { match } from 'react-router'

import {
    location,
    MSTNavigationRoute,
    NavigationStoreGetEnv,
    TMSTNavigationRoute,
} from './MSTNavigationStore.types'

const MSTNavigationStore = types.model({
    location: types.maybeNull(location),
    routes: types.map(MSTNavigationRoute),
    currentRoute: types.safeReference(MSTNavigationRoute),
})
    .actions(self => {
        const { history } = getEnv<NavigationStoreGetEnv>(self)
        let match: match | null = null

        const setLocation = (location: Location<undefined>) => {
            self.location = location
        }

        const setMatch = (newMatch: match) => {
            match = newMatch
        }

        return {
            setLocation,
            setMatch,
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
                if (route.path === location.pathname) {
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

        const setRoutes = (routes: TMSTNavigationRoute[]) => {
            routes.forEach(route => self.routes.set(route.$mst_route_name, route))
            self.handleLocationChange(history.location)
        }

        const afterCreate = () => {
            const disposer = history.listen(self.handleLocationChange)

            addDisposer(self, disposer)

            self.handleLocationChange(history.location)
        }

        return {
            afterCreate,
            setRoutes,
        }
    })

export type NavigationStore = Instance<typeof MSTNavigationStore>

export default MSTNavigationStore

