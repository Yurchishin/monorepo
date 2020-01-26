import * as t from 'io-ts'
import { UserAgeRange, UserAgeError } from '@monorepo/dictionary'
import { numberGreaterThenOrEqual, numberLessThenOrEqual } from '../../brands/Number'
import { withMessage } from 'io-ts-types/lib/withMessage'

export const userAge = t.intersection([
    withMessage(t.number, () => UserAgeError.TYPE),
    withMessage(numberLessThenOrEqual(UserAgeRange.MAX), () => UserAgeError.MAX),
    withMessage(numberGreaterThenOrEqual(UserAgeRange.MIN), () => UserAgeError.MIN),
], 'UserAge')
