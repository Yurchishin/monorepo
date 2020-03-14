import {StringEqualLength} from './StringEqualLength'
import {expectTypeSuccess, expectTypeFailure} from "../../tests"

describe('StringEqualLength(5)', () => {
	const eqLength5 = StringEqualLength(5)

	expectTypeSuccess(eqLength5, '55555')
	expectTypeFailure(eqLength5, '666666')
	expectTypeFailure(eqLength5, '4444')
	expectTypeFailure(eqLength5, 1)
})
