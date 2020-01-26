import {userName} from './UserName'
import {assertSuccess, assertFailure, assertSuccessMessage} from "../../utils"
import { UserNameError } from "@monorepo/dictionary";

describe('userName', () => {
	it('right decode (\'Yura\')', () => {
		assertSuccess(userName, 'Yura')
	})

	it('left decode (\'Yu\')', () => {
		assertFailure(userName, 'Yu', 1)
	})

	it('left decode (\'YuraYuraYuraYuraYuraYura\')', () => {
		assertFailure(userName, 'YuraYuraYuraYuraYuraYura', 1)
	})

	it('left decode (\'Yura1\')', () => {
		assertFailure(userName, 'Yura1', 1)
	})

	it('left decode (1)', () => {
		assertFailure(userName, 1, 4)
	})

	it('left decode error message (\'Yura1\')', () => {
		assertSuccessMessage(userName, 'Yura1', [
			UserNameError.REG_EXP,
		])
	})

	it('left decode error message (1)', () => {
		assertSuccessMessage(userName, 1, [
			UserNameError.TYPE,
			UserNameError.MAX_LENGTH,
			UserNameError.MIN_LENGTH,
			UserNameError.REG_EXP,
		])
	})
})
