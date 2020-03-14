import t, { Intersection } from 'tcomb-validation'
import { UserEmailError } from '@monorepo/dictionary'
import { addErrorMessage } from '../../utils'
import tString from '../String'

export const UserEmail: Intersection<string> = t.intersection([
    addErrorMessage(tString.String, UserEmailError.TYPE),
    addErrorMessage(tString.Email, UserEmailError.REG_EXP),
], 'UserEmail')
