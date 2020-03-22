import { IUseObserverOptions } from 'mobx-react-lite/dist/useObserver'
import { RootStore } from '../MobStateTreeProvider'

export type TUseMSTRoot = (
    options?: IUseObserverOptions,
) => RootStore
