import {UserEmail} from './UserEmail'
import {expectTypeSuccess, expectTypeErrors} from "../../tests"
import { UserEmailError } from "@monorepo/dictionary";

describe('UserEmail', () => {
	expectTypeSuccess(UserEmail, 'yurarary158@gmail.com')
	expectTypeErrors(UserEmail, 'yurarary', [UserEmailError.REG_EXP])
	expectTypeErrors(UserEmail, 'yurarary@', [UserEmailError.REG_EXP])
	expectTypeErrors(UserEmail, 'yurarary@12123', [UserEmailError.REG_EXP])
	expectTypeErrors(UserEmail, 1, [UserEmailError.TYPE, UserEmailError.TYPE])
})
