/* tslint:disable:no-if-statement no-throw newspaper-order */
import { IUseObserverOptions } from 'mobx-react-lite/dist/useObserver'
import { useMSTRoot } from '../useMSTRoot'
import { RootStore } from '../MSTProvider'

/*********************************************************************************************/

const identity = <SSK extends RSK>(store: RootStore[SSK]) => store

const isSSK = <SSK extends RSK>(
    storeSelector: SSK | ((rootStore: RootStore) => RootStore[SSK]),
    rootStore: RootStore,
): storeSelector is SSK => storeSelector in rootStore

/*********************************************************************************************/

type RSK = $Keys<RootStore>

/*********************************************************************************************/

type StoreSelectorKey<SSK extends RSK> = SSK
type StoreSelectorFunction<SSK extends RSK, SSV extends RootStore[SSK]> = (rootStore: RootStore) => SSV

/*********************************************************************************************/

type KeyDefaultDataSelector<SSK extends RSK> = (store: RootStore[SSK]) => RootStore[SSK]
type KeyDataSelector<SSK extends RSK, DSV> = (store: RootStore[SSK]) => DSV
type FunctionDataSelector<SSK extends RSK, SSV extends RootStore[SSK], DSV = SSV> = (store: SSV) => DSV
type FunctionDefaultDataSelector<SSK extends RSK, SSV extends RootStore[SSK]> = (store: SSV) => SSV

/*********************************************************************************************/

export function useMSTStore<SSK extends RSK>(
    storeSelector: StoreSelectorKey<SSK>,
    dataSelector?: KeyDefaultDataSelector<SSK>,
    options?: IUseObserverOptions,
): RootStore[SSK]

export function useMSTStore<SSK extends RSK, DSV>(
    storeSelector: StoreSelectorKey<SSK>,
    dataSelector?: KeyDataSelector<SSK, DSV>,
    options?: IUseObserverOptions,
): DSV

export function useMSTStore<SSK extends RSK, SSV extends RootStore[SSK], DSV = SSV>(
    storeSelector: StoreSelectorFunction<SSK, SSV>,
    dataSelector?: FunctionDataSelector<SSK, SSV, DSV>,
    options?: IUseObserverOptions,
): DSV

export function useMSTStore<SSK extends RSK, SSV extends RootStore[SSK]>(
    storeSelector: StoreSelectorFunction<SSK, SSV>,
    dataSelector?: FunctionDefaultDataSelector<SSK, SSV>,
    options?: IUseObserverOptions,
): SSV

/*********************************************************************************************/

export function useMSTStore<SSK extends RSK, DSV = RootStore[SSK]>(
        storeSelector: SSK | ((rootStore: RootStore) => RootStore[SSK]),
        dataSelector: (store: RootStore[SSK]) => DSV = identity,
        options?: IUseObserverOptions,
): DSV | RootStore[SSK] {
        const rootStore = useMSTRoot(options)

        const store = isSSK(storeSelector, rootStore)
            ? rootStore[storeSelector]
            : storeSelector(rootStore)

        return dataSelector ? dataSelector(store) : store
    }

export default useMSTStore
