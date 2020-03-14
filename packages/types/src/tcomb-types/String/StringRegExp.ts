import t from 'tcomb-validation'
import R from '@chat/ramda'

export const StringRegExp = (regExp: RegExp) => t.irreducible(
    'StringRegExp',
    R.test(regExp),
)
