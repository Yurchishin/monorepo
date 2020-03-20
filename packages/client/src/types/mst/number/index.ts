import { types } from 'mobx-state-tree'
import R from '@chat/ramda'

export const positiveInt = types.refinement(types.number, R.isPositiveInt)
