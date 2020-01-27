import {userSurname} from './UserSurname'
import {assertSuccess, assertFailureMessage} from "../../utils"
import { UserSurnameError } from "@monorepo/dictionary";

describe('userSurname', () => {
	it('right decode (\'Rybak\')', () => {
		assertSuccess(userSurname, 'Rybak')
	})

	it('right decode (undefined)', () => {
		assertSuccess(userSurname, undefined)
	})

	it('left decode (\'Ry\')', () => {
		assertFailureMessage(userSurname, 'Ry', [
			UserSurnameError.TYPE,
			UserSurnameError.MIN_LENGTH,
		])
	})

	it('left decode (\'RybakRybakRybakRybakRybak\')', () => {
		assertFailureMessage(userSurname, 'RybakRybakRybakRybakRybak', [
			UserSurnameError.TYPE,
			UserSurnameError.MAX_LENGTH,
		])
	})

	it('left decode (\'Rybak1\')', () => {
		assertFailureMessage(userSurname, 'Rybak1', [
			UserSurnameError.TYPE,
			UserSurnameError.REG_EXP,
		])
	})

	it('left decode (1)', () => {
		assertFailureMessage(userSurname, 1, [
			UserSurnameError.TYPE,
			UserSurnameError.MAX_LENGTH,
			UserSurnameError.MIN_LENGTH,
			UserSurnameError.REG_EXP,
		])
	})
})
