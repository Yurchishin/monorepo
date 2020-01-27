import * as t from 'io-ts'
import { UserPasswordError, UserPasswordRange, UserPasswordRegExp } from '@monorepo/dictionary'
import { withMessage } from 'io-ts-types/lib/withMessage'
import tString from '../String'

export const userPassword = t.intersection([
        withMessage(tString.string, () => UserPasswordError.TYPE),
        withMessage(tString.lessThenOrEqual(UserPasswordRange.MAX), () => UserPasswordError.MAX_LENGTH),
        withMessage(tString.greaterThenOrEqual(UserPasswordRange.MIN), () => UserPasswordError.MIN_LENGTH),
        withMessage(tString.regExp(new RegExp(UserPasswordRegExp)), () => UserPasswordError.REG_EXP),
], 'UserPassword')
