import {StringGT} from './StringGT'
import {expectTypeSuccess, expectTypeFailure} from "../../tests"

describe('StringGT(5)', () => {
	const GT5 = StringGT(5)

	expectTypeSuccess(GT5, '666666')
	expectTypeFailure(GT5, '55555')
	expectTypeFailure(GT5, '4444')
	expectTypeFailure(GT5, 1)
})
