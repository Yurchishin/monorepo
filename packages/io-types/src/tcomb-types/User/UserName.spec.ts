import {UserName} from './UserName'
import {expectTypeSuccess, expectTypeErrors} from "../../tests"
import { UserNameError } from "@monorepo/dictionary";

describe('UserName', () => {
	expectTypeSuccess(UserName, 'Yura')
	expectTypeSuccess(UserName, undefined)
	expectTypeErrors(UserName, 'Yu', [
		UserNameError.MIN_LENGTH,
	])
	expectTypeErrors(UserName, 'YuraYuraYuraYuraYuraYura', [
		UserNameError.MAX_LENGTH,
	])
	expectTypeErrors(UserName, 'Yura1', [
		UserNameError.REG_EXP,
	])
	expectTypeErrors(UserName, 1, [
		UserNameError.TYPE,
		UserNameError.MIN_LENGTH,
		UserNameError.MAX_LENGTH,
		UserNameError.REG_EXP,
	])
})
