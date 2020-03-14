import t, { Irreducible } from 'tcomb-validation'
import R from '@chat/ramda'

export const Null: Irreducible<null> = t.irreducible('Null', R.isNull)

