import {UserPassword} from './UserPassword'
import {expectTypeSuccess, expectTypeErrors} from "../../tests"
import {UserPasswordError} from "@monorepo/dictionary";

describe('UserPassword', () => {
	expectTypeSuccess(UserPassword, 'OneTwo123***')
	expectTypeErrors(UserPassword, 'Ot1*', [
		UserPasswordError.MIN_LENGTH,
		UserPasswordError.REG_EXP,
	])
	expectTypeErrors(UserPassword, 'YuraYuraYuraYuraYuraYura', [
		UserPasswordError.MAX_LENGTH,
		UserPasswordError.REG_EXP,
	])
	expectTypeErrors(UserPassword, 'onetwo123***', [
		UserPasswordError.REG_EXP,
	])
	expectTypeErrors(UserPassword, 1, [
		UserPasswordError.TYPE,
		UserPasswordError.MAX_LENGTH,
		UserPasswordError.MIN_LENGTH,
		UserPasswordError.REG_EXP,
	])
})
