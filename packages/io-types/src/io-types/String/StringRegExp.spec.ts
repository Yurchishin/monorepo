import {UserPasswordRegExp} from "@monorepo/dictionary";
import {stringRegExp} from './StringRegExp'
import {assertSuccess, assertFailure} from "../../utils"

describe('stringRegExp(UserPassword.REG_EXP)', () => {
	const regExp = stringRegExp(new RegExp(UserPasswordRegExp))

	it('right decode (\'OneTwo123***\')', () => {
		assertSuccess(regExp, 'OneTwo123***')
	})

	it('left decode (\'onetwo123***\')', () => {
		assertFailure(regExp, 'onetwo123***', 1)
	})

	it('left decode (\'OneTwo123\')', () => {
		assertFailure(regExp, 'OneTwo123', 1)
	})

	it('left decode (\'55555\')', () => {
		assertFailure(regExp, '55555', 1)
	})


	it('left decode (1)', () => {
		assertFailure(regExp, 1, 1)
	})
})
