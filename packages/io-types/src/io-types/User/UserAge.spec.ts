import {userAge} from './UserAge'
import {assertSuccess, assertFailureMessage} from "../../utils"
import { UserAgeError } from "@monorepo/dictionary";

describe('userAge', () => {
	it('right decode (12)', () => {
		assertSuccess(userAge, 12)
	})

	it('right decode (60)', () => {
		assertSuccess(userAge, 60)
	})

	it('right decode (undefined)', () => {
		assertSuccess(userAge, undefined)
	})

	it('right decode (30)', () => {
		assertSuccess(userAge, 30)
	})

	it('left decode (11)', () => {
		assertFailureMessage(userAge, 11, [UserAgeError.MIN, UserAgeError.TYPE])
	})

	it('left decode (61)', () => {
		assertFailureMessage(userAge, 61, [UserAgeError.MAX, UserAgeError.TYPE])
	})

	it('left decode (\'30\')', () => {
		assertFailureMessage(userAge, '30', [UserAgeError.MAX, UserAgeError.MIN, UserAgeError.TYPE])
	})

	it('left decode (\'11\')', () => {
		assertFailureMessage(userAge, '11', [UserAgeError.MAX, UserAgeError.MIN, UserAgeError.TYPE])
	})

	it('left decode (\'61\')', () => {
		assertFailureMessage(userAge, '61', [UserAgeError.MAX, UserAgeError.MIN, UserAgeError.TYPE])
	})
})
