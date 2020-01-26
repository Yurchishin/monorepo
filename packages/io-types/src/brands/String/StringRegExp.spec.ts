import * as t from "io-ts"
import {UserPasswordRegExp} from "@monorepo/dictionary";
import {stringRegExp} from './StringRegExp'
import {assertSuccess, assertFailure} from "../../utils"

describe('stringRegExp(UserPassword.REG_EXP)', () => {
	const regExp = stringRegExp(new RegExp(UserPasswordRegExp))

	const stringRegExpTest = t.intersection([t.string, regExp])

	it('right decode (\'OneTwo123***\')', () => {
		assertSuccess(stringRegExpTest, 'OneTwo123***')
	})

	it('left decode (\'onetwo123***\')', () => {
		assertFailure(stringRegExpTest, 'onetwo123***', 1)
	})

	it('left decode (\'OneTwo123\')', () => {
		assertFailure(stringRegExpTest, 'OneTwo123', 1)
	})

	it('left decode (\'55555\')', () => {
		assertFailure(stringRegExpTest, '55555', 1)
	})


	it('left decode (1)', () => {
		assertFailure(stringRegExpTest, 1, 2)
	})
})
