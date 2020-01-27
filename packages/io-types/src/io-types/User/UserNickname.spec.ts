import {userNickname} from './UserNickname'
import {assertSuccess, assertFailureMessage} from "../../utils"
import { UserNicknameError } from "@monorepo/dictionary";

describe('userNickname', () => {
	it('right decode (\'yuryy\')', () => {
		assertSuccess(userNickname, 'yuryy')
	})

	it('right decode (\'yury12\')', () => {
		assertSuccess(userNickname, 'yury12')
	})

	it('right decode (\'yury12-_\')', () => {
		assertSuccess(userNickname, 'yury12')
	})

	it('left decode (\'yuryyuryyuryyuryyuryyury\')', () => {
		assertFailureMessage(userNickname, 'yuryyuryyuryyuryyuryyury', [
			UserNicknameError.MAX_LENGTH,
		])
	})

	it('left decode (\'yury\')', () => {
		assertFailureMessage(userNickname, 'yury', [
			UserNicknameError.MIN_LENGTH,
		])
	})

	it('left decode (1)', () => {
		assertFailureMessage(userNickname, 1, [
			UserNicknameError.TYPE,
			UserNicknameError.MAX_LENGTH,
			UserNicknameError.MIN_LENGTH,
			UserNicknameError.REG_EXP,
		])
	})
})
