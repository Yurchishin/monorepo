import t, { Intersection } from 'tcomb-validation'
import { UserNicknameError, UserNicknameRange, UserNicknameRegExp } from '@monorepo/dictionary'
import { addErrorMessage } from '../../utils'
import tString from '../String'

export const UserNickname: Intersection<string> = t.intersection([
        addErrorMessage(tString.String, UserNicknameError.TYPE),
        addErrorMessage(tString.StringLTE(UserNicknameRange.MAX), UserNicknameError.MAX_LENGTH),
        addErrorMessage(tString.StringGTE(UserNicknameRange.MIN), UserNicknameError.MIN_LENGTH),
        addErrorMessage(tString.StringRegExp(UserNicknameRegExp), UserNicknameError.REG_EXP),
], 'UserNickname')
