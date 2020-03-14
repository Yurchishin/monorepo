/* tslint:disable:variable-name */
import t, { Irreducible } from 'tcomb-validation'
import R from '@chat/ramda'

export const Undefined: Irreducible<undefined> = t.irreducible('Undefined', R.isUndefined)

