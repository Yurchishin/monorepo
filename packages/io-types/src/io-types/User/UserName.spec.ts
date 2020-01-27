import {userName} from './UserName'
import {assertSuccess, assertFailureMessage} from "../../utils"
import { UserNameError } from "@monorepo/dictionary";

describe('userName', () => {
	it('right decode (\'Yura\')', () => {
		assertSuccess(userName, 'Yura')
	})

	it('right decode (undefined)', () => {
		assertSuccess(userName, undefined)
	})

	it('left decode (\'Yu\')', () => {
		assertFailureMessage(userName, 'Yu', [
			UserNameError.MIN_LENGTH,
			UserNameError.TYPE,
		])
	})

	it('left decode (\'YuraYuraYuraYuraYuraYura\')', () => {
		assertFailureMessage(userName, 'YuraYuraYuraYuraYuraYura', [
			UserNameError.MAX_LENGTH,
			UserNameError.TYPE,
		])
	})

	it('left decode (\'Yura1\')', () => {
		assertFailureMessage(userName, 'Yura1', [
			UserNameError.REG_EXP,
			UserNameError.TYPE,
		])
	})

	it('left decode (1)', () => {
		assertFailureMessage(userName, 1, [
			UserNameError.MIN_LENGTH,
			UserNameError.MAX_LENGTH,
			UserNameError.REG_EXP,
			UserNameError.TYPE,
		])
	})
})
