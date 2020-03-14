import * as ramda from 'ramda'
import * as ramdaFantasy from 'ramda-fantasy'
import * as logic from './Logic'
import * as math from './Math'
import * as relation from './Relation'

export default {
    ...ramda,
    ...ramdaFantasy,
    ...logic,
    ...math,
    ...relation,
}

export * from 'Function/Curry'
