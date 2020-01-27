import * as t from 'io-ts'
import { UserNicknameError, UserNicknameRange, UserNicknameRegExp } from '@monorepo/dictionary'
import { withMessage } from 'io-ts-types/lib/withMessage'
import tString from '../String'

export const userNickname = t.intersection([
        withMessage(tString.string, () => UserNicknameError.TYPE),
        withMessage(tString.lessThenOrEqual(UserNicknameRange.MAX), () => UserNicknameError.MAX_LENGTH),
        withMessage(tString.greaterThenOrEqual(UserNicknameRange.MIN), () => UserNicknameError.MIN_LENGTH),
        withMessage(tString.regExp(new RegExp(UserNicknameRegExp)), () => UserNicknameError.REG_EXP),
], 'UserNickname')
