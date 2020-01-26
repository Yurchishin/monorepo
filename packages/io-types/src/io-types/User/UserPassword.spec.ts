import {userPassword} from './UserPassword'
import {assertSuccess, assertFailure, assertSuccessMessage} from "../../utils"
import {UserPasswordError} from "@monorepo/dictionary";

describe('userPassword', () => {
	it('right decode (\'OneTwo123***\')', () => {
		assertSuccess(userPassword, 'OneTwo123***')
	})

	it('left decode (\'Ot1*\')', () => {
		assertFailure(userPassword, 'Yu', 2)
	})

	it('left decode (\'YuraYuraYuraYuraYuraYura\')', () => {
		assertFailure(userPassword, 'YuraYuraYuraYuraYuraYura', 2)
	})

	it('left decode (1)', () => {
		assertFailure(userPassword, 1, 4)
	})

	it('left decode error message (\'onetwo123***\')', () => {
		assertSuccessMessage(userPassword, 'onetwo123***', [
			UserPasswordError.REG_EXP,
		])
	})

	it('left decode error message (1)', () => {
		assertSuccessMessage(userPassword, 1, [
			UserPasswordError.TYPE,
			UserPasswordError.MAX_LENGTH,
			UserPasswordError.MIN_LENGTH,
			UserPasswordError.REG_EXP,
		])
	})
})
