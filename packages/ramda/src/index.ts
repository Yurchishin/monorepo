import * as ramda from 'ramda'
import * as logic from './Logic'
import * as math from './Math'
import * as relation from './Relation'

export default {
    ...ramda,
    ...logic,
    ...math,
    ...relation,
}

export * from 'funfix'
export * from 'Function/Curry'
