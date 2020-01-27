import {userPassword} from './UserPassword'
import {assertSuccess, assertFailureMessage} from "../../utils"
import {UserPasswordError} from "@monorepo/dictionary";

describe('userPassword', () => {
	it('right decode (\'OneTwo123***\')', () => {
		assertSuccess(userPassword, 'OneTwo123***')
	})

	it('left decode (\'Ot1*\')', () => {
		assertFailureMessage(userPassword, 'Ot1*', [
			UserPasswordError.MIN_LENGTH,
			UserPasswordError.REG_EXP,
		])
	})

	it('left decode (\'YuraYuraYuraYuraYuraYura\')', () => {
		assertFailureMessage(userPassword, 'YuraYuraYuraYuraYuraYura', [
			UserPasswordError.MAX_LENGTH,
			UserPasswordError.REG_EXP,
		])
	})

	it('left decode (\'onetwo123***\')', () => {
		assertFailureMessage(userPassword, 'onetwo123***', [
			UserPasswordError.REG_EXP,
		])
	})

	it('left decode (1)', () => {
		assertFailureMessage(userPassword, 1, [
			UserPasswordError.TYPE,
			UserPasswordError.MAX_LENGTH,
			UserPasswordError.MIN_LENGTH,
			UserPasswordError.REG_EXP,
		])
	})
})
