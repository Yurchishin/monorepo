import t, { Intersection } from 'tcomb-validation'
import { UserSurnameError, UserSurnameRange, UserSurnameRegExp } from '@chat/dictionary'
import { addErrorMessage } from '../../utils'
import tString from '../String'

const tSurname: Intersection<string> = t.intersection([
    addErrorMessage(tString.String, UserSurnameError.TYPE),
    addErrorMessage(tString.StringLTE(UserSurnameRange.MAX), UserSurnameError.MAX_LENGTH),
    addErrorMessage(tString.StringGTE(UserSurnameRange.MIN), UserSurnameError.MIN_LENGTH),
    addErrorMessage(tString.StringRegExp(UserSurnameRegExp), UserSurnameError.REG_EXP),
], 'Surname')

export const UserSurname = t.maybe(tSurname, 'UserSurname')
