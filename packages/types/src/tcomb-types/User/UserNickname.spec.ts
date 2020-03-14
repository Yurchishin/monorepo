import {UserNickname} from './UserNickname'
import {expectTypeSuccess, expectTypeErrors} from "../../tests"
import { UserNicknameError } from "@monorepo/dictionary";

describe('UserNickname', () => {
	expectTypeSuccess(UserNickname, 'yuryy')
	expectTypeSuccess(UserNickname, 'yury12')
	expectTypeSuccess(UserNickname, 'yury12')
	expectTypeErrors(UserNickname, 'yuryyuryyuryyuryyuryyury', [
		UserNicknameError.MAX_LENGTH,
	])
	expectTypeErrors(UserNickname, 'yury', [
		UserNicknameError.MIN_LENGTH,
	])
	expectTypeErrors(UserNickname, 1, [
		UserNicknameError.TYPE,
		UserNicknameError.MAX_LENGTH,
		UserNicknameError.MIN_LENGTH,
		UserNicknameError.REG_EXP,
	])
})
