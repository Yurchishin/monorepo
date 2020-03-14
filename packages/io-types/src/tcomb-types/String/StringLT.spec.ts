import {StringLT} from './StringLT'
import {expectTypeSuccess, expectTypeFailure} from "../../tests"

describe('StringLT(5)', () => {
	const LT5 = StringLT(5)

	expectTypeSuccess(LT5, '4444')
	expectTypeFailure(LT5, '55555')
	expectTypeFailure(LT5, '666666')
	expectTypeFailure(LT5, 1)
})
