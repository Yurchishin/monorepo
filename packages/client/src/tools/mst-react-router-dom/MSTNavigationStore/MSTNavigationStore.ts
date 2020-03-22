/* tslint:disable:no-null-keyword no-expression-statement */
import { addDisposer, getEnv, types } from 'mobx-state-tree'
import { History, Location } from 'history'
import { IType } from 'mobx-state-tree/dist/internal'
import { Instance } from 'mobx-state-tree/dist/core/type/type'

type NavigationStoreGetNev = {
    history: History<undefined>;
}

const location: IType<Location | null | undefined, Location, Location> = types.frozen({
    pathname: '',
    search: '',
    state: undefined,
    hash: '',
    key: '' as string | undefined,
})

const MSTNavigationRoute = types.model({
    name: types.identifier,
    path: types.string,
    exact: types.boolean,
    strict: types.boolean,
    location,
})

const MSTNavigationStore = types.model({
    location,
    routes: types.map(MSTNavigationRoute),
    currentRoute: types.safeReference(MSTNavigationRoute, { acceptsUndefined: true }),
})
    .actions(self => {
        const { history } = getEnv<NavigationStoreGetNev>(self)

        const setLocation = (location: Location<undefined>) => {
            self.location = location
        }

        const handleLocationChange = (location: Location<undefined>) => {
            setLocation(location)

            self.routes.forEach(route => {
                if (route.location === location) self.currentRoute = route
            })
        }

        const afterCreate = () => {
            handleLocationChange(history.location)

            const disposer = history.listen(handleLocationChange)

            addDisposer(self, disposer)
        }

        return {
            afterCreate,
            setLocation,
            handleLocationChange,
            push: history.push,
            replace: history.replace,
            go: history.go,
            goBack: history.goBack,
            goForward: history.goForward,
        }
    })

export type NavigationStore = Instance<typeof MSTNavigationStore>

export default MSTNavigationStore

