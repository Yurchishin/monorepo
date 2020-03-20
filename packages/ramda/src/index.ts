import * as ramda from 'ramda'
import * as is from './Is'
import * as logic from './Logic'
import * as math from './Math'
import * as relation from './Relation'

export default {
    ...ramda,
    ...is,
    ...logic,
    ...math,
    ...relation,
}

export * from 'funfix'
export * from 'Function/Curry'
