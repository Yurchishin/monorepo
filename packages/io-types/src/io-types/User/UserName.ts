import * as t from 'io-ts'
import { UserNameError, UserNameRange, UserNameRegExp } from '@monorepo/dictionary'
import { withMessage } from 'io-ts-types/lib/withMessage'
import { stringGreaterThenOrEqual, stringLessThenOrEqual, stringRegExp } from '../../brands/String'

export const userName = t.intersection([
        withMessage(t.string, () => UserNameError.TYPE),
        withMessage(stringLessThenOrEqual(UserNameRange.MAX), () => UserNameError.MAX_LENGTH),
        withMessage(stringGreaterThenOrEqual(UserNameRange.MIN), () => UserNameError.MIN_LENGTH),
        withMessage(stringRegExp(new RegExp(UserNameRegExp)), () => UserNameError.REG_EXP),
], 'UserName')
