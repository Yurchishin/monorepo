import * as t from 'io-ts'
import { UserSurnameError, UserSurnameRange, UserSurnameRegExp } from '@monorepo/dictionary'
import { withMessage } from 'io-ts-types/lib/withMessage'
import { stringGreaterThenOrEqual, stringLessThenOrEqual, stringRegExp } from '../../brands/String'

export const userSurname = t.intersection([
    withMessage(t.string, () => UserSurnameError.TYPE),
    withMessage(stringLessThenOrEqual(UserSurnameRange.MAX), () => UserSurnameError.MAX_LENGTH),
    withMessage(stringGreaterThenOrEqual(UserSurnameRange.MIN), () => UserSurnameError.MIN_LENGTH),
    withMessage(stringRegExp(new RegExp(UserSurnameRegExp)), () => UserSurnameError.REG_EXP),
], 'UserSurname')
