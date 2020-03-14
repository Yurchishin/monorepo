import {StringNotEqualLength} from './StringNotEqualLength'
import {expectTypeSuccess, expectTypeFailure} from "../../tests"

describe('StringNotEqualLength(5)', () => {
	const notEqLength5 = StringNotEqualLength(5)

	expectTypeSuccess(notEqLength5, '666666')
	expectTypeSuccess(notEqLength5, '4444')
	expectTypeFailure(notEqLength5, '55555')
	expectTypeFailure(notEqLength5, 1)
})
