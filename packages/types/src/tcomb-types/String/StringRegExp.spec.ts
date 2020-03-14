import {UserPasswordRegExp} from "@chat/dictionary";
import {StringRegExp} from './StringRegExp'
import {expectTypeSuccess, expectTypeFailure} from "../../tests"

describe('StringRegExp(UserPasswordRegExp)', () => {
	const regExp = StringRegExp(new RegExp(UserPasswordRegExp))

	expectTypeSuccess(regExp, 'OneTwo123***')
	expectTypeFailure(regExp, 'onetwo123***')
	expectTypeFailure(regExp, 'OneTwo123')
	expectTypeFailure(regExp, '55555')
	expectTypeFailure(regExp, 1)
})
