import * as t from 'io-ts'
import { UserNameError, UserNameRange, UserNameRegExp } from '@monorepo/dictionary'
import { withMessage } from 'io-ts-types/lib/withMessage'
import tString from '../String'

const tName = t.intersection([
        withMessage(tString.greaterThenOrEqual(UserNameRange.MIN), () => UserNameError.MIN_LENGTH),
        withMessage(tString.lessThenOrEqual(UserNameRange.MAX), () => UserNameError.MAX_LENGTH),
        withMessage(tString.regExp(new RegExp(UserNameRegExp)), () => UserNameError.REG_EXP),
], 'UserName!')

const tUndefined = withMessage(t.undefined, () => UserNameError.TYPE)

export const userName = t.union([tName, tUndefined], 'UserName')
