import * as t from 'io-ts'
import { UserSurnameError, UserSurnameRange, UserSurnameRegExp } from '@monorepo/dictionary'
import { withMessage } from 'io-ts-types/lib/withMessage'
import tString from '../String'

const tSurname = t.intersection([
    withMessage(tString.lessThenOrEqual(UserSurnameRange.MAX), () => UserSurnameError.MAX_LENGTH),
    withMessage(tString.greaterThenOrEqual(UserSurnameRange.MIN), () => UserSurnameError.MIN_LENGTH),
    withMessage(tString.regExp(new RegExp(UserSurnameRegExp)), () => UserSurnameError.REG_EXP),
], 'UserSurname!')

const tUndefined = withMessage(t.undefined, () => UserSurnameError.TYPE)

export const userSurname = t.union([tUndefined, tSurname], 'UserSurname')
