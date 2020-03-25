import { IUseObserverOptions } from 'mobx-react-lite/dist/useObserver'
import { RootStore } from '../MSTProvider'

export type TUseMSTRoot = (
    options?: IUseObserverOptions,
) => RootStore
