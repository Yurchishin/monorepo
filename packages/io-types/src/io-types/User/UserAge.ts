import * as t from 'io-ts'
import { UserAgeRange, UserAgeError } from '@monorepo/dictionary'
import tNumber from '../Number'
import { withMessage } from 'io-ts-types/lib/withMessage'

const tAge = t.intersection([
    withMessage(tNumber.lessThenOrEqual(UserAgeRange.MAX), () => UserAgeError.MAX),
    withMessage(tNumber.greaterThenOrEqual(UserAgeRange.MIN), () => UserAgeError.MIN),
], 'UserAge!')

const tUndefined = withMessage(t.undefined, () => UserAgeError.TYPE)

export const userAge = t.union([tAge, tUndefined], 'UserAge')
