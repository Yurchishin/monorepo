import {userSurname} from './UserSurname'
import {assertSuccess, assertFailure, assertSuccessMessage} from "../../utils"
import { UserSurnameError } from "@monorepo/dictionary";

describe('userSurname', () => {
	it('right decode (\'Rybak\')', () => {
		assertSuccess(userSurname, 'Rybak')
	})

	it('left decode (\'Ry\')', () => {
		assertFailure(userSurname, 'Ry', 1)
	})

	it('left decode (\'RybakRybakRybakRybakRybak\')', () => {
		assertFailure(userSurname, 'RybakRybakRybakRybakRybak', 1)
	})

	it('left decode (\'Rybak1\')', () => {
		assertFailure(userSurname, 'Rybak1', 1)
	})

	it('left decode (1)', () => {
		assertFailure(userSurname, 1, 4)
	})

	it('left decode error message (\'Rybak1\')', () => {
		assertSuccessMessage(userSurname, 'Rybak1', [
			UserSurnameError.REG_EXP,
		])
	})

	it('left decode error message (1)', () => {
		assertSuccessMessage(userSurname, 1, [
			UserSurnameError.TYPE,
			UserSurnameError.MAX_LENGTH,
			UserSurnameError.MIN_LENGTH,
			UserSurnameError.REG_EXP,
		])
	})
})
