import {userEmail} from './UserEmail'
import {assertSuccess, assertFailureMessage} from "../../utils"
import { UserEmailError } from "@monorepo/dictionary";

describe('userEmail', () => {
	it('right decode (\'yurarary158@gmail.com\')', () => {
		assertSuccess(userEmail, 'yurarary158@gmail.com')
	})

	it('left decode (\'yurarary\')', () => {
		assertFailureMessage(userEmail, 'yurarary', [
			UserEmailError.REG_EXP,
		])
	})

	it('left decode (\'yurarary@\')', () => {
		assertFailureMessage(userEmail, 'yurarary@', [
			UserEmailError.REG_EXP,
		])
	})

	it('left decode (\'yurarary@12123\')', () => {
		assertFailureMessage(userEmail, 'yurarary@12123', [
			UserEmailError.REG_EXP,
		])
	})

	it('left decode (1)', () => {
		assertFailureMessage(userEmail, 1, [
			UserEmailError.TYPE,
		])
	})
})
