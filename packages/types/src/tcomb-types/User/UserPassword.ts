import t, { Intersection } from 'tcomb-validation'
import { UserPasswordError, UserPasswordRange, UserPasswordRegExp } from '@chat/dictionary'
import { addErrorMessage } from '../../utils'
import tString from '../String'

export const UserPassword: Intersection<string> = t.intersection([
        addErrorMessage(tString.String, UserPasswordError.TYPE),
        addErrorMessage(tString.StringLTE(UserPasswordRange.MAX), UserPasswordError.MAX_LENGTH),
        addErrorMessage(tString.StringGTE(UserPasswordRange.MIN), UserPasswordError.MIN_LENGTH),
        addErrorMessage(tString.StringRegExp(UserPasswordRegExp), UserPasswordError.REG_EXP),
], 'UserPassword')
