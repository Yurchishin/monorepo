import {UserSurname} from './UserSurname'
import {expectTypeSuccess, expectTypeErrors} from "../../tests"
import { UserSurnameError } from "@monorepo/dictionary";

describe('UserSurname', () => {
	expectTypeSuccess(UserSurname, 'Rybak')
	expectTypeSuccess(UserSurname, undefined)
	expectTypeErrors(UserSurname, 'Ry', [
		UserSurnameError.MIN_LENGTH,
	])
	expectTypeErrors(UserSurname, 'RybakRybakRybakRybakRybak', [
		UserSurnameError.MAX_LENGTH,
	])
	expectTypeErrors(UserSurname, 'Rybak1', [
		UserSurnameError.REG_EXP,
	])
	expectTypeErrors(UserSurname, 1, [
		UserSurnameError.TYPE,
		UserSurnameError.MAX_LENGTH,
		UserSurnameError.MIN_LENGTH,
		UserSurnameError.REG_EXP,
	])
})
