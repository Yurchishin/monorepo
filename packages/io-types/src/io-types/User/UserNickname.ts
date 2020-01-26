import * as t from 'io-ts'
import { UserNicknameError, UserNicknameRange, UserNicknameRegExp } from '@monorepo/dictionary'
import { withMessage } from 'io-ts-types/lib/withMessage'
import { stringGreaterThenOrEqual, stringLessThenOrEqual, stringRegExp } from '../../brands/String'

export const userNickname = t.intersection([
        withMessage(t.string, () => UserNicknameError.TYPE),
        withMessage(stringLessThenOrEqual(UserNicknameRange.MAX), () => UserNicknameError.MAX_LENGTH),
        withMessage(stringGreaterThenOrEqual(UserNicknameRange.MIN), () => UserNicknameError.MIN_LENGTH),
        withMessage(stringRegExp(new RegExp(UserNicknameRegExp)), () => UserNicknameError.REG_EXP),
], 'UserNickname')
