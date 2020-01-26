import {userEmail} from './UserEmail'
import {assertSuccess, assertFailure, assertSuccessMessage} from "../../utils"
import { UserEmailError } from "@monorepo/dictionary";

describe('userEmail', () => {
	it('left decode (\'yurarary\')', () => {
		assertFailure(userEmail, 'yurarary', 1)
	})

	it('left decode (\'yurarary@\')', () => {
		assertFailure(userEmail, 'yurarary@', 1)
	})

	it('left decode (\'yurarary@12123\')', () => {
		assertFailure(userEmail, 'yurarary@12123', 1)
	})

	it('left decode (1)', () => {
		assertFailure(userEmail, 1, 1)
	})

	it('right decode (\'yurarary158@gmail.com\')', () => {
		assertSuccess(userEmail, 'yurarary158@gmail.com')
	})

	it('left decode error message (\'yurarary\')', () => {
		assertSuccessMessage(userEmail, 'yurarary', [
			UserEmailError.REG_EXP,
		])
	})

	it('left decode error message (1)', () => {
		assertSuccessMessage(userEmail, 1, [
			UserEmailError.TYPE,
		])
	})
})
