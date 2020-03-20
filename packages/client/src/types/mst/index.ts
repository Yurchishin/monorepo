import { types as mstTypes } from 'mobx-state-tree'
import * as styleUnit from './styleUnit'
import * as number from './number'

const types = {
    ...mstTypes,
    ...number,
    ...styleUnit,
}

export default types
