import t, { Intersection } from 'tcomb-validation'
import { UserAgeRange, UserAgeError } from '@monorepo/dictionary'
import tNumber from '../Number'
import { addErrorMessage } from '../../utils'

const tAge: Intersection<number> = t.intersection([
    addErrorMessage(tNumber.Number, UserAgeError.TYPE),
    addErrorMessage(tNumber.NumberLTE(UserAgeRange.MAX), UserAgeError.MAX),
    addErrorMessage(tNumber.NumberGTE(UserAgeRange.MIN), UserAgeError.MIN),
], 'Age')

export const UserAge = t.maybe(tAge, 'UserAge')
