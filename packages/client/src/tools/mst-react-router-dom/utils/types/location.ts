import { IType } from 'mobx-state-tree/dist/internal'
import { Location } from 'history'
import { types } from 'mobx-state-tree'

export const location: IType<Location | null | undefined, Location, Location> = types.frozen({
    pathname: '',
    search: '',
    state: undefined,
    hash: '',
    key: '' as string | undefined,
})
