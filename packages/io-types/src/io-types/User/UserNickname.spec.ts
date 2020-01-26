import {userNickname} from './UserNickname'
import {assertSuccess, assertFailure, assertSuccessMessage} from "../../utils"
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

	it('left decode (\'yury\')', () => {
		assertFailure(userNickname, 'yury', 1)
	})

	it('left decode (\'yuryyuryyuryyuryyuryyury\')', () => {
		assertFailure(userNickname, 'yuryyuryyuryyuryyuryyury', 1)
	})

	it('left decode (1)', () => {
		assertFailure(userNickname, 1, 4)
	})

	it('left decode error message (\'yury\')', () => {
		assertSuccessMessage(userNickname, 'yury', [
			UserNicknameError.MIN_LENGTH,
		])
	})

	it('left decode error message (1)', () => {
		assertSuccessMessage(userNickname, 1, [
			UserNicknameError.TYPE,
			UserNicknameError.MAX_LENGTH,
			UserNicknameError.MIN_LENGTH,
			UserNicknameError.REG_EXP,
		])
	})
})
