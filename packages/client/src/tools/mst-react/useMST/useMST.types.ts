// tslint:disable-next-line:no-submodule-imports
import { IUseObserverOptions } from 'mobx-react-lite/dist/useObserver'
import { $Keys, $Values } from 'utility-types'
import { RootStore } from '../MobStateTreeProvider/MobStateTreeProvider.types'

type RSV = $Values<RootStore>
type RSK = $Keys<RootStore>

export type TUseMST = (
    storeSelector: ((rootStore: RootStore) => RSV) | RSK,
    dataSelector: (selectedStore: RSV) => $Values<RSV>,
    baseComponentName?: string,
    options?: IUseObserverOptions,
) => $Values<RSV>
