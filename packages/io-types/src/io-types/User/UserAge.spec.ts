import {userAge} from './UserAge'
import {assertSuccess, assertFailure, assertSuccessMessage} from "../../utils"
import { UserAgeError } from "@monorepo/dictionary";

describe('userAge', () => {
	it('right decode (12)', () => {
		assertSuccess(userAge, 12)
	})

	it('right decode (60)', () => {
		assertSuccess(userAge, 60)
	})

	it('right decode (30)', () => {
		assertSuccess(userAge, 30)
	})

	it('left decode (11)', () => {
		assertFailure(userAge, 11, 1)
	})

	it('left decode (61)', () => {
		assertFailure(userAge, 61, 1)
	})

	it('left decode (\'30\')', () => {
		assertFailure(userAge, '30', 3)
	})

	it('left decode (\'11\')', () => {
		assertFailure(userAge, '11', 3)
	})

	it('left decode (\'61\')', () => {
		assertFailure(userAge, '61', 3)
	})

	it('right decode error message (\'61\')', () => {
		assertSuccessMessage(userAge, '61', [
			UserAgeError.TYPE,
			UserAgeError.MAX,
			UserAgeError.MIN,
		])
	})
})
