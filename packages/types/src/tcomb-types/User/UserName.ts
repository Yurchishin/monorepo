import t, { Intersection } from 'tcomb-validation'
import { UserNameError, UserNameRange, UserNameRegExp } from '@monorepo/dictionary'
import tString from '../String'
import { addErrorMessage } from '../../utils'

const tName: Intersection<string> = t.intersection([
        addErrorMessage(tString.String, UserNameError.TYPE),
        addErrorMessage(tString.StringGTE(UserNameRange.MIN), UserNameError.MIN_LENGTH),
        addErrorMessage(tString.StringLTE(UserNameRange.MAX), UserNameError.MAX_LENGTH),
        addErrorMessage(tString.StringRegExp(UserNameRegExp), UserNameError.REG_EXP),
], 'Name')

export const UserName = t.maybe(tName, 'UserName')
