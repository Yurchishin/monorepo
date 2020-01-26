import * as t from 'io-ts'
import { UserPasswordError, UserPasswordRange, UserPasswordRegExp } from '@monorepo/dictionary'
import { withMessage } from 'io-ts-types/lib/withMessage'
import { stringGreaterThenOrEqual, stringLessThenOrEqual, stringRegExp } from '../../brands/String'

export const userPassword = t.intersection([
        withMessage(t.string, () => UserPasswordError.TYPE),
        withMessage(stringLessThenOrEqual(UserPasswordRange.MAX), () => UserPasswordError.MAX_LENGTH),
        withMessage(stringGreaterThenOrEqual(UserPasswordRange.MIN), () => UserPasswordError.MIN_LENGTH),
        withMessage(stringRegExp(new RegExp(UserPasswordRegExp)), () => UserPasswordError.REG_EXP),
], 'UserPassword')
